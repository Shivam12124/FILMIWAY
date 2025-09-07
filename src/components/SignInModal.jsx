"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, AtSign, LogIn, UserPlus } from "lucide-react";
import { auth } from "@/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

function SocialButton({ icon, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 text-zinc-800 hover:bg-yellow-400 hover:text-black transition duration-150 mx-2 border-0 shadow-none"
    >
      {icon}
    </button>
  );
}

export default function SignInPage() {
  const router = useRouter();
  const [isRegistering, setIsRegistering] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!/\S+@\S+\.\S+/.test(email)) return setError("Enter a valid email.");
    if (password.length < 6) return setError("Password must be at least 6 chars.");
    try {
      if (isRegistering) await createUserWithEmailAndPassword(auth, email, password);
      else await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (e) {
      setError(e.message.replace("Firebase: ",""));
    }
  };

  const signInWithGoogle = async () => {
    setError("");
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (e) {
      setError(e.message.replace("Firebase: ",""));
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row overflow-hidden">
      {/* LEFT PANEL */}
      <div className={`
        flex-1 flex flex-col justify-center items-center
        ${isRegistering
          ? "bg-gradient-to-br from-yellow-100 via-yellow-50 to-yellow-200 text-black"
          : "bg-gradient-to-br from-white via-yellow-50 to-yellow-200 text-black"
        }
        px-8 py-16 md:px-24 md:py-0
        min-h-[50vh]
        transition-all duration-200
      `}>
        <div className="w-full max-w-sm flex flex-col gap-6">
          <h2 className="font-extrabold text-3xl md:text-4xl mb-2 tracking-wide text-center font-sans">
            {isRegistering ? "Create Account" : "Sign in to Filmiway"}
          </h2>
          <p className="text-base opacity-70 text-center mb-8">
            {isRegistering
              ? "Sign up to access personalized film picks and your favorite lists."
              : "To keep connected, sign in with your email or continue with Google."}
          </p>
          <button
            onClick={() => setIsRegistering(r => !r)}
            className="rounded-full py-2 px-10 bg-zinc-900/90 text-yellow-300 hover:bg-yellow-400 hover:text-zinc-900 font-semibold tracking-wide text-base transition"
            type="button"
          >
            {isRegistering
              ? <span className="inline-flex items-center"><LogIn size={18} className="mr-1.5" />Sign In</span>
              : <span className="inline-flex items-center"><UserPlus size={18} className="mr-1.5" />Sign Up</span>
            }
          </button>
        </div>
      </div>
      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col items-center justify-center bg-zinc-950 px-8 md:px-24 py-16 min-h-[50vh]">
        <form className="w-full max-w-sm flex flex-col gap-6" onSubmit={handleSubmit}>
          <h2 className="text-yellow-400 text-2xl font-bold mb-2 text-center font-sans">
            {isRegistering ? "Create Account" : "Sign In"}
          </h2>
          <div className="flex items-center justify-center mb-3">
            <SocialButton
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M21.35 11.1h-9.18v2.78h5.25c-.23 1.16-1.19 3.4-5.25 3.4-3.16 0-5.76-2.63-5.76-5.85s2.6-5.85 5.76-5.85c1.79 0 2.98.76 3.67 1.41l2.51-2.43C17.06 3.67 15.28 2.8 13.17 2.8c-5.09 0-9.23 4.08-9.23 9.1s4.14 9.1 9.23 9.1c5.34 0 8.89-3.7 8.89-8.92 0-.6-.07-1.22-.18-1.78z"/>
                </svg>
              }
              onClick={signInWithGoogle}
              label="Google"
            />
          </div>
          {isRegistering && (
            <div className="relative">
              <AtSign className="absolute left-4 top-3 text-yellow-400" size={18} />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="pl-11 pr-3 py-3 bg-zinc-900/80 border border-zinc-800 rounded-full w-full text-yellow-100 font-medium placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          )}
          <div className="relative">
            <Mail className="absolute left-4 top-3 text-yellow-400" size={18} />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="pl-11 pr-3 py-3 bg-zinc-900/80 border border-zinc-800 rounded-full w-full text-yellow-100 font-medium placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              autoComplete="email"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-3 text-yellow-400" size={18} />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="pl-11 pr-3 py-3 bg-zinc-900/80 border border-zinc-800 rounded-full w-full text-yellow-100 font-medium placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              autoComplete="current-password"
            />
          </div>
          {error && <div className="text-red-500 text-xs text-center mt-0">{error}</div>}
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-black hover:text-yellow-400 font-bold rounded-full py-3 text-lg text-black transition uppercase mt-2"
          >
            {isRegistering ? "Sign Up" : "Sign In"}
          </button>
          {!isRegistering && (
            <button
              type="button"
              className="text-xs text-yellow-500 hover:underline mt-2 transition"
              onClick={() => alert('Forgot password?')}
            >
              Forgot your password?
            </button>
          )}
          <button
            type="button"
            className="md:hidden mt-7 w-full rounded-full bg-transparent text-yellow-400 font-semibold border border-yellow-400 py-2 transition"
            onClick={() => setIsRegistering(r => !r)}
          >
            {isRegistering ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
