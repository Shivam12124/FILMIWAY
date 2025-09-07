import { useState } from "react";
import { motion } from "framer-motion";
import { X, Mail, Lock, AtSign } from "lucide-react";
import { auth } from "@/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

const SocialButton = ({ icon, onClick, label }) => (
  <button
    onClick={onClick}
    type="button"
    className="flex items-center justify-center w-10 h-10 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-300 bg-black shadow transition mx-1"
    aria-label={label}
  >
    {icon}
  </button>
);

export default function AuthModal({ onClose }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Please enter a valid email.");
    if (password.length < 6) return setError("Password must be at least 6 chars.");
    try {
      if (isRegistering) await createUserWithEmailAndPassword(auth, email, password);
      else await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (e) {
      setError(e.message.replace("Firebase: ", ""));
    }
  };

  const signInWithGoogle = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      onClose();
    } catch (e) {
      setError(e.message.replace("Firebase: ", ""));
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative flex flex-col md:flex-row w-[95vw] max-w-3xl rounded-3xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
        initial={{ scale: 0.97 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.97 }}
      >
        {/* PANEL SIDE */}
        <div className={`hidden md:flex flex-col justify-between py-12 px-10 w-1/2 transition-all
          ${isRegistering ? "bg-yellow-400 text-black" : "bg-gray-900 text-yellow-300"}`}>
          <div>
            <div className="font-black text-2xl font-serif mb-6">{isRegistering ? "Hello, Friend!" : "Welcome Back!"}</div>
            <div className="text-md mb-10 whitespace-pre-line">
              {isRegistering
                ? "Enter your details and\nstart your cinematic journey with us."
                : "To keep connected with us\nplease login with your info!"}
            </div>
          </div>
          <button
            onClick={() => setIsRegistering(x => !x)}
            className={`mt-1 px-7 py-2 rounded-full border-2 transition text-base font-bold
              ${isRegistering
                ? "border-black text-black hover:bg-black hover:text-yellow-400"
                : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"}`}
            type="button"
          >
            {isRegistering ? <>SIGN IN</> : <>SIGN UP</>}
          </button>
        </div>

        {/* FORM SIDE */}
        <div className="relative flex-1 flex flex-col items-center justify-center p-8 bg-black min-w-[300px]">
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute top-4 right-4 text-yellow-400 hover:text-yellow-200"
          >
            <X size={24} />
          </button>
          <div className="w-full max-w-xs mx-auto">
            <div className="text-center mb-3">
              <div className="text-yellow-400 font-bold text-2xl font-serif mb-2">{isRegistering ? "Create Account" : "Sign In"}</div>
              <div className="flex items-center justify-center mb-1">
                <SocialButton
                  icon={
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                      <path d="M21.35 11.1h-9.18v2.78h5.25c-.23 1.16-1.19 3.4-5.25 3.4-3.16 0-5.76-2.63-5.76-5.85s2.6-5.85 5.76-5.85c1.79 0 2.98.76 3.67 1.41l2.51-2.43C17.06 3.67 15.28 2.8 13.17 2.8c-5.09 0-9.23 4.08-9.23 9.1s4.14 9.1 9.23 9.1c5.34 0 8.89-3.7 8.89-8.92 0-.6-.07-1.22-.18-1.78z"/>
                    </svg>
                  }
                  label="Google"
                  onClick={signInWithGoogle}
                />
              </div>
              <div className="text-xs text-yellow-500 mt-1 mb-2">or use your email:</div>
            </div>
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              {isRegistering && (
                <div className="relative">
                  <AtSign className="absolute left-3 top-3 text-yellow-500" size={18} />
                  <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}
                    className="pl-10 pr-3 py-3 bg-gray-900 border border-yellow-400/30 rounded-xl w-full text-yellow-100 placeholder-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-yellow-500" size={18} />
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}
                  className="pl-10 pr-3 py-3 bg-gray-900 border border-yellow-400/30 rounded-xl w-full text-yellow-100 placeholder-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400" autoComplete="email" />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-yellow-500" size={18} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}
                  className="pl-10 pr-3 py-3 bg-gray-900 border border-yellow-400/30 rounded-xl w-full text-yellow-100 placeholder-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400" autoComplete="current-password" />
              </div>
              {error && (<div className="text-red-500 text-xs text-center mt-1">{error}</div>)}
              <button
                type="submit"
                className="w-full rounded-full bg-yellow-400 text-black hover:bg-black hover:text-yellow-400 border-2 border-yellow-400 font-bold py-3 mt-1 shadow-md transition"
              >
                {isRegistering ? "SIGN UP" : "SIGN IN"}
              </button>
              {!isRegistering && (
                <button
                  type="button"
                  className="text-xs text-yellow-600 hover:underline mt-2"
                  onClick={() => alert('Forgot password?')}
                >
                  Forgot your password?
                </button>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
