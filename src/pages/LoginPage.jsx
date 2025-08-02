import React, { useState } from 'react';
import { getMockUserId } from '../App';

export default function LoginPage({ onLogin }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const handleAuth = (e) => {
    e.preventDefault();
    setError('');
    if (!name || !age || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const ageGroup = age < 18 ? '12-18' : age <= 25 ? '18-25' : '25+';
      const newUserProfile = {
        id: getMockUserId(), name, email, age: parseInt(age), ageGroup,
        createdAt: new Date().toISOString(), plan: [], streak: 0, taskHistory: {}
      };
      onLogin(newUserProfile);
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="min-h-[calc(100vh-68px)] flex items-center justify-center bg-stone-100 p-6">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-stone-800">Create Your Sanctuary</h2>
        <form className="space-y-6" onSubmit={handleAuth}>
          <div>
            <label className="text-sm font-bold text-stone-600 block">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 mt-2 text-stone-700 bg-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
          </div>
          <div>
            <label className="text-sm font-bold text-stone-600 block">Age</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-3 mt-2 text-stone-700 bg-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
          </div>
          <div>
            <label className="text-sm font-bold text-stone-600 block">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 mt-2 text-stone-700 bg-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
          </div>
          <div>
            <label className="text-sm font-bold text-stone-600 block">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 mt-2 text-stone-700 bg-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div>
            <button type="submit" disabled={loading} className="w-full py-3 font-bold text-white bg-amber-600 rounded-lg hover:bg-amber-700 transition duration-300 disabled:bg-stone-400">
              {loading ? 'Processing...' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}