import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaUser,
} from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';
import LoginRegisterModal from './LoginRegisterModal';

const categories = {
  Games: {
    Cricket: ['Bat', 'Ball', 'Stumps', 'Kits', 'Nets'],
    Football: ['Balls', 'Poles', 'Nets', 'Goalkeeper Gloves', 'Shoes', 'Shin Pads'],
    Volleyball: ['Balls', 'Poles', 'Nets', 'Antenna', 'Flooring', 'Umpire Chair'],
    Basketball: ['Balls', 'Poles', 'Nets', 'Flooring', 'Table Foul Markers'],
    Handball: ['Balls', 'Poles', 'Nets'],
    Hockey: ['Stick', 'Ball', 'Poles', 'Nets', 'Shin Pads', 'Goalkeeper Kit'],
    'Kho Kho': ['Poles', 'Knee Cap & Anklets', 'Interlocking Mats'],
    Athletics: ['Discus', 'Shotput', 'Javelin', 'Hammer Throw'],
    Swimming: ['Caps & Goggles'],
    'Table Tennis': ['Table', 'Bats', 'Balls', 'Nets & Clamps'],
    Tennis: ['Rackets', 'Balls', 'Poles', 'Umpire Chair', 'Nets'],
    Badminton: ['Rackets', 'Shuttle Cocks', 'Nets', 'Poles', 'Umpire Chair'],
    Judo: ['Mats'],
    Kabaddi: ['Mats'],
    Wrestling: ['Mats'],
    'Pickle Ball': ['Bat & Ball', 'Poles', 'Nets', 'Flooring'],
  },
  'Medals & Trophies': [],
  'Gym Equipments': [],
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const openLoginRegisterModal = () => setIsModalOpen(true);
  const closeLoginRegisterModal = () => setIsModalOpen(false);

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
              <div className="relative group">
                <button
                  className="flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Categories <FaChevronDown className="ml-1" />
                </button>
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-screen max-w-md bg-white rounded-md shadow-lg z-20">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      {Object.entries(categories).map(([category, subcategories]) => (
                        <div key={category}>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
                          {Array.isArray(subcategories) && subcategories.length === 0 ? (
                            <Link
                              to={`/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'))}`}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {category}
                            </Link>
                          ) : (
                            <ul>
                              {Object.entries(subcategories).map(([subcat]) => (
                                <li key={subcat}>
                                  <Link
                                    to={`/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'))}/${encodeURIComponent(subcat.toLowerCase().replace(/\s+/g, '-'))}`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  >
                                    {subcat}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Categories Dropdown for Mobile */}
            <div className="relative">
              <button
                className="flex items-center hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium w-full text-left"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Categories <FaChevronDown className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-white rounded-md shadow-lg z-20">
                  <div className="grid grid-cols-1 gap-4 p-4">
                    {Object.entries(categories).map(([category, subcategories]) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
                        {Array.isArray(subcategories) && subcategories.length === 0 ? (
                          <Link
                            to={`/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'))}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {category}
                          </Link>
                        ) : (
                          <ul>
                            {Object.entries(subcategories).map(([subcat]) => (
                              <li key={subcat}>
                                <Link
                                  to={`/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'))}/${encodeURIComponent(subcat.toLowerCase().replace(/\s+/g, '-'))}`}
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  {subcat}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Other Mobile Menu Items */}
            <div className="relative">
              <input type="text" placeholder="Search" className="bg-gray-700 text-white px-3 py-1 rounded-md w-full" />
              <FaSearch className="absolute right-3 top-2 text-gray-400" />
            </div>
            <Link to="/wishlist" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              <FaHeart className="inline-block mr-2" /> Wishlist
            </Link>
            <Link to="/cart" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              <FaShoppingCart className="inline-block mr-2" /> Cart
            </Link>
            <button
              onClick={openLoginRegisterModal}
              className="block hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium w-full text-left"
            >
              <FaUser className="inline-block mr-2" /> Login/Register
            </button>
            <DarkModeToggle />
          </div>
        </div>
      )}

      <LoginRegisterModal isOpen={isModalOpen} onClose={closeLoginRegisterModal} />
    </nav>
  );
};

export default Navbar;