import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([
    { id: '1', name: 'Running Shoes', price: 129.99, image: '/images/running-shoes.jpg' },
    { id: '2', name: 'Yoga Mat', price: 39.99, image: '/images/yoga-mat.jpg' },
    { id: '3', name: 'Dumbbell Set', price: 89.99, image: '/images/dumbbell-set.jpg' },
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const moveToCart = (id) => {
    // In a real application, you would add the item to the cart here
    console.log(`Moving item ${id} to cart`);
    removeItem(id);
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Your Wishlist</h1>
      <div className="mt-12">
        {wishlistItems.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {wishlistItems.map((item) => (
              <div key={item.id} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${item.price.toFixed(2)}</p>
                <div className="mt-6">
                  <button
                    onClick={() => moveToCart(item.id)}
                    className="w-full bg-red-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="mt-2 w-full bg-white border border-gray-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-10">
        <Link
          to="/"
          className="text-base font-medium text-red-600 hover:text-red-500"
        >
          Continue Shopping<span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default WishlistPage;
