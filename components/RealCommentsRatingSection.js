// components/RealCommentsRatingSection.js - MOBILE-FRIENDLY VERSION ✅
'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, User, Clock, Trash2, Send, AlertCircle, Shield, Star, BarChart3 } from 'lucide-react';
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

// 🎨 UNIFIED COLOR SYSTEM
const COLORS = {
  accent: '#EAB308', accentHover: '#FACC15', bgPrimary: '#0B0B0C', bgCard: 'rgba(55, 65, 81, 0.3)',
  bgCardHover: 'rgba(55, 65, 81, 0.5)', textPrimary: '#FFFFFF', textSecondary: '#D1D5DB',
  textMuted: '#9CA3AF', textDisabled: '#6B7280', borderAccent: 'rgba(234, 179, 8, 0.2)',
  borderAccentHover: 'rgba(234, 179, 8, 0.4)', borderNeutral: 'rgba(107, 114, 128, 0.5)',
  borderLight: 'rgba(107, 114, 128, 0.2)',
};

const RealCommentsRatingSection = ({ movie }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [mounted, setMounted] = useState(false);
    
    const [userName, setUserName] = useState('');
    const [userRating, setUserRating] = useState(0);
    const [commentText, setCommentText] = useState('');
    const [showForm, setShowForm] = useState(false);
    
    const [userSession, setUserSession] = useState('');

    const MAX_COMMENT_LENGTH = 500;

    // ⭐ STAR RATING SYSTEM (1-4 stars)
    const ratingOptions = [
        { value: 1, label: "Disappointment", stars: 1, color: COLORS.textMuted, bgColor: `${COLORS.accent}0D`, borderStyle: "border-dashed border-2", description: "Not worth watching" },
        { value: 2, label: "Flawed", stars: 2, color: COLORS.textMuted, bgColor: `${COLORS.accent}0D`, borderStyle: "border-solid", description: "Has major issues" },
        { value: 3, label: "Worth the Ride", stars: 3, color: COLORS.accent, bgColor: `${COLORS.accent}1A`, borderStyle: "border-solid border-2", description: "Solid entertainment" },
        { value: 4, label: "Exceptional", stars: 4, color: COLORS.accentHover, bgColor: `${COLORS.accent}33`, borderStyle: "border-solid border-3", description: "Cinematic masterpiece" }
    ];

    useEffect(() => {
        setMounted(true);
        if (typeof window !== 'undefined') {
            let sessionId = sessionStorage.getItem('filmiway_session');
            if (!sessionId) {
                sessionId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                sessionStorage.setItem('filmiway_session', sessionId);
            }
            setUserSession(sessionId);
        }
    }, []);

    useEffect(() => {
        if (!mounted || !movie?.imdbID) return;
        const commentsRef = collection(db, 'comments');
        const q = query(commentsRef, where('movieId', '==', movie.imdbID), where('approved', '==', true), orderBy('createdAt', 'desc'), limit(20));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const commentsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), createdAt: doc.data().createdAt?.toDate() }));
            setComments(commentsData);
            setLoading(false);
        }, (error) => { console.error('Error loading comments:', error); setLoading(false); });
        return () => unsubscribe();
    }, [mounted, movie?.imdbID]);

    const handleSubmitComment = async (e) => {
        e.preventDefault();
        if (!userName.trim() || !commentText.trim() || userRating === 0) { alert('Please fill all fields and provide a rating.'); return; }
        if (commentText.length > MAX_COMMENT_LENGTH) { alert(`Comment must be less than ${MAX_COMMENT_LENGTH} characters.`); return; }
        setSubmitting(true);
        try {
            await addDoc(collection(db, 'comments'), {
                movieId: movie.imdbID, movieTitle: movie.Title, userName: userName.trim(), rating: userRating,
                comment: commentText.trim(), createdAt: serverTimestamp(), approved: true,
                userSession: userSession, ip: 'hidden',
                userAgent: typeof navigator !== 'undefined' ? navigator.userAgent.substring(0, 100) : 'unknown'
            });
            setUserName(''); setUserRating(0); setCommentText(''); setShowForm(false); alert('Comment submitted successfully!');
        } catch (error) { console.error('Error submitting comment:', error); alert('Error submitting comment. Please try again.'); }
        finally { setSubmitting(false); }
    };

    const handleDeleteComment = async (comment) => {
        if (comment.userSession !== userSession) { alert('You can only delete your own comments.'); return; }
        if (!confirm('Are you sure you want to delete your comment?')) return;
        try { await deleteDoc(doc(db, 'comments', comment.id)); }
        catch (error) { console.error('Error deleting comment:', error); alert('Error deleting comment.'); }
    };

    const canDeleteComment = (comment) => comment.userSession === userSession;

    const formatDate = (date) => {
        if (!date) return 'Just now';
        const now = new Date(); const diff = now - date;
        const minutes = Math.floor(diff / (1000 * 60)); const hours = Math.floor(diff / (1000 * 60 * 60)); const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        if (minutes < 60) return `${minutes}m ago`; if (hours < 24) return `${hours}h ago`; if (days < 7) return `${days} days ago`;
        return date.toLocaleDateString();
    };

    const renderStars = (count, color = COLORS.accent, size = 'w-4 h-4') => (
        <div className="flex items-center gap-0.5">
            {[...Array(4)].map((_, i) => (
                <Star key={i} className={`${size} ${i < count ? 'fill-current' : ''}`}
                      style={{ color: i < count ? color : COLORS.textDisabled }} />
            ))}
        </div>
    );

    const displayRating = (rating) => {
        const option = ratingOptions.find(r => r.value === rating);
        if (!option) return null;
        return (
            <div className="flex items-center gap-2 flex-shrink-0">
                {renderStars(option.stars, option.color, 'w-4 h-4')}
                <span className="text-sm font-medium whitespace-nowrap" style={{ color: option.color }}>{option.label}</span>
            </div>
        );
    };

    const getRatingDistribution = () => {
        const distribution = { 1: 0, 2: 0, 3: 0, 4: 0 };
        comments.forEach(comment => { if (distribution[comment.rating] !== undefined) distribution[comment.rating]++; });
        return distribution;
    };

    const VerticalBarChart = () => {
        if (comments.length === 0) return null;
        const distribution = getRatingDistribution();
        const maxCount = Math.max(...Object.values(distribution), 1);

        return (
            <motion.div className="p-4 sm:p-6 rounded-2xl border backdrop-blur-sm"
                        style={{ backgroundColor: COLORS.bgCard, borderColor: COLORS.borderNeutral }}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <h3 className="text-base sm:text-lg font-medium mb-4 sm:mb-6 flex items-center gap-2"
                    style={{ color: COLORS.textSecondary }}>
                    <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.accent }} />
                    Rating Distribution
                </h3>
                <div className="flex items-end justify-around gap-2 sm:gap-4 h-40 sm:h-48">
                    {ratingOptions.map((option) => {
                        const count = distribution[option.value];
                        const heightPercentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
                        return (
                            <div key={option.value} className="flex flex-col items-center gap-2 sm:gap-3 flex-1">
                                <motion.div className="text-center" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + option.value * 0.1 }}>
                                    <div className="text-lg sm:text-xl font-bold" style={{ color: option.color }}>{count}</div>
                                    <div className="text-xs hidden sm:block" style={{ color: COLORS.textMuted }}>{count === 1 ? 'review' : 'reviews'}</div>
                                </motion.div>
                                <div className="w-full h-full flex flex-col justify-end">
                                    <motion.div className="w-full rounded-t-lg relative overflow-hidden"
                                                style={{ backgroundColor: option.color, minHeight: count > 0 ? '20px' : '0px' }}
                                                initial={{ height: 0 }} animate={{ height: `${heightPercentage}%` }}
                                                transition={{ duration: 0.8, delay: 0.5 + option.value * 0.1, ease: "easeOut" }}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    {renderStars(option.stars, option.color, 'w-2 h-2 sm:w-3 sm:h-3')}
                                    <div className="text-xs font-medium text-center hidden sm:block" style={{ color: COLORS.textMuted }}>{option.label}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t text-center" style={{ borderColor: COLORS.borderLight }}>
                    <span className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
                        {comments.length} total review{comments.length !== 1 ? 's' : ''}
                    </span>
                </div>
            </motion.div>
        );
    };

    const getAverageRatingDisplay = () => {
        if (comments.length === 0) return null;
        const avg = comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length;
        const roundedAvg = Math.round(avg);
        const option = ratingOptions.find(r => r.value === roundedAvg);
        return (
            <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                    {renderStars(option?.stars || 0, option?.color || COLORS.accent, 'w-5 h-5 sm:w-6 sm:h-6')}
                    <span className="text-lg sm:text-xl font-bold" style={{ color: option?.color || COLORS.textMuted }}>
                        {option?.label || 'No ratings'}
                    </span>
                </div>
                <div className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
                    {comments.length} review{comments.length !== 1 ? 's' : ''}
                </div>
            </div>
        );
    };

    if (!mounted || loading) {
        return (
            <section className="rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm border"
                     style={{ backgroundColor: COLORS.bgCard, borderColor: COLORS.borderNeutral }}>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-6 flex items-center gap-3"
                    style={{ color: COLORS.textPrimary }}>
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: COLORS.accent }} />
                    Community Reviews
                </h2>
                <div className="flex items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: COLORS.accent }}></div>
                    <span className="ml-3 text-sm" style={{ color: COLORS.textSecondary }}>
                        {!mounted ? 'Initializing reviews...' : 'Loading reviews...'}
                    </span>
                </div>
            </section>
        );
    }

    return (
        <section className="rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm border"
                 style={{ backgroundColor: COLORS.bgCard, borderColor: COLORS.borderNeutral }}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-light flex items-center gap-3"
                    style={{ color: COLORS.textPrimary }}>
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: COLORS.accent }} />
                    Community Reviews
                </h2>
                {getAverageRatingDisplay()}
            </div>

            {comments.length > 0 && <VerticalBarChart />}

            {!showForm && (
                <motion.button onClick={() => setShowForm(true)}
                               className="mb-6 mt-4 py-2.5 sm:py-3 px-5 sm:px-6 rounded-xl font-medium transition-all flex items-center gap-2 text-sm sm:text-base"
                               style={{ backgroundColor: COLORS.accent, color: COLORS.bgPrimary }}
                               whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                               onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.accentHover}
                               onMouseLeave={(e) => e.currentTarget.style.backgroundColor = COLORS.accent}>
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />Write a Review
                </motion.button>
            )}

            <AnimatePresence>
                {showForm && (
                    <motion.form onSubmit={handleSubmitComment} className="rounded-xl p-4 sm:p-6 mb-6 border"
                                 style={{ backgroundColor: `${COLORS.bgCard}66`, borderColor: COLORS.borderLight }}
                                 initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
                                 exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}>
                        <h3 className="text-lg sm:text-xl font-medium mb-4 flex items-center gap-2" style={{ color: COLORS.textPrimary }}>
                            <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current" style={{ color: COLORS.accent }} />
                            Share Your Review
                        </h3>
                        
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textSecondary }}>Your Name</label>
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your name"
                                   className="w-full rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 transition-all border text-sm sm:text-base"
                                   style={{ backgroundColor: `${COLORS.bgCard}CC`, borderColor: COLORS.borderNeutral, color: COLORS.textPrimary }}
                                   onFocus={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent}
                                   onBlur={(e) => e.currentTarget.style.borderColor = COLORS.borderNeutral}
                                   maxLength={50} required />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textSecondary }}>Your Rating</label>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                                {ratingOptions.map((option) => (
                                    <motion.button key={option.value} type="button" onClick={() => setUserRating(option.value)}
                                                   className={`p-3 sm:p-4 rounded-xl transition-all text-center ${option.borderStyle}`}
                                                   style={{
                                                       backgroundColor: userRating === option.value ? option.bgColor : COLORS.bgCard,
                                                       borderColor: userRating === option.value ? option.color : COLORS.borderNeutral,
                                                       boxShadow: userRating === option.value ? `0 0 20px ${option.color}33` : 'none'
                                                   }}
                                                   whileHover={{ y: -2, scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <div className="mb-2 flex justify-center">
                                            {renderStars(option.stars, userRating === option.value ? option.color : COLORS.textDisabled, 'w-3 h-3 sm:w-4 sm:h-4')}
                                        </div>
                                        <div className="font-medium text-xs sm:text-sm"
                                             style={{ color: userRating === option.value ? COLORS.textPrimary : COLORS.textMuted }}>
                                            {option.label}
                                        </div>
                                        <div className="text-xs mt-1 hidden sm:block"
                                             style={{ color: userRating === option.value ? COLORS.textSecondary : COLORS.textDisabled }}>
                                            {option.description}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                            {userRating > 0 && (
                                <motion.p className="font-medium mt-3 flex items-center gap-2 text-sm" style={{ color: COLORS.accent }}
                                          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                                    You rated: {renderStars(ratingOptions.find(r => r.value === userRating)?.stars, COLORS.accent, 'w-3 h-3 sm:w-4 sm:h-4')}
                                    <span className="hidden sm:inline">{ratingOptions.find(r => r.value === userRating)?.label}</span>
                                </motion.p>
                            )}
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-2" style={{ color: COLORS.textSecondary }}>Your Review</label>
                            <textarea value={commentText} onChange={(e) => setCommentText(e.target.value)}
                                      placeholder="Share your thoughts about this movie..." rows={4}
                                      className="w-full rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 transition-all resize-vertical border text-sm sm:text-base"
                                      style={{ backgroundColor: `${COLORS.bgCard}CC`, borderColor: COLORS.borderNeutral, color: COLORS.textPrimary }}
                                      onFocus={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent}
                                      onBlur={(e) => e.currentTarget.style.borderColor = COLORS.borderNeutral}
                                      maxLength={MAX_COMMENT_LENGTH} required />
                            <div className="text-xs sm:text-sm mt-1" style={{ color: COLORS.textMuted }}>
                                {commentText.length}/{MAX_COMMENT_LENGTH} characters
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                            <button type="submit" disabled={submitting}
                                    className="py-2 px-4 sm:px-6 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm sm:text-base"
                                    style={{ backgroundColor: COLORS.accent, color: COLORS.bgPrimary, opacity: submitting ? 0.5 : 1,
                                            cursor: submitting ? 'not-allowed' : 'pointer' }}>
                                {submitting ? <div className="animate-spin rounded-full h-4 w-4 border-b-2" 
                                                   style={{ borderColor: COLORS.bgPrimary }}></div> : <Send className="w-4 h-4" />}
                                {submitting ? 'Submitting...' : 'Submit Review'}
                            </button>
                            <button type="button" onClick={() => setShowForm(false)}
                                    className="py-2 px-4 sm:px-6 rounded-lg font-medium transition-colors text-sm sm:text-base"
                                    style={{ backgroundColor: COLORS.bgCardHover, color: COLORS.textSecondary }}>Cancel</button>
                        </div>
                    </motion.form>
                )}
            </AnimatePresence>

            {comments.length > 0 ? (
                <div className="space-y-4 sm:space-y-6">
                    {comments.map((comment, index) => (
                        <motion.div key={comment.id} className="rounded-xl p-4 sm:p-6 transition-all border overflow-hidden"
                                    style={{ backgroundColor: `${COLORS.bgCard}33`, borderColor: COLORS.borderLight }}
                                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }} whileHover={{ backgroundColor: `${COLORS.bgCard}66` }}>
                            <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                                <div className="flex items-center gap-3 min-w-0 flex-1">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                                         style={{ backgroundColor: COLORS.accent }}>
                                        <User className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.bgPrimary }} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h4 className="font-medium text-sm sm:text-base truncate" style={{ color: COLORS.textPrimary }}>
                                            {comment.userName}
                                        </h4>
                                        <div className="flex items-center gap-2 text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
                                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />{formatDate(comment.createdAt)}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                                    {displayRating(comment.rating)}
                                    {canDeleteComment(comment) && (
                                        <button onClick={() => handleDeleteComment(comment)} className="transition-colors ml-auto sm:ml-0 flex-shrink-0"
                                                style={{ color: COLORS.textMuted }} title="Delete your comment"
                                                onMouseEnter={(e) => e.currentTarget.style.color = '#EF4444'}
                                                onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}>
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                            <p className="leading-relaxed text-sm sm:text-base break-words" style={{ color: COLORS.textSecondary }}>
                                {comment.comment}
                            </p>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12">
                    <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4" style={{ color: COLORS.textMuted }} />
                    <h3 className="text-lg sm:text-xl mb-2" style={{ color: COLORS.textSecondary }}>No reviews yet</h3>
                    <p className="text-sm sm:text-base" style={{ color: COLORS.textMuted }}>Be the first to share your thoughts about this movie!</p>
                </div>
            )}

            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t" style={{ borderColor: COLORS.borderLight }}>
                <p className="text-center text-xs sm:text-sm flex items-center justify-center gap-2 flex-wrap"
                   style={{ color: COLORS.textDisabled }}>
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>Reviews are secure - only you can delete your own comments</span>
                </p>
            </div>
        </section>
    );
};

export default RealCommentsRatingSection;
