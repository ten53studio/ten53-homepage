import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-10 right-20">
      <Link to="/" className="hover:text-[#D63C08]">
        About
      </Link>
      <Link to="/" className="hover:text-[#D63C08]">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;
