import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, price, image }) => {
  return (
    <div className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700 dark:text-gray-300">
            <Link to={`/product/${id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {name}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">${price.toFixed(2)}</p>
      </div>
      <button className="mt-2 w-full bg-red-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
