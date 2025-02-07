import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';

const HomePage = () => {
  const featuredProducts = [
    { id: '1', name: 'Running Shoes', price: 1290, image: '/imgs/basketball-hoop-781379_1920.jpg' },
    { id: '2', name: 'Yoga Mat', price: 3900, image: '/imgs/pexels-tima-miroshnichenko-5184709.jpg' },
    { id: '3', name: 'Dumbbell Set', price: 870, image: '/imgs/will-porada-uy5ZEqUOscs-unsplash.jpg' },
    { id: '4', name: 'Dumbbell Set', price: 890, image: '/imgs/will-porada-uy5ZEqUOscs-unsplash.jpg' },
    { id: '5', name: 'Tennis Racket', price: 1200, image: '/imgs/tennisracket.png' }, // Added
    { id: '6', name: 'Basketball', price: 500, image: '/imgs/basketball.png' }, // Added
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="\imgs\sky-2393871_1920.jpg"
            alt="Hero banner"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Elevate Your Performance
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Discover top-quality sports gear and equipment to help you reach your fitness goals.
          </p>
          <div className="mt-10">
            <Link
              to="/category/all"
              className="inline-block bg-red-600 py-3 px-8 rounded-md text-base font-medium text-white hover:bg-red-700"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Featured Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Running Category */}
          <Link to="/category/running" className="group">
            <div className="w-full h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden relative">
              <img
                src="/imgs/michiel-annaert-0T1Vof2jZiU-unsplash.jpg"
                alt="Running"
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h3 className="text-2xl font-bold text-white">Running</h3>
              </div>
            </div>
          </Link>

          {/* Gym Category */}
          <Link to="/category/gym" className="group">
            <div className="w-full h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden relative">
              <img
                src="/imgs/pexels-yogendras31-4747325.jpg"
                alt="Gym"
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h3 className="text-2xl font-bold text-white">Gym</h3>
              </div>
            </div>
          </Link>

          {/* Yoga Category */}
          <Link to="/category/yoga" className="group">
            <div className="w-full h-64 sm:h-80 bg-gray-200 rounded-lg overflow-hidden relative">
              <img
                src="/imgs/mali-desha-kMeC8sjlWLg-unsplash.jpg"
                alt="Yoga"
                className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h3 className="text-2xl font-bold text-white">Yoga</h3>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Latest Products */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">Gym Equipment</h2>
          <div className="relative">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;