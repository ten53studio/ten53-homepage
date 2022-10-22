import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <div className="text-[#2A3439] font-mono">
    <Header />
    <div>{children}</div>
    {/* <Footer /> */}
  </div>
);

export default Layout;
