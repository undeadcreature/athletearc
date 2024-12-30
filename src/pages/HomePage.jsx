import React from 'react';
import {Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';

const HomePage = () => {
  const featuredProducts = [
    { id: '1', name: 'Running Shoes', price: 129.99, image: '/images/running-shoes.jpg' },
    { id: '2', name: 'Yoga Mat', price: 39.99, image: '/images/yoga-mat.jpg' },
    { id: '3', name: 'Dumbbell Set', price: 89.99, image: '/images/dumbbell-set.jpg' },
    // Add more products as needed
  ];

  const testimonials = [
    { id: 1, content: 'Athletex has the best sports gear I\'ve ever used!', author: 'John D.' },
    { id: 2, content: 'Their customer service is top-notch. Highly recommended!', author: 'Sarah M.' },
    { id: 3, content: 'I love the quality of their products. Will definitely buy again!', author: 'Mike R.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/images/hero-banner.jpg"
            alt="Hero banner"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
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
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Featured Categories</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {['Running', 'Gym', 'Yoga'].map((category) => (
            <Link key={category} to={`/category/${category.toLowerCase()}`} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={`/images/${category.toLowerCase()}-category.jpg`}
                  alt={category}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{category}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Latest Products */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Latest Products</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">What Our Customers Say</h2>
          <Carousel items={testimonials} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

