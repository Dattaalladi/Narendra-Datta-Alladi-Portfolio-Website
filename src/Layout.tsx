// src/Layout.tsx
import React from 'react';
import ScrollToTopButton from './ScrollToTopButton';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* You can add Navbar/Header here */}
      {children}
      {/* Footer can go here */}
      <ScrollToTopButton />
    </>
  );
};

export default Layout;
