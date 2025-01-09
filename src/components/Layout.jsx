import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer';
import SocialSidebar from './SocialSidebar';

const Layout = ({ children }) => {
  return (
    <div className="app">
      <Navbar />
      <SocialSidebar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
