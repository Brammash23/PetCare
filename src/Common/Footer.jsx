import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-yellow-300 w-full p-10 md:p-16 lg:p-20 scroll-mb-60">
      {/* Stats Section */}
      <div className="bg-yellow-600 p-5 rounded-lg mb-10 md:mb-16 lg:mb-20">
        <h3 className="text-2xl font-bold text-white text-center mb-2">
          Our Milestones
        </h3>
        <div className="h-2 w-1/3 mx-auto bg-white mb-5" />
        <div className="flex justify-between text-center flex-wrap md:flex-nowrap">
          {[{ label: 'Pets Adopted', count: 120 }, { label: 'Happy Pets', count: 40 }, { label: 'Our CareTakers', count: 40 }, { label: 'Beloved Adopters', count: 30 },].map(
            ({ label, count }, index) => (
              <div className="flex flex-col items-center w-full md:w-1/4 mb-5 md:mb-0" key={index}>
                <h2 className="text-4xl font-bold text-white">{count}</h2>
                <p className="text-yellow-100">{label}</p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Links and Info Section */}
      <div className="flex flex-wrap justify-between mb-10 md:mb-16 lg:mb-20">
        <div className="flex flex-col items-center w-full md:w-1/3 mb-5 md:mb-0">
          <h4 className="text-white text-2xl font-bold text-center">Quick Links</h4>
          <div className="h-2 w-1/3 mx-auto bg-white mb-2" />
          <ul className="mt-2 list-none text-yellow-100 text-center text-lg">
            {['Home', 'About Us', 'Services', 'Contact'].map((link, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-yellow-700">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/4 mb-5 md:mb-0">
          <h4 className="text-white text-2xl font-bold text-center">Contact Us</h4>
          <div className="h-2 w-1/3 mx-auto bg-white mb-2" />
          <div className="flex items-center mt-2">
            <FaPhoneAlt className="mr-2 text-2xl text-white" />
            <a href="tel:+1234567890" className="text-yellow-100">
              123-456-7890
            </a>
          </div>
          <div className="flex items-center mt-2">
            <FaEnvelope className="mr-2 text-2xl text-white" />
            <a href="mailto:info@example.com" className="text-yellow-100">
              info@example.com
            </a>
          </div>
          <p className="text-yellow-100 mt-2">123 Main St, Anytown, USA</p>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/4 mb-5 md:mb-0">
          <h4 className="text-white text-2xl font-bold text-center">About Us</h4>
          <div className="h-2 w-1/3 mx-auto bg-white mb-2" />
          <p className="mt-2 text-yellow-100 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="flex justify-center space-x-4">
        {[FaFacebookF, FaTwitter, FaLinkedin, FaGithub].map((Icon, idx) => (
          <a key={idx} href="#" target="_blank" rel="noopener noreferrer" className="text-3xl text-white hover:text-yellow-700">
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
};