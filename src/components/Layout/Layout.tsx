import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButton from './FloatingActionButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-text transition-colors duration-300 ease-in-out">
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <FloatingActionButton />
      <Footer />
    </div>
  );
};

export default Layout;