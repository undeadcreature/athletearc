import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart, FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
{/*             <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />*/}
              <span className="font-bold text-xl">R.K.SPORTS</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/category/running" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Running</Link>
              <Link to="/category/gym" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Gym</Link>
              <Link to="/category/yoga" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Yoga</Link>
              <div className="relative">
                <input type="text" placeholder="Search" className="bg-gray-700 text-white px-3 py-1 rounded-md" />
                <FaSearch className="absolute right-3 top-2 text-gray-400" />
              </div>
              <Link to="/wishlist" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                <FaHeart />
              </Link>
              <Link to="/cart" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                <FaShoppingCart />
              </Link>
              <DarkModeToggle />
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/category/running" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Running</Link>
          <Link to="/category/gym" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Gym</Link>
          <Link to="/category/yoga" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Yoga</Link>
          <div className="relative mt-3">
            <input type="text" placeholder="Search" className="w-full bg-gray-700 text-white px-3 py-2 rounded-md" />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <Link to="/wishlist" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Wishlist</Link>
          <Link to="/cart" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">Cart</Link>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm">Dark Mode</span>
            <DarkModeToggle />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
