import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUser,
  FaSignOutAlt,
} from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';
import LoginRegisterModal from './LoginRegisterModal';
import { useUser } from '../contexts/userContext';

// ... (keep the categories object as is)

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openLoginRegisterModal = () => setIsModalOpen(true);
  const closeLoginRegisterModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    setUser(null);
    setIsUserMenuOpen(false);
    navigate('/');
  };

  const UserMenu = () => (
    <div className="relative">
      <button
        onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        className="flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
      >
        <FaUser className="mr-2" />
        {user?.name}
      </button>
      {isUserMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
          <Link
            to="/my-account"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsUserMenuOpen(false)}
          >
            My Account
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <FaSignOutAlt className="inline mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="font-bold text-xl">R.K.SPORTS</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {/* Categories dropdown */}
              <div className="relative group">
                {/* ... (keep the categories dropdown as is) ... */}
              </div>

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-700 text-white px-3 py-1 rounded-md"
                />
                <FaSearch className="absolute right-3 top-2 text-gray-400" />
              </div>

              {/* Navigation Icons */}
              {user && (
                <>
                  <Link
                    to="/wishlist"
                    className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <FaHeart />
                  </Link>
                  <Link
                    to="/cart"
                    className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    <FaShoppingCart />
                  </Link>
                </>
              )}

              {/* User Menu or Login Button */}
              {user ? (
                <UserMenu />
              ) : (
                <button
                  onClick={openLoginRegisterModal}
                  className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <FaUser />
                </button>
              )}

              <DarkModeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* ... (keep the mobile menu items as is) ... */}
            
            {/* Add user-specific mobile menu items */}
            {user ? (
              <>
                <Link
                  to="/my-account"
                  className="block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <FaUser className="inline-block mr-2" /> My Account
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <FaSignOutAlt className="inline-block mr-2" /> Logout
                </button>
              </>
            ) : (
              <button
                onClick={openLoginRegisterModal}
                className="block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium w-full text-left"
              >
                <FaUser className="inline-block mr-2" /> Login/Register
              </button>
            )}
          </div>
        </div>
      )}

      <LoginRegisterModal isOpen={isModalOpen} onClose={closeLoginRegisterModal} />
    </nav>
  );
};

export default Navbar;