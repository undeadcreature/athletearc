import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Shop</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/category/running" className="text-base text-gray-300 hover:text-white">Running</Link></li>
                  <li><Link to="/category/gym" className="text-base text-gray-300 hover:text-white">Gym</Link></li>
                  <li><Link to="/category/yoga" className="text-base text-gray-300 hover:text-white">Yoga</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/contact" className="text-base text-gray-300 hover:text-white">Contact Us</Link></li>
                  <li><Link to="/faq" className="text-base text-gray-300 hover:text-white">FAQ</Link></li>
                  <li><Link to="/shipping" className="text-base text-gray-300 hover:text-white">Shipping</Link></li>
                  <li><Link to="/returns" className="text-base text-gray-300 hover:text-white">Returns</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Account</h3>
            <ul className="mt-4 space-y-4">
              <li><Link to="/my-account" className="text-base text-gray-300 hover:text-white">My Account</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a href="https://athletearc.vercel.app/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="https://athletearc.vercel.app/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="https://athletearc.vercel.app/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2025 Athletearc, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
