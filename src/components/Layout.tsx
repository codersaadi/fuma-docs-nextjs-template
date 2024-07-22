'use client';

import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileNav, setMobileNav] = useState(false);
const onOpen = () => setMobileNav(!isMobileNav);
const onClose = () => setMobileNav(false);

  return (
    <div className="flex">
      <Header onOpen={onOpen} />
      <Sidebar isOpen={isMobileNav} onClose={onClose} />
      <main className="flex-1 ml-0 md:ml-64 pt-16 p-6 min-h-screen scroll-smooth  transition-all duration-150">
        {children}
    
      </main>
    </div>
  );
};

export default Layout;
