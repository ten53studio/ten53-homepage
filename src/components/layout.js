import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
);

export default Layout;
