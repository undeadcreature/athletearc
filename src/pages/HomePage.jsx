import React from 'react';
import {Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Carousel from '../components/Carousel';

const HomePage = () => {
  const featuredProducts = [
    { id: '1', name: 'Running Shoes', price: 1290, image: '/imgs/basketball-hoop-781379_1920.jpg' },
    { id: '2', name: 'Yoga Mat', price: 3900, image: '/imgs/pexels-tima-miroshnichenko-5184709.jpg' },
    { id: '3', name: 'Dumbbell Set', price: 870, image: '/imgs/will-porada-uy5ZEqUOscs-unsplash.jpg' },
    { id: '4', name: 'Dumbbell Set', price: 890, image: '/imgs/will-porada-uy5ZEqUOscs-unsplash.jpg' },
    
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
            src="\imgs\sky-2393871_1920.jpg"
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

      {/* Featured Categories 
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Featured Categories</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {['Running', 'Gym', 'Yoga'].map((category) => (
            <Link key={category} to={`/category/${category.toLowerCase()}`} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={`/image/${category.toLowerCase()}-category.jpg`}
                  alt={category}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{category}</h3>
            </Link>
          ))}
        </div>
      </div>
*/}


 {/* Featured Categories */}
 <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
 <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Featured Categories</h2>
 <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
   {/* Running Category */}
   <Link to="/category/running" className="group">
     <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
       <img
         src="/imgs/michiel-annaert-0T1Vof2jZiU-unsplash.jpg" // Image for Running category
         alt="Running"
         className="w-full h-full object-center object-cover group-hover:opacity-75"
       />
     </div>
     <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Running</h3>
   </Link>

   {/* Gym Category */}
   <Link to="/category/gym" className="group">
     <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
       <img
         src="/imgs/pexels-yogendras31-4747325.jpg" // Image for Gym category
         alt="Gym"
         className="w-full h-full object-center object-cover group-hover:opacity-75"
       />
     </div>
     <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Gym</h3>
   </Link>

   {/* Yoga Category */}
   <Link to="/category/yoga" className="group">
     <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
       <img
         src="/imgs/mali-desha-kMeC8sjlWLg-unsplash.jpg" // Image for Yoga category
         alt="Yoga"
         className="w-full h-full object-center object-cover group-hover:opacity-75"
       />
     </div>
     <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Yoga</h3>
   </Link>
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

