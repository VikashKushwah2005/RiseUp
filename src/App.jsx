import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import QuestionnairePage from './pages/QuestionnairePage';
import DashboardPage from './pages/DashboardPage';
import MeditationPage from './pages/MeditationPage';
import BreathingPage from './pages/BreathingPage';
import RecipePage from './pages/RecipePage';
import CommunityPage from './pages/CommunityPage';
import ArticlesPage from './pages/ArticlesPage';
import ConsultPage from './pages/ConsultPage';
import BookingPage from './pages/BookingPage';
import ChatbotPage from './pages/ChatbotPage';
import JournalPage from './pages/JournalPage';
import LoadingScreen from './components/LoadingScreen';

// Helper to get a mock User ID
export const getMockUserId = () => `user_${Math.random().toString(36).substr(2, 9)}`;

export default function App() {
  const [page, setPage] = useState('landing');
  const [userData, setUserData] = useState(null);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleLogin = (newUserData) => {
    setUserData(newUserData);
    setPage('questionnaire');
  };

  const handleLogout = () => {
    setUserData(null);
    setPage('landing');
  };

  const handlePlanGenerated = (plan) => {
    setUserData(prevData => ({ ...prevData, plan }));
    setPage('dashboard');
  };

  const handleBookAppointment = (doctor) => {
    setSelectedDoctor(doctor);
    setPage('booking');
  };

  const navigate = (targetPage) => {
    if (targetPage === 'home') {
      setPage(userData ? 'dashboard' : 'landing');
    } else {
      setPage(targetPage);
    }
  };

  const renderPage = () => {
    switch (page) {
      case 'landing':
        return <LandingPage setPage={setPage} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'questionnaire':
        return <QuestionnairePage userData={userData} onPlanGenerated={handlePlanGenerated} />;
      case 'dashboard':
        return <DashboardPage userData={userData} />;
      case 'meditation':
        return <MeditationPage />;
      case 'breathing':
        return <BreathingPage />;
      case 'recipes':
        return <RecipePage />;
      case 'community':
        return <CommunityPage />;
      case 'articles':
        return <ArticlesPage />;
      case 'consult':
        return <ConsultPage onBookAppointment={handleBookAppointment} />;
      case 'booking':
        return <BookingPage doctor={selectedDoctor} setPage={setPage} />;
      case 'chatbot':
        return <ChatbotPage />;
      case 'journal':
        return <JournalPage />;
      default:
        return <LandingPage setPage={setPage} />;
    }
  };

  return (
    <div className="bg-stone-50 min-h-screen font-sans text-stone-800">
      <Navbar navigate={navigate} onLogout={handleLogout} isLoggedIn={!!userData} />
      {renderPage()}
    </div>
  );
}