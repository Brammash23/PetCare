import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaCompass,
  FaYoutube,
  FaBook,
  FaHistory,
} from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white fixed bottom-0 w-full md:w-64 md:fixed md:top-0 md:left-0 h-16 md:h-full shadow-lg">
      <div className="grid grid-cols-5 md:grid-cols-1 gap-2 md:gap-4 text-center p-2 md:p-4 md:space-y-6">
    
        <Link
          to="/home"
          className="flex flex-col items-center justify-center hover:bg-gray-800 p-2 rounded-md transition-all"
        >
          <FaHome className="text-xl md:text-2xl" />
          <span className="text-xs md:text-sm mt-1 hidden md:block">Home</span>
        </Link>


        <Link
          to="/explore"
          className="flex flex-col items-center justify-center hover:bg-gray-800 p-2 rounded-md transition-all"
        >
          <FaCompass className="text-xl md:text-2xl" />
          <span className="text-xs md:text-sm mt-1 hidden md:block">Explore</span>
        </Link>


        <Link
          to="/subscriptions"
          className="flex flex-col items-center justify-center hover:bg-gray-800 p-2 rounded-md transition-all"
        >
          <FaYoutube className="text-xl md:text-2xl" />
          <span className="text-xs md:text-sm mt-1 hidden md:block">Subscriptions</span>
        </Link>


        <Link
          to="/library"
          className="flex flex-col items-center justify-center hover:bg-gray-800 p-2 rounded-md transition-all"
        >
          <FaBook className="text-xl md:text-2xl" />
          <span className="text-xs md:text-sm mt-1 hidden md:block">Library</span>
        </Link>


        <Link
          to="/history"
          className="flex flex-col items-center justify-center hover:bg-gray-800 p-2 rounded-md transition-all"
        >
          <FaHistory className="text-xl md:text-2xl" />
          <span className="text-xs md:text-sm mt-1 hidden md:block">History</span>
        </Link>
      </div>
    </nav>
  );
};
