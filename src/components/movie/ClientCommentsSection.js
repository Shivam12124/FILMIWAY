// components/ClientCommentsSection.js
'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Star, LogIn, UserCheck, Send, Users, Award, Crown, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { auth, db } from '../lib/firebase';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { collection, doc, setDoc, onSnapshot, serverTimestamp, addDoc, query, orderBy } from 'firebase/firestore';

// Define RATING_OPTIONS directly in this component since it's causing import issues
const RATING_OPTIONS = [
    { 
        value: 1, 
        label: "A Disappointment", 
        color: "#dc2626", 
        symbol: "△",
        bgColor: "bg-red-900/30",
        description: "Falls short of expectations"
    },
    { 
        value: 2, 
        label: "Flawed", 
        color: "#ea580c", 
        symbol: "◇",
        bgColor: "bg-orange-900/30",
        description: "Watchable with notable flaws"
    },
    { 
        value: 3, 
        label: "Worth the Ride", 
        color: "#16a34a", 
        symbol: "◆",
        bgColor: "bg-green-900/30",
        description: "Solid entertainment value"
    },
    { 
        value: 4, 
        label: "Exceptional", 
        color: "#eab308", 
        symbol: "★",
        bgColor: "bg-yellow-900/30",
        description: "Outstanding cinematic achievement"
    }
];

