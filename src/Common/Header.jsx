import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdPets } from "react-icons/md";

export const Header = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-yellow-300 text-white">
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <MdPets className="w-20" />
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden lg:flex space-x-4">
            <Link
              to="/home"
              className="hover:bg-gray-300 hover:text-black px-4 py-2 rounded font-semibold"
            >
              Home
            </Link>
            <Link
              to="/adopt"
              className="hover:bg-gray-300 hover:text-black px-4 py-2 rounded font-semibold"
            >
              Adopt
            </Link>
            <Link
              to="/get-involved"
              className="hover:bg-gray-300 hover:text-black px-4 py-2 rounded font-semibold"
            >
              Get Involved
            </Link>
            <Link
              to="/blogs"
              className="hover:bg-gray-300 hover:text-black px-4 py-2 rounded font-semibold"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="hover:bg-gray-300 hover:text-black px-4 py-2 rounded font-semibold"
            >
              About Us
            </Link>
            <Link
              to="/account"
              className="hover:bg-gray-300 hover:text-black px-4 py-2 rounded font-semibold"
            >Account</Link>
          </div>

          {/* Contact Us Button */}
          <div>
            <Link
              to="/ContactUs"
              className="bg-black-300 text-white-800 px-6 py-2 rounded hover:bg-gray-400 font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu (Hidden by default, will show when clicked) */}
      <div
        className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        id="mobile-menu"
      >
        <div className="flex flex-col items-center py-4 space-y-4 bg-yellow-500">
          <Link
            to="/home"
            className="hover:bg-gray-300 hover:text-black px-4 py-2 rounded font-semibold"
          >
            Home
          </Link>
          <Link
            to="/adopt"
            className="hover:bg-gray-300 hover:text-black px-4 py-2 rounded font-semibold"
          >
            Adopt
          </Link>
          <Link
            to="/get-involved"
            className="hover:bg-gray-300 hover:text-black px-4 py-2 rounded font-semibold"
          >
            Get Involved
          </Link>
          <Link
            to="/blogs"
            className="hover:bg-gray-300 hover:text-black px-4 py-2 rounded font-semibold"
          >
            Blog
          </Link>
          <Link
            to="/about"
            className="hover:bg-gray-300 hover:text-black px-4 py-2 rounded font-semibold"
          >
            About Us
          </Link>
          <Link
            to="/ContactUs"
            className="bg-black-300 text-white-800 px-6 py-2 rounded hover:bg-gray-400 font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};
