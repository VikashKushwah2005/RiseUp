// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { auth } from '../../lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';

export default function LoginPage({ onLogin }) {
  const [name, setName]         = useState('');
  const [age, setAge]           = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    if (!name || !age || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      // 1️⃣ Create the user in Firebase Auth
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      // 2️⃣ Optionally set displayName
      await updateProfile(userCred.user, { displayName: name });

      // 3️⃣ Build your profile object
      const ageNum  = parseInt(age, 10);
      const ageGroup = ageNum < 18 ? '12-18' : ageNum <= 25 ? '18-25' : '25+';
      const newUserProfile = {
        id:           userCred.user.uid,
        name:         userCred.user.displayName,
        email:        userCred.user.email,
        age:          ageNum,
        ageGroup,
        createdAt:    new Date().toISOString(),
        plan:         [],
        streak:       0,
        taskHistory:  {}
      };

      // 4️⃣ Tell your app you’re logged in
      onLogin(newUserProfile);

    } catch (firebaseError) {
      console.error(firebaseError);
      setError(firebaseError.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-68px)] flex items-center justify-center bg-stone-100 p-6">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-stone-800">
          Create Your Sanctuary
        </h2>

        <form className="space-y-6" onSubmit={handleAuth}>
          {/* Name, Age, Email, Password fields (same as before) */}
          {/* ... */}
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 font-bold text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition duration-300 disabled:bg-stone-400"
          >
            {loading ? 'Processing...' : 'Continue'}
          </button>
        </form>
      </div>
    </div>
  );
}
