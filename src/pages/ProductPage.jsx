import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ProductPage = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock data for a single product
  const product = {
    id: productId,
    name: 'Premium Running Shoes',
    price: 129.99,
    description: 'High-performance running shoes designed for comfort and speed. Perfect for both casual joggers and serious athletes.',
    images: ['/images/running-shoes-1.jpg', '/images/running-shoes-2.jpg', '/images/running-shoes-3.jpg'],
    rating: 4.5,
    reviews: 127,
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        {/* Product images */}
        <div className="lg:max-w-lg lg:self-end">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img src={product.images[0]} alt={product.name} className="w-full h-full object-center object-cover" />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                <img src={image} alt={`${product.name} ${index + 2}`} className="w-full h-full object-center object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product details */}
        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">{product.name}</h1>
          <div className="mt-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900 dark:text-white">${product.price.toFixed(2)}</p>
          </div>

          {/* Reviews */}
          <div className="mt-3">
            <h3 className="sr-only">Reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <FaStar
                    key={rating}
                    className={`${
                      product.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                    } h-5 w-5 flex-shrink-0`}
                  />
                ))}
              </div>
              <p className="sr-only">{product.rating} out of 5 stars</p>
              <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                {product.reviews} reviews
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-900 dark:text-gray-300">{product.description}</p>
          </div>

          <div className="mt-10">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</h3>
              <div className="flex items-center">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-gray-500 focus:outline-none focus:text-gray-600 dark:text-gray-400 dark:focus:text-gray-300"
                >
                  <span className="sr-only">Decrease quantity</span>
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 12H4"></path></svg>
                </button>
                <span className="text-gray-700 text-lg mx-2 dark:text-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-gray-500 focus:outline-none focus:text-gray-600 dark:text-gray-400 dark:focus:text-gray-300"
                >
                  <span className="sr-only">Increase quantity</span>
                  <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 4v16m8-8H4"></path></svg>
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
