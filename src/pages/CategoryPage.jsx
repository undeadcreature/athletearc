import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [sortBy, setSortBy] = useState('popularity');

  // Mock data for products
  const products = [
    { id: '1', name: 'Running Shoes', price: 129.99, image: '/images/running-shoes.jpg' },
    { id: '2', name: 'Yoga Mat', price: 39.99, image: '/images/yoga-mat.jpg' },
    { id: '3', name: 'Dumbbell Set', price: 89.99, image: '/images/dumbbell-set.jpg' },
    // Add more products as needed
  ];

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'price-low-high') return a.price - b.price;
    if (sortBy === 'price-high-low') return b.price - a.price;
    return 0; // Default to no sorting (popularity)
  });

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-8">
        {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Products
      </h1>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 sm:mb-0">
          Showing {sortedProducts.length} products
        </p>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="block w-full sm:w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
        >
          <option value="popularity">Sort by Popularity</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
