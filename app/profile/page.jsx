"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, Mail, Calendar, MapPin, Edit3, Save, X } from "lucide-react";
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { updateProfile, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
const firebaseConfig = {
  apiKey: "AIzaSyB7MIH4jPi6uFaN4mG4oAq2HTKpIOVxTF8",
  authDomain: "filmiway-d5a2b.firebaseapp.com",
  projectId: "filmiway-d5a2b",
  storageBucket: "filmiway-d5a2b.firebasestorage.app",
  messagingSenderId: "1042070525553",
  appId: "1:1042070525553:web:3abb4a321e038e19362dd0",
};

let db;
try {
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.warn('Firebase initialization failed:', error);
}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setDisplayName(currentUser.displayName || "");
        
        // Fetch additional profile data from Firestore
        const profileDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (profileDoc.exists()) {
          const profileData = profileDoc.data();
          setUserProfile(profileData);
          setBio(profileData.bio || "");
          setLocation(profileData.location || "");
        }
      } else {
        router.push("/signin");
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [router]);

  const handleSaveProfile = async () => {
    if (!user) return;

    try {
      // Update Firebase Auth display name
      await updateProfile(user, {
        displayName: displayName
      });

      // Update Firestore profile
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        displayName: displayName,
        bio: bio,
        location: location,
        photoURL: user.photoURL,
        createdAt: user.metadata.creationTime,
        lastSignInAt: user.metadata.lastSignInTime
      }, { merge: true });

      setUserProfile({
        uid: user.uid,
        email: user.email,
        displayName: displayName,
        bio: bio,
        location: location,
        photoURL: user.photoURL
      });

      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-yellow-400 text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black pt-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 mb-8">
          <div className="flex items-center space-x-8">
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex items-center justify-center shadow-2xl">
                {user?.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt="Profile" 
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <User size={48} className="text-black" />
                )}
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">✓</span>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-4xl font-bold text-white">
                  {user?.displayName || "User"}
                </h1>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold transition-all duration-200"
                >
                  {isEditing ? <X size={20} /> : <Edit3 size={20} />}
                  <span>{isEditing ? "Cancel" : "Edit Profile"}</span>
                </button>
              </div>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Mail size={18} className="text-yellow-400" />
                  <span>{user?.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={18} className="text-yellow-400" />
                  <span>Joined {new Date(user?.metadata?.creationTime).toLocaleDateString()}</span>
                </div>
                {location && (
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} className="text-yellow-400" />
                    <span>{location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Editable Profile Form */}
        {isEditing && (
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Edit Profile</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-yellow-400 font-semibold mb-2">Display Name</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Enter your display name"
                />
              </div>

              <div>
                <label className="block text-yellow-400 font-semibold mb-2">Bio</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={4}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div>
                <label className="block text-yellow-400 font-semibold mb-2">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Where are you located?"
                />
              </div>

              <button
                onClick={handleSaveProfile}
                className="flex items-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105"
              >
                <Save size={20} />
                <span>Save Profile</span>
              </button>
            </div>
          </div>
        )}

        {/* Profile Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">127</div>
            <div className="text-gray-400">Movies Watched</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">43</div>
            <div className="text-gray-400">Reviews Written</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">89</div>
            <div className="text-gray-400">Watchlist Items</div>
          </div>
        </div>

        {/* Bio Section */}
        {(bio || !isEditing) && (
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-4">About</h2>
            <p className="text-gray-300 leading-relaxed">
              {bio || "No bio available. Edit your profile to add a bio."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
