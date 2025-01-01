import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaHeart, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';
import LoginRegisterModal from './LoginRegisterModal'; // Import the modal

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLoginRegisterModal = () => {
    setIsModalOpen(true);
  };

  const closeLoginRegisterModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="font-bold text-xl">R.K.SPORTS</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/category/running" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Running
              </Link>
              <Link to="/category/gym" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Gym
              </Link>
              <Link to="/category/yoga" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Yoga
              </Link>
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
              {/* My Account Icon */}
              <button
                onClick={openLoginRegisterModal}
                className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                <FaUser />
              </button>
              <DarkModeToggle />
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <Link to="/category/running" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            Running
          </Link>
          <Link to="/category/gym" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            Gym
          </Link>
          <Link to="/category/yoga" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            Yoga
          </Link>
          <div className="relative mt-3">
            <input type="text" placeholder="Search" className="w-full bg-gray-700 text-white px-3 py-2 rounded-md" />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <Link to="/wishlist" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            Wishlist
          </Link>
          <Link to="/cart" className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
            Cart
          </Link>
          {/* Add My Account Icon in Mobile Menu */}
          <button
            onClick={openLoginRegisterModal}
            className="hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            My Account
          </button>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-sm">Dark Mode</span>
            <DarkModeToggle />
          </div>
        </div>
      )}
      {/* Login/Register Modal */}
      <LoginRegisterModal isOpen={isModalOpen} onClose={closeLoginRegisterModal} />
    </nav>
  );
};

export default Navbar;
