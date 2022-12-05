import React, { Children } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-8">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
