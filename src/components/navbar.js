import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Contact</Link>
      <Link to="/">About</Link>
    </nav>
  );
};

export default Navbar;
