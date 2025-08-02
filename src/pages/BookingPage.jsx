import React, { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';

export default function BookingPage({ doctor, setPage }) {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  if (!doctor) return <LoadingScreen text="Loading..." />;
  return (
    <div className="min-h-[calc(100vh-68px)] flex items-center justify-center bg-stone-100 p-6">
      <div className="w-full max-w-lg p-8 space-y-6 bg-white rounded-2xl shadow-xl">
        {submitted ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Request Sent!</h2>
            <p className="text-stone-600">Your appointment request for <span className="font-bold">{doctor.name}</span> has been submitted. They will contact you via email to confirm the details.</p>
            <button onClick={() => setPage('consult')} className="mt-6 bg-amber-600 text-white font-bold py-2 px-6 rounded-full hover:bg-amber-700 transition">Back to Consultants</button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-center text-stone-800">Book Appointment</h2>
            <p className="text-center text-stone-600">Request a session with <span className="font-bold text-amber-700">{doctor.name}</span></p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-bold text-stone-600 block">Full Name</label>
                <input type="text" className="w-full p-3 mt-2 text-stone-700 bg-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
              </div>
              <div>
                <label className="text-sm font-bold text-stone-600 block">Email Address</label>
                <input type="email" className="w-full p-3 mt-2 text-stone-700 bg-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="text-sm font-bold text-stone-600 block">Preferred Date</label>
                  <input type="date" className="w-full p-3 mt-2 text-stone-700 bg-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-bold text-stone-600 block">Preferred Time</label>
                  <input type="time" className="w-full p-3 mt-2 text-stone-700 bg-stone-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" required />
                </div>
              </div>
              <div>
                <button type="submit" className="w-full py-3 font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-300">Submit Request</button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}