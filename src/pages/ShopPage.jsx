import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // TODO: Fetch categories and products from the backend
    // For now, we'll use dummy data
    setCategories([
      {
        id: 1,
        name: "Sports",
        subcategories: [
          { id: 1, name: "Football" },
          { id: 2, name: "Basketball" },
        ],
      },
      {
        id: 2,
        name: "Fitness",
        subcategories: [
          { id: 3, name: "Yoga" },
          { id: 4, name: "Weightlifting" },
        ],
      },
    ]);
    setProducts([
      { id: 1, name: "Football", price: 29.99, image: "/imgs/will-porada-uy5ZEqUOscs-unsplash.jpg" },
      { id: 2, name: "Basketball", price: 24.99, image: "/imgs/basketball.png" },
      { id: 3, name: "Yoga Mat", price: 19.99, image: "/imgs/yoga-mat.png" },
      { id: 4, name: "Dumbbells", price: 39.99, image: "/imgs/dumbbells.png" },
    ]);
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>
      &nbsp;
        <hr/>
        &nbsp;
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Categories Section */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.id} className="mb-2">
                <Link to={`/category/${category.id}`} className="text-blue-600 hover:underline">
                  {category.name}
                </Link>
                <ul className="ml-4 mt-1">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.id}>
                      <Link
                        to={`/category/${category.id}/subcategory/${subcategory.id}`}
                        className="text-gray-600 hover:underline"
                      >
                        {subcategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Section */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-semibold mb-4">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="border rounded-lg p-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;