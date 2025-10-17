import React, { useState } from 'react';
// Customer App Components
import { LoginScreen } from './components/LoginScreen';
import { HomeDashboard } from './components/HomeDashboard';
import { LiftDetails } from './components/LiftDetails';
import { BillingPayments } from './components/BillingPayments';
import { ServicesMaintenance } from './components/ServicesMaintenance';
import { ComplaintsSupport } from './components/ComplaintsSupport';
import { Profile } from './components/Profile';
import { Notifications } from './components/Notifications';

type Screen = 'login' | 'home' | 'details' | 'billing' | 'services' | 'support' | 'profile' | 'notifications';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');

  const handleLogin = () => {
    setCurrentScreen('home');
  };

  const handleLogout = () => {
    setCurrentScreen('login');
  };

  const navigateToScreen = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const navigateBack = () => {
    setCurrentScreen('home');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Mobile Container */}
      <div className="max-w-md mx-auto bg-white shadow-2xl min-h-screen relative">
        {currentScreen === 'login' && <LoginScreen onLogin={handleLogin} />}
        {currentScreen === 'home' && <HomeDashboard onNavigate={navigateToScreen} />}
        {currentScreen === 'details' && <LiftDetails onBack={navigateBack} />}
        {currentScreen === 'billing' && <BillingPayments onBack={navigateBack} />}
        {currentScreen === 'services' && <ServicesMaintenance onBack={navigateBack} />}
        {currentScreen === 'support' && <ComplaintsSupport onBack={navigateBack} />}
        {currentScreen === 'profile' && <Profile onBack={navigateBack} onLogout={handleLogout} />}
        {currentScreen === 'notifications' && <Notifications onBack={navigateBack} />}
      </div>
    </div>
  );
}
