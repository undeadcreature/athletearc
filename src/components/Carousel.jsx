import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const gymProducts = [
  { id: 1, name: 'Treadmill', price: 999.99, image: '/imgs/treadmill.png' },
  { id: 2, name: 'Dumbbells Set', price: 149.99, image: '/imgs/dumbbells.png' },
  { id: 3, name: 'Exercise Bike', price: 399.99, image: '/imgs/exercise-bike.png' },
  { id: 4, name: 'Yoga Mat', price: 29.99, image: '/imgs/yoga-mat.png' },
  { id: 5, name: 'Resistance Bands', price: 19.99, image: '/imgs/resistance-bands.png' },
  { id: 6, name: 'Kettlebell', price: 49.99, image: '/imgs/kettlebell.png' },
  { id: 7, name: 'Pull-Up Bar', price: 39.99, image: '/imgs/pull-up-bar.png' },
  { id: 8, name: 'Jump Rope', price: 9.99, image: '/imgs/jump-rope.png' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Number of products to show at a time
  const productsPerPage = 3;

  // Calculate the total number of pages
  const totalPages = Math.ceil(gymProducts.length / productsPerPage);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  // Get the current set of products to display
  const getCurrentProducts = () => {
    const startIndex = currentIndex * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return gymProducts.slice(startIndex, endIndex);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div className="flex transition-transform duration-300 ease-in-out">
        {getCurrentProducts().map((product) => (
          <div key={product.id} className="w-full flex-shrink-0 px-4" style={{ width: `${100 / productsPerPage}%` }}>
            <Link to={`/product/${product.id}`} className="block">
              <div className="bg-white dark:bg-gray-800 aspect-square rounded-lg overflow-hidden shadow-lg">
                <img
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md text-gray-800 dark:text-white"
      >
        <FaChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md text-gray-800 dark:text-white"
      >
        <FaChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Carousel;