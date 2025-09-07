"use client";

import { useState, useEffect } from "react";
import { auth, db } from "@/firebaseConfig";
import { collection, addDoc, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { MessageCircle, Star, User } from "lucide-react";

const RATING_OPTIONS = [
  { label: "A Disappointment", value: "disappointment", color: "text-red-400" },
  { label: "Flawed", value: "flawed", color: "text-orange-400" },
  { label: "Worth the ride", value: "worth", color: "text-amber-400" },
  { label: "Exceptional", value: "exceptional", color: "text-yellow-400" }
];

export default function CommentSystem({ movieId }) {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!movieId) return;

    const q = query(
      collection(db, "comments"),
      where("movieId", "==", movieId),
      orderBy("timestamp", "desc")
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const commentsData = [];
      querySnapshot.forEach((doc) => {
        commentsData.push({ id: doc.id, ...doc.data() });
      });
      setComments(commentsData);
    });

    return unsubscribe;
  }, [movieId]);

  const handleSubmitComment = async () => {
    if (!user) {
      setShowLoginPrompt(true);
      return;
    }

    if (!selectedRating || !newComment.trim()) return;

    try {
      await addDoc(collection(db, "comments"), {
        movieId,
        userId: user.uid,
        userName: user.displayName || user.email?.split('@')[0],
        userPhoto: user.photoURL,
        comment: newComment.trim(),
        rating: selectedRating,
        timestamp: new Date().getTime()
      });

      setNewComment("");
      setSelectedRating("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const getRatingColor = (rating) => {
    const option = RATING_OPTIONS.find(opt => opt.value === rating);
    return option?.color || "text-gray-400";
  };

  const getRatingLabel = (rating) => {
    const option = RATING_OPTIONS.find(opt => opt.value === rating);
    return option?.label || rating;
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
        <MessageCircle size={24} className="text-yellow-400" />
        <span>Comments & Ratings</span>
      </h3>

      {/* Add Comment Section */}
      <div className="mb-8 p-6 bg-gray-900/50 rounded-xl border border-gray-600/50">
        {showLoginPrompt && !user ? (
          <div className="text-center py-8">
            <p className="text-gray-300 mb-4">Please sign in to leave a comment and rating</p>
            <button 
              onClick={() => window.location.href = '/signin'}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition-all duration-200"
            >
              Sign In
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-yellow-400 font-semibold mb-3">Rating</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {RATING_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedRating(option.value)}
                    className={`p-3 rounded-xl text-center transition-all duration-200 border ${
                      selectedRating === option.value
                        ? 'bg-yellow-500/20 border-yellow-400 text-yellow-400'
                        : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-yellow-400/50'
                    }`}
                  >
                    <div className={`text-sm font-medium ${selectedRating === option.value ? 'text-yellow-400' : option.color}`}>
                      {option.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-yellow-400 font-semibold mb-2">Comment</label>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts about this movie..."
                className="w-full bg-gray-800/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                rows={4}
              />
            </div>

            <button
              onClick={handleSubmitComment}
              disabled={!selectedRating || !newComment.trim()}
              className="bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold px-6 py-3 rounded-full transition-all duration-200"
            >
              Post Comment
            </button>
          </>
        )}
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            No comments yet. Be the first to share your thoughts!
          </div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="bg-gray-900/30 rounded-xl p-4 border border-gray-700/30">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  {comment.userPhoto ? (
                    <img 
                      src={comment.userPhoto} 
                      alt={comment.userName} 
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <User size={18} className="text-black" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`font-semibold ${getRatingColor(comment.rating)}`}>
                      {comment.userName}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className={`text-sm ${getRatingColor(comment.rating)}`}>
                      {getRatingLabel(comment.rating)}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-xs text-gray-400">
                      {new Date(comment.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{comment.comment}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