const ClientCommentsSection = ({ movieId, movieTitle, movieInfo = {} }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [userRating, setUserRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [averageRating, setAverageRating] = useState(0);
    const [hasUserRated, setHasUserRated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);

    // Auth state listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setAuthLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // Load existing comments and ratings
    useEffect(() => {
        if (!movieId) return;

        const commentsRef = collection(db, 'movieComments', movieId.toString(), 'comments');
        const unsubscribe = onSnapshot(
            query(commentsRef, orderBy('createdAt', 'desc')),
            (snapshot) => {
                const loadedComments = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                
                setComments(loadedComments);
                
                // Calculate average rating (1-4 scale)
                const ratingsOnly = loadedComments.filter(c => c.rating > 0).map(c => c.rating);
                if (ratingsOnly.length > 0) {
                    const avg = ratingsOnly.reduce((sum, r) => sum + r, 0) / ratingsOnly.length;
                    setAverageRating(Math.round(avg * 10) / 10);
                }

                // Check if current user has already rated
                if (currentUser) {
                    const userComment = loadedComments.find(c => c.userId === currentUser.uid);
                    if (userComment) {
                        setUserRating(userComment.rating || 0);
                        setNewComment(userComment.text || '');
                        setHasUserRated(true);
                    }
                }
            }
        );

        return unsubscribe;
    }, [movieId, currentUser]);

    const handleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Error signing in:', error);
            alert('Error signing in. Please try again.');
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUserRating(0);
            setNewComment('');
            setHasUserRated(false);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const handleSubmitComment = async () => {
        if (!currentUser) {
            alert('Please sign in to submit a review');
            return;
        }

        if (!userRating || userRating === 0) {
            alert('Please select a rating before submitting your review');
            return;
        }

        if (!newComment.trim()) {
            alert('Please write a comment before submitting');
            return;
        }

        setLoading(true);
        try {
            const ratingData = RATING_OPTIONS.find(option => option.value === userRating);
            const commentData = {
                userId: currentUser.uid,
                userName: currentUser.displayName || currentUser.email?.split('@')[0] || 'Anonymous User',
                userEmail: currentUser.email,
                userPhotoURL: currentUser.photoURL || null,
                text: newComment.trim(),
                rating: userRating,
                ratingLabel: ratingData?.label || '',
                ratingSymbol: ratingData?.symbol || '★',
                ratingColor: ratingData?.color || '#6b7280',
                movieId: movieId,
                movieTitle: movieTitle,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            };

            const commentsRef = collection(db, 'movieComments', movieId.toString(), 'comments');
            
            if (hasUserRated) {
                // Update existing comment
                const existingComment = comments.find(c => c.userId === currentUser.uid);
                if (existingComment) {
                    await setDoc(doc(commentsRef, existingComment.id), {
                        ...commentData,
                        createdAt: existingComment.createdAt, // Keep original creation time
                        updatedAt: serverTimestamp()
                    });
                }
            } else {
                // Create new comment
                await addDoc(commentsRef, commentData);
                setHasUserRated(true);
            }
            
        } catch (error) {
            console.error('Error saving comment:', error);
            alert('Error saving your review. Please try again.');
        }
        setLoading(false);
    };

    const getRatingDistribution = () => {
        return RATING_OPTIONS.map(option => ({
            ...option,
            count: comments.filter(c => c.rating === option.value).length
        }));
    };

    const formatTimestamp = (timestamp) => {
        if (!timestamp?.seconds) return 'Just now';
        const date = new Date(timestamp.seconds * 1000);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Custom Rating Selector
    const CustomRatingSelector = ({ rating, onRate, size = "medium", readonly = false, showLabel = true }) => {
        const [hoveredRating, setHoveredRating] = useState(0);

        const sizeClasses = {
            small: "text-xs sm:text-sm py-2 px-2 sm:px-3",
            medium: "text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-4",
            large: "text-base sm:text-lg py-3 px-4 sm:py-4 sm:px-6"
        };

        const getCurrentRatingData = () => {
            const ratingValue = hoveredRating || rating;
            return RATING_OPTIONS.find(option => option.value === ratingValue);
        };

        const currentRatingData = getCurrentRatingData();

        return (
            <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {RATING_OPTIONS.map((option) => {
                        const isSelected = option.value === rating;
                        const isHovered = option.value === hoveredRating;
                        
                        return (
                            <motion.button
                                key={option.value}
                                onClick={() => !readonly && onRate(option.value)}
                                onMouseEnter={() => !readonly && setHoveredRating(option.value)}
                                onMouseLeave={() => !readonly && setHoveredRating(0)}
                                disabled={readonly}
                                className={`
                                    ${sizeClasses[size]} rounded-xl border-2 transition-all duration-300 font-medium
                                    ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-105'}
                                    ${isSelected 
                                        ? `border-2 ${option.bgColor} shadow-lg`
                                        : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                                    }
                                    ${isHovered && !isSelected ? 'border-gray-400 bg-gray-700/50' : ''}
                                `}
                                style={{
                                    borderColor: isSelected ? option.color : undefined,
                                    backgroundColor: isSelected ? option.color + '20' : undefined,
                                    color: isSelected ? option.color : '#e5e7eb'
                                }}
                                whileHover={!readonly ? { scale: 1.02 } : {}}
                                whileTap={!readonly ? { scale: 0.98 } : {}}
                            >
                                <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                                    <span className="text-lg sm:text-2xl font-bold">{option.symbol}</span>
                                    <div className="text-left">
                                        <div className="font-semibold">{option.label}</div>
                                        <div className="text-xs opacity-80">{option.description}</div>
                                    </div>
                                </div>
                            </motion.button>
                        );
                    })}
                </div>
                
                {showLabel && currentRatingData && (
                    <motion.div 
                        className={`flex items-center justify-center gap-3 p-3 sm:p-4 rounded-xl border ${currentRatingData.bgColor}`}
                        style={{ 
                            borderColor: currentRatingData.color + '60'
                        }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <span className="text-2xl sm:text-3xl font-bold" style={{ color: currentRatingData.color }}>
                            {currentRatingData.symbol}
                        </span>
                        <div>
                            <p 
                                className="font-bold text-base sm:text-lg"
                                style={{ color: currentRatingData.color }}
                            >
                                {currentRatingData.label}
                            </p>
                            <p className="text-gray-400 text-xs sm:text-sm">{currentRatingData.description}</p>
                        </div>
                    </motion.div>
                )}
            </div>
        );
    };

    if (authLoading) {
        return (
            <motion.section 
                className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700/50"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <div className="flex items-center justify-center py-12">
                    <div className="w-8 h-8 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin" />
                    <span className="ml-3 text-gray-400">Loading reviews...</span>
                </div>
            </motion.section>
        );
    }

    return (
        <motion.section 
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
            {/* Header with Average Rating */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-0">
                <h2 className="text-xl sm:text-2xl font-light text-yellow-300 flex items-center gap-2 sm:gap-3">
                    <MessageSquare size={20} className="sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">Community Reviews & Ratings for {movieTitle}</span>
                    <span className="sm:hidden">Reviews for {movieTitle}</span>
                </h2>
                {averageRating > 0 && (
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                            {averageRating}/4
                        </div>
                        <div className="text-gray-400 text-xs sm:text-sm">
                            ({comments.filter(c => c.rating > 0).length} review{comments.filter(c => c.rating > 0).length !== 1 ? 's' : ''})
                        </div>
                    </div>
                )}
            </div>

            {/* Static Rating Information */}
            <motion.div 
                className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 mb-6 sm:mb-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h3 className="text-base sm:text-lg font-medium text-gray-200 mb-3 sm:mb-4">Professional Rating Breakdown</h3>
                
                {/* IMDb and Critics Scores */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-400">{movieInfo.rating || '7.5'}</div>
                        <div className="text-xs text-gray-400">IMDb Rating</div>
                    </div>
                    <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-green-400">{movieInfo.criticsScore || '85'}%</div>
                        <div className="text-xs text-gray-400">Critics Score</div>
                    </div>
                    <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-blue-400">{movieInfo.audienceScore || '82'}%</div>
                        <div className="text-xs text-gray-400">Audience Score</div>
                    </div>
                    <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-purple-400">{movieInfo.mindBendingIndex || '85'}</div>
                        <div className="text-xs text-gray-400">Complexity</div>
                    </div>
                </div>

                {/* Professional Rating Scale Explanation */}
                <div className="space-y-3">
                    <h4 className="text-sm font-medium text-gray-300">Our Professional Rating System:</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="flex items-center gap-2 p-2 bg-red-900/20 rounded border border-red-500/30">
                            <span className="text-red-400 font-bold">△</span>
                            <span className="text-red-300">Disappointing</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-orange-900/20 rounded border border-orange-500/30">
                            <span className="text-orange-400 font-bold">◇</span>
                            <span className="text-orange-300">Flawed</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-green-900/20 rounded border border-green-500/30">
                            <span className="text-green-400 font-bold">◆</span>
                            <span className="text-green-300">Worth the Ride</span>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-yellow-900/20 rounded border border-yellow-500/30">
                            <span className="text-yellow-400 font-bold">★</span>
                            <span className="text-yellow-300">Exceptional</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Authentication Required Notice */}
            {!currentUser && (
                <motion.div 
                    className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-6 sm:p-8 mb-6 sm:mb-8 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <LogIn size={40} className="sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-yellow-400" />
                    <h3 className="text-lg sm:text-xl font-medium text-yellow-300 mb-2">Sign In Required</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                        Create a free account to rate {movieTitle} and share your thoughts with the community.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <motion.button
                            onClick={handleSignIn}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm sm:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <LogIn size={16} className="sm:w-5 sm:h-5" />
                            Sign In to Rate & Review
                        </motion.button>
                    </div>
                </motion.div>
            )}

            {/* Review Form (Only for authenticated users) */}
            {currentUser && (
                <motion.div 
                    className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 mb-6 sm:mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                        <h3 className="text-base sm:text-lg font-medium text-gray-200">
                            {hasUserRated ? `Update Your Review of ${movieTitle}` : `Rate & Review ${movieTitle}`}
                        </h3>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                                {currentUser.photoURL ? (
                                    <img 
                                        src={currentUser.photoURL} 
                                        alt="Your avatar" 
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                ) : (
                                    <span className="text-black text-xs sm:text-sm font-bold">
                                        {currentUser.displayName?.charAt(0)?.toUpperCase() || 
                                         currentUser.email?.charAt(0)?.toUpperCase() || '?'}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs sm:text-sm text-gray-300">
                                {currentUser.displayName || currentUser.email?.split('@')[0]}
                            </span>
                            <motion.button
                                onClick={handleSignOut}
                                className="text-xs text-gray-400 hover:text-gray-300 underline"
                                whileHover={{ scale: 1.05 }}
                            >
                                Sign Out
                            </motion.button>
                        </div>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                        {/* Rating Selection */}
                        <div>
                            <label className="block text-gray-300 text-sm mb-2 sm:mb-3">
                                Your Rating * <span className="text-gray-500">Choose one option:</span>
                            </label>
                            <CustomRatingSelector
                                rating={userRating}
                                onRate={setUserRating}
                                size="small"
                                showLabel={true}
                            />
                        </div>

                        {/* Comment Input */}
                        <div>
                            <label className="block text-gray-300 text-sm mb-2">Your Review *</label>
                            <textarea
                                placeholder={`Share your thoughts about ${movieTitle}... How does it compare to Inception? What did you think of the story, performances, or mind-bending elements?`}
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                rows={3}
                                className="w-full p-3 sm:p-4 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                                maxLength={1000}
                            />
                            <div className="text-right text-xs text-gray-500 mt-1">
                                {newComment.length}/1000 characters
                            </div>
                        </div>

                        {/* Submit Button */}
                        <motion.button
                            onClick={handleSubmitComment}
                            disabled={loading || !userRating || !newComment.trim()}
                            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <MessageSquare size={14} className="sm:w-4 sm:h-4" />
                            {loading ? 'Saving Review...' : hasUserRated ? 'Update Review' : 'Submit Review'}
                        </motion.button>
                    </div>
                </motion.div>
            )}

            {/* Rating Distribution */}
            {comments.length > 0 && (
                <motion.div 
                    className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 mb-6 sm:mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-base sm:text-lg font-medium text-gray-200 mb-3 sm:mb-4">Rating Distribution</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                        {getRatingDistribution().map((rating, index) => (
                            <motion.div
                                key={rating.value}
                                className={`p-3 sm:p-4 rounded-lg border text-center ${rating.bgColor}`}
                                style={{ borderColor: rating.color + '60' }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-xl sm:text-2xl mb-1 sm:mb-2 font-bold" style={{ color: rating.color }}>
                                    {rating.symbol}
                                </div>
                                <div className="text-xs font-medium mb-1" style={{ color: rating.color }}>
                                    {rating.label}
                                </div>
                                <div className="text-lg font-bold text-gray-300">
                                    {rating.count}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Comments Display */}
            <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-medium text-gray-200 mb-3 sm:mb-4">
                    Recent Reviews ({comments.length})
                </h3>
                
                {comments.length === 0 ? (
                    <div className="text-center py-8 sm:py-12 text-gray-400">
                        <MessageSquare size={40} className="sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" />
                        <p className="text-base sm:text-lg mb-2">No reviews for {movieTitle} yet.</p>
                        <p className="text-sm sm:text-base">Be the first to share your thoughts on this mind-bending film!</p>
                        {!currentUser && (
                            <motion.button
                                onClick={handleSignIn}
                                className="mt-3 sm:mt-4 text-yellow-400 hover:text-yellow-300 underline transition-colors text-sm sm:text-base"
                                whileHover={{ scale: 1.05 }}
                            >
                                Sign in to write the first review
                            </motion.button>
                        )}
                    </div>
                ) : (
                    comments.map((comment, index) => (
                        <motion.div
                            key={comment.id}
                            className="bg-gray-800/20 rounded-xl p-4 sm:p-6 border border-gray-700/30 hover:bg-gray-800/30 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div 
                                        className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 shadow-lg"
                                        style={{ 
                                            backgroundColor: comment.ratingColor + '20',
                                            borderColor: comment.ratingColor 
                                        }}
                                    >
                                        {comment.userPhotoURL ? (
                                            <img 
                                                src={comment.userPhotoURL} 
                                                alt={comment.userName} 
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-white font-bold text-sm sm:text-lg">
                                                {comment.userName?.charAt(0)?.toUpperCase() || '?'}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <p 
                                            className="font-bold text-sm sm:text-lg"
                                            style={{ color: comment.ratingColor }}
                                        >
                                            {comment.userName}
                                            {comment.userId === currentUser?.uid && (
                                                <span className="ml-2 text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                                                    You
                                                </span>
                                            )}
                                        </p>
                                        <p className="text-gray-400 text-xs sm:text-sm">
                                            {formatTimestamp(comment.createdAt)}
                                            {comment.updatedAt && comment.updatedAt !== comment.createdAt && (
                                                <span className="ml-2 text-xs">(edited)</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                {/* Rating Badge */}
                                <div 
                                    className={`flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-2 rounded-lg border ${
                                        RATING_OPTIONS.find(r => r.value === comment.rating)?.bgColor
                                    }`}
                                    style={{ borderColor: comment.ratingColor + '60' }}
                                >
                                    <span className="text-base sm:text-xl font-bold" style={{ color: comment.ratingColor }}>
                                        {comment.ratingSymbol || '★'}
                                    </span>
                                    <span className="text-xs sm:text-sm font-medium" style={{ color: comment.ratingColor }}>
                                        {comment.ratingLabel}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                                {comment.text}
                            </p>
                        </motion.div>
                    ))
                )}
            </div>

            {/* Call to Action for Interactive Reviews */}
            <motion.div 
                className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-400/30 rounded-xl p-6 sm:p-8 mb-6 sm:mb-8 text-center mt-8"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-4xl sm:text-5xl mb-4"
                >
                    🎬
                </motion.div>
                
                <h3 className="text-lg sm:text-xl font-medium text-yellow-300 mb-3">Interactive Reviews & Community Ratings</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl mx-auto">
                    Experience our full interactive movie collection with live community reviews, professional ratings, 
                    and real-time discussions about <strong>{movieTitle}</strong> and all mind-bending films like Inception.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <Link href="/">
                        <motion.button
                            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 sm:px-8 sm:py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 text-sm sm:text-base shadow-lg hover:shadow-yellow-500/25"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Star size={16} className="sm:w-5 sm:h-5" />
                            View Interactive Collection
                        </motion.button>
                    </Link>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                        <Users size={14} className="sm:w-4 sm:h-4" />
                        <span>Join the community discussions</span>
                    </div>
                </div>
                
                {/* Features Preview */}
                <div className="mt-6 pt-6 border-t border-yellow-400/20">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div className="space-y-2">
                            <MessageSquare size={20} className="mx-auto text-yellow-400" />
                            <h4 className="text-sm font-medium text-gray-200">Live Comments</h4>
                            <p className="text-xs text-gray-400">Real-time community discussions</p>
                        </div>
                        <div className="space-y-2">
                            <Star size={20} className="mx-auto text-yellow-400" />
                            <h4 className="text-sm font-medium text-gray-200">Rate & Review</h4>
                            <p className="text-xs text-gray-400">Professional 4-tier rating system</p>
                        </div>
                        <div className="space-y-2">
                            <TrendingUp size={20} className="mx-auto text-yellow-400" />
                            <h4 className="text-sm font-medium text-gray-200">Live Analytics</h4>
                            <p className="text-xs text-gray-400">Real-time rating distributions</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom CTA */}
            <motion.div 
                className="mt-8 sm:mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <p className="text-gray-400 text-sm sm:text-base mb-4">
                    Ready to explore the full interactive experience?
                </p>
                <Link href="/">
                    <motion.button
                        className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 flex items-center gap-2 mx-auto shadow-lg hover:shadow-yellow-500/25"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Crown size={16} />
                        Explore All 10 Movies Like Inception
                    </motion.button>
                </Link>
            </motion.div>
        </motion.section>
    );
};

export default ClientCommentsSection;
