"use client"
import React, { useState } from 'react';
import DashboardLayout from './layout';
import AnalyticsPage from './analytics/page';
import EssayPage from './essay/page';
import ProjectsPage from './projects/page';
// import LoginPage from '../login-admin/page';
import { useRouter } from 'next/navigation';
const AdminDashboard: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('analytics');
  const router = useRouter();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('analytics');
  };
  console.log(handleLogin)

  React.useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login-admin');
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <DashboardLayout 
      currentPage={currentPage} 
      onNavigate={setCurrentPage}
      onLogout={handleLogout}
    >
      {currentPage === 'analytics' && <AnalyticsPage />}
      {currentPage === 'projects' && <ProjectsPage />}
      {currentPage === 'essays' && <EssayPage />}
    </DashboardLayout>
  );
};

export default AdminDashboard;