import React from 'react';
import Sidebar from './sidebar';
import TargetCursor from './targetcursor';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="app-container fade-in-page">
      <Sidebar />
      <main>
        {children}
      </main>
      <TargetCursor targetSelector="a, button, .cursor-target" />
    </div>
  );
};

export default MainLayout;
