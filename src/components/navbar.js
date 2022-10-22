import React from 'react';

const Navbar = () => {
  return (
    <nav className="invisible md:visible flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-10 right-20">
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
          About
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
