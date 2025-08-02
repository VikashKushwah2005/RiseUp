import React from 'react';

export default function LandingPage({ setPage }) {
  return (
    <div className="bg-stone-50">
      <section className="min-h-[60vh] md:min-h-[80vh] flex items-center bg-gradient-to-br from-orange-50 to-amber-100 p-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-stone-800 mb-4 leading-tight">Your Path to Inner Balance Begins Here.</h1>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto mb-10">Rise Up integrates timeless wisdom with modern tools to help you find clarity, strength, and peace.</p>
          <button onClick={() => setPage('login')} className="bg-amber-600 text-white font-bold py-4 px-12 rounded-full hover:bg-amber-700 transition-transform duration-300 transform hover:scale-105 shadow-xl text-lg">
            Start Your Journey
          </button>
        </div>
      </section>
      <section id="what-we-do" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">What We Do</h2>
          <p className="text-stone-600 max-w-2xl mx-auto mb-12">We provide a structured path to wellness, tailored to you.</p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-8 bg-stone-50 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-amber-700 mb-3">Personalized Assessment</h3>
              <p className="text-stone-600">Answer a few thoughtful questions designed for your age group to help us understand your unique challenges and strengths.</p>
            </div>
            <div className="p-8 bg-stone-50 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-amber-700 mb-3">AI-Powered Action Plan</h3>
              <p className="text-stone-600">Receive a custom 14-day plan with daily tasks, created by AI and inspired by principles of mindfulness and self-discipline.</p>
            </div>
            <div className="p-8 bg-stone-50 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold text-amber-700 mb-3">Holistic Support</h3>
              <p className="text-stone-600">Access guided meditations, expert articles, professional consultations, and a supportive community to guide your journey.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="about-us" className="py-20 bg-stone-100">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://placehold.co/600x400/FFF7ED/6D4C41?text=Inner+Peace" alt="A serene landscape representing inner peace" className="rounded-2xl shadow-2xl w-full" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-bold text-stone-800 mb-4">Our Philosophy</h2>
            <p className="text-stone-600 text-lg mb-6 leading-relaxed">
              Modern Western culture promotes a life of constant seeking—chasing fleeting pleasures and external validation. This path of endless consumption drains your vital energy, leading to anxiety and burnout. We believe there is a better way.
              <br/><br/>
              <span className="font-bold text-amber-700">Rise Up</span> is founded on the timeless Indian tradition of <span className="font-bold">Brahmacharya</span>: the mastery and conservation of energy. By turning inward and cultivating self-discipline, you can leave the path of distraction and build a foundation of unshakable inner peace and strength. This is the true path to lasting well-being.
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-stone-800 text-white py-10">
        <div className="container mx-auto text-center text-stone-400">
          <p>&copy; 2025 Rise Up. Find your strength within.</p>
        </div>
      </footer>
    </div>
  );
}