"use client";

import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export default function FirebaseAuth() {
  const [user, setUser] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsSigningIn(false);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleRegister = async () => {
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setIsRegistering(false);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  if (user) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-yellow-400 p-6">
        <h2 className="mb-6 text-2xl font-serif">Welcome, {user.email}</h2>
        <button
          onClick={handleLogout}
          className="bg-yellow-400 px-6 py-2 rounded-lg text-black font-bold hover:bg-yellow-500 transition"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-yellow-400 p-6">
      {!isSigningIn && !isRegistering && (
        <div className="flex flex-col gap-4 max-w-xs w-full">
          <button
            onClick={() => setIsSigningIn(true)}
            className="bg-yellow-400 py-2 rounded-lg font-bold text-black hover:bg-yellow-500 transition"
          >
            Sign In
          </button>
          <button
            onClick={() => setIsRegistering(true)}
            className="bg-yellow-400 py-2 rounded-lg font-bold text-black hover:bg-yellow-500 transition"
          >
            Register
          </button>
        </div>
      )}

      {(isSigningIn || isRegistering) && (
        <div className="max-w-xs w-full flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded bg-gray-800 text-yellow-400 focus:outline-yellow-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded bg-gray-800 text-yellow-400 focus:outline-yellow-400"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex gap-4">
            {isSigningIn && (
              <button
                onClick={handleLogin}
                className="flex-1 bg-yellow-400 rounded py-2 font-bold text-black hover:bg-yellow-500 transition"
              >
                Login
              </button>
            )}
            {isRegistering && (
              <button
                onClick={handleRegister}
                className="flex-1 bg-yellow-400 rounded py-2 font-bold text-black hover:bg-yellow-500 transition"
              >
                Register
              </button>
            )}
            <button
              onClick={() => {
                setIsSigningIn(false);
                setIsRegistering(false);
                setError("");
              }}
              className="flex-1 bg-gray-700 rounded py-2 text-yellow-400 font-semibold hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
