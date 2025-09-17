// components/RealCommentsRatingSection.js - COMPLETE OPTIMIZED VERSION
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, User, Clock, Trash2, Send, AlertCircle } from 'lucide-react';
import { 
    collection, 
    addDoc, 
    query, 
    where, 
    orderBy, 
    onSnapshot, 
    deleteDoc,
    doc,
    serverTimestamp,
    limit 
} from 'firebase/firestore';
import { db } from '../firebaseConfig';

const RealCommentsRatingSection = ({ movie }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    
    // Form states
    const [userName, setUserName] = useState('');
    const [userRating, setUserRating] = useState(0);
    const [commentText, setCommentText] = useState('');
    const [showForm, setShowForm] = useState(false);

    const MAX_COMMENT_LENGTH = 500;

    // 4-OPTION RATING SYSTEM WITH SOPHISTICATED SYMBOLS
    const ratingOptions = [
        {
            value: 1,
            label: "Disappointment",
            symbol: "⚡",
            color: "text-red-400",
            bgColor: "bg-red-500/10 border-red-500/30",
            description: "Missed the mark completely"
        },
        {
            value: 2,
            label: "Flawed", 
            symbol: "◐",
            color: "text-orange-400",
            bgColor: "bg-orange-500/10 border-orange-500/30",
            description: "Has issues but watchable"
        },
        {
            value: 3,
            label: "Worth the Ride",
            symbol: "◆",
            color: "text-yellow-400", 
            bgColor: "bg-yellow-500/10 border-yellow-500/30",
            description: "Solid entertainment value"
        },
        {
            value: 4,
            label: "Exceptional",
            symbol: "◉",
            color: "text-yellow-400",
            bgColor: "bg-yellow-500/20 border-yellow-500/40", 
            description: "Cinematic excellence"
        }
    ];

    // OPTIMIZED QUERY WITH INDEX - Load comments from Firebase
    useEffect(() => {
        if (!movie?.imdbID) return;

        const commentsRef = collection(db, 'comments');
        // FULL OPTIMIZED QUERY - USES YOUR FIREBASE INDEX
        const q = query(
            commentsRef,
            where('movieId', '==', movie.imdbID),
            where('approved', '==', true),
            orderBy('createdAt', 'desc'),
            limit(10)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const commentsData = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                createdAt: doc.data().createdAt?.toDate()
            }));
            
            setComments(commentsData);
            setLoading(false);
        }, (error) => {
            console.error('Error loading comments:', error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [movie?.imdbID]);

    // Submit new comment
    const handleSubmitComment = async (e) => {
        e.preventDefault();
        
        if (!userName.trim() || !commentText.trim() || userRating === 0) {
            alert('Please fill all fields and provide a rating.');
            return;
        }

        if (commentText.length > MAX_COMMENT_LENGTH) {
            alert(`Comment must be less than ${MAX_COMMENT_LENGTH} characters.`);
            return;
        }

        setSubmitting(true);

        try {
            await addDoc(collection(db, 'comments'), {
                movieId: movie.imdbID,
                movieTitle: movie.Title,
                userName: userName.trim(),
                rating: userRating,
                comment: commentText.trim(),
                createdAt: serverTimestamp(),
                approved: true, // Auto-approve for now
                ip: 'hidden',
                userAgent: navigator.userAgent.substring(0, 100)
            });

            // Reset form
            setUserName('');
            setUserRating(0);
            setCommentText('');
            setShowForm(false);
            
            alert('Comment submitted successfully!');
        } catch (error) {
            console.error('Error submitting comment:', error);
            alert('Error submitting comment. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    // Delete comment
    const handleDeleteComment = async (commentId) => {
        if (!confirm('Are you sure you want to delete this comment?')) return;

        try {
            await deleteDoc(doc(db, 'comments', commentId));
        } catch (error) {
            console.error('Error deleting comment:', error);
            alert('Error deleting comment.');
        }
    };

    // Format date
    const formatDate = (date) => {
        if (!date) return 'Just now';
        
        const now = new Date();
        const diff = now - date;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor(diff / (1000 * 60));
        
        if (minutes < 60) return `${minutes}m ago`;
        if (hours < 24) return `${hours}h ago`;
        if (days === 0) return 'Today';
        if (days === 1) return 'Yesterday';
        if (days < 7) return `${days} days ago`;
        return date.toLocaleDateString();
    };

    // Display rating with symbol
    const displayRating = (rating) => {
        const option = ratingOptions.find(r => r.value === rating);
        if (!option) return null;
        
        return (
            <div className="flex items-center gap-2">
                <span className={`text-lg ${option.color}`}>{option.symbol}</span>
                <span className="text-white text-sm font-medium">{option.label}</span>
            </div>
        );
    };

    // Get average rating display
    const getAverageRatingDisplay = () => {
        if (comments.length === 0) return null;
        
        const avg = comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length;
        const roundedAvg = Math.round(avg);
        const option = ratingOptions.find(r => r.value === roundedAvg);
        
        return (
            <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                    <span className={`text-2xl ${option?.color || 'text-gray-400'}`}>
                        {option?.symbol || '◯'}
                    </span>
                    <span className="text-xl font-bold text-yellow-400">
                        {option?.label || 'No ratings'}
                    </span>
                </div>
                <div className="text-sm text-gray-400">
                    {comments.length} review{comments.length !== 1 ? 's' : ''}
                </div>
            </div>
        );
    };

    if (loading) {
        return (
            <section className="bg-gradient-to-br from-gray-900/30 to-black/50 border border-gray-800/50 rounded-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-8 flex items-center gap-4">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                    Community Reviews
                </h2>
                <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400"></div>
                    <span className="ml-3 text-gray-300">Loading reviews...</span>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-gradient-to-br from-gray-900/30 to-black/50 border border-gray-800/50 rounded-2xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white flex items-center gap-4">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />
                    Community Reviews
                </h2>
                
                {/* Average Rating Display */}
                {getAverageRatingDisplay()}
            </div>

            {/* Add Review Button */}
            {!showForm && (
                <motion.button
                    onClick={() => setShowForm(true)}
                    className="mb-8 bg-yellow-400 text-black py-3 px-6 rounded-xl font-medium hover:bg-yellow-300 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Write a Review
                </motion.button>
            )}

            {/* Comment Form */}
            <AnimatePresence>
                {showForm && (
                    <motion.form
                        onSubmit={handleSubmitComment}
                        className="bg-gray-800/30 border border-gray-700/30 rounded-xl p-6 mb-8"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-xl font-medium text-white mb-4">Share Your Review</h3>
                        
                        {/* Name Input */}
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                placeholder="Enter your name"
                                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 focus:bg-gray-600/50 transition-all"
                                maxLength={50}
                                required
                            />
                        </div>

                        {/* 4-OPTION RATING INPUT */}
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Your Rating
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {ratingOptions.map((option) => (
                                    <motion.button
                                        key={option.value}
                                        type="button"
                                        onClick={() => setUserRating(option.value)}
                                        className={`p-4 rounded-xl border-2 transition-all text-center ${
                                            userRating === option.value
                                                ? `${option.bgColor} border-current scale-105`
                                                : 'border-gray-600/50 hover:border-gray-500/50 hover:scale-105'
                                        }`}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Symbol */}
                                        <div className={`text-3xl mb-2 ${userRating === option.value ? option.color : 'text-gray-500'}`}>
                                            {option.symbol}
                                        </div>
                                        
                                        {/* Label */}
                                        <div className={`font-medium text-sm ${userRating === option.value ? 'text-white' : 'text-gray-400'}`}>
                                            {option.label}
                                        </div>
                                        
                                        {/* Description */}
                                        <div className={`text-xs mt-1 ${userRating === option.value ? 'text-gray-300' : 'text-gray-500'}`}>
                                            {option.description}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                            
                            {userRating > 0 && (
                                <motion.p 
                                    className="text-yellow-400 font-medium mt-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    You rated this movie: {ratingOptions.find(r => r.value === userRating)?.label}
                                </motion.p>
                            )}
                        </div>

                        {/* Comment Input */}
                        <div className="mb-4">
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Your Review
                            </label>
                            <textarea
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Share your thoughts about this movie..."
                                rows={4}
                                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400/50 focus:bg-gray-600/50 transition-all resize-vertical"
                                maxLength={MAX_COMMENT_LENGTH}
                                required
                            />
                            <div className="text-sm text-gray-400 mt-1">
                                {commentText.length}/{MAX_COMMENT_LENGTH} characters
                            </div>
                        </div>

                        {/* Form Actions */}
                        <div className="flex items-center gap-3">
                            <button
                                type="submit"
                                disabled={submitting}
                                className="bg-yellow-400 text-black py-2 px-6 rounded-lg font-medium hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                            >
                                {submitting ? (
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                                ) : (
                                    <Send className="w-4 h-4" />
                                )}
                                {submitting ? 'Submitting...' : 'Submit Review'}
                            </button>
                            
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="bg-gray-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-500 transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>

            {/* Comments List */}
            {comments.length > 0 ? (
                <div className="space-y-6">
                    {comments.map((comment, index) => (
                        <motion.div
                            key={comment.id}
                            className="bg-gray-800/20 border border-gray-700/20 rounded-xl p-6 hover:bg-gray-700/20 transition-all"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Comment Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                                        <User className="w-5 h-5 text-black" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">{comment.userName}</h4>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <Clock className="w-4 h-4" />
                                            {formatDate(comment.createdAt)}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-3">
                                    {/* Rating Display */}
                                    {displayRating(comment.rating)}
                                    
                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDeleteComment(comment.id)}
                                        className="text-gray-400 hover:text-red-400 transition-colors"
                                        title="Delete comment"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Comment Content */}
                            <p className="text-gray-200 leading-relaxed">
                                {comment.comment}
                            </p>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl text-gray-300 mb-2">No reviews yet</h3>
                    <p className="text-gray-400">Be the first to share your thoughts about this movie!</p>
                </div>
            )}

            {/* Comment Guidelines */}
            <div className="mt-8 pt-6 border-t border-gray-800/50">
                <p className="text-center text-gray-500 text-sm">
                    Please keep reviews respectful and relevant to the movie. Comments are subject to moderation.
                </p>
            </div>
        </section>
    );
};

export default RealCommentsRatingSection;
