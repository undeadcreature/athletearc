import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ShopPage = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Create refs for each category and subcategory section
  const categoryRefs = useRef({});
  const subcategoryRefs = useRef({});

  useEffect(() => {
    // TODO: Fetch categories and products from the backend
    // For now, we'll use dummy data
    setCategories([
      {
        id: 1,
        name: "Game",
        subcategories: [
          { id: 1, name: "Basketball" },
          { id: 2, name: "Cricket" },
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
      { id: 1, name: "Basketball", price: 24.99, image: "/imgs/basketball.png", categoryId: 1, subcategoryId: 1 },
      { id: 2, name: "Cricket Bat", price: 29.99, image: "/imgs/cricket-bat.png", categoryId: 1, subcategoryId: 2 },
      { id: 3, name: "Cricket Ball", price: 19.99, image: "/imgs/cricket-ball.png", categoryId: 1, subcategoryId: 2 },
      { id: 4, name: "Yoga Mat", price: 19.99, image: "/imgs/yoga-mat.png", categoryId: 2, subcategoryId: 3 },
      { id: 5, name: "Dumbbells", price: 39.99, image: "/imgs/dumbbells.png", categoryId: 2, subcategoryId: 4 },
    ]);
  }, []);

  // Function to group products by category and subcategory
  const groupProductsByCategory = (products, categories) => {
    return categories.map(category => {
      const categoryProducts = products.filter(product => product.categoryId === category.id);
      const subcategoriesWithProducts = category.subcategories.map(subcategory => {
        const subcategoryProducts = categoryProducts.filter(product => product.subcategoryId === subcategory.id);
        return {
          ...subcategory,
          products: subcategoryProducts
        };
      });
      return {
        ...category,
        subcategories: subcategoriesWithProducts
      };
    });
  };

  const groupedCategories = groupProductsByCategory(products, categories);

  // Function to handle category click and scroll to the corresponding section
  const handleCategoryClick = (categoryId) => {
    if (categoryRefs.current[categoryId]) {
      categoryRefs.current[categoryId].scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle subcategory click and scroll to the corresponding section
  const handleSubcategoryClick = (subcategoryId) => {
    if (subcategoryRefs.current[subcategoryId]) {
      subcategoryRefs.current[subcategoryId].scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>
      &nbsp;
      <hr />
      &nbsp;
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Categories Section */}
        <div className="md:col-span-1 border-r border-gray-200 pr-4">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.id} className="mb-2">
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  className="text-blue-600 hover:underline focus:outline-none"
                >
                  {category.name}
                </button>
                <ul className="ml-4 mt-1">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.id}>
                      <button
                        onClick={() => handleSubcategoryClick(subcategory.id)}
                        className="text-gray-600 hover:underline focus:outline-none"
                      >
                        {subcategory.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Products Section */}
        <div className="md:col-span-3">
          {/*<h2 className="text-xl font-semibold mb-4">All Products</h2>*/}
          {groupedCategories.map((category) => (
            <div
              key={category.id}
              ref={(el) => (categoryRefs.current[category.id] = el)} // Assign ref to each category section
              className="mb-8"
            >
              <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
              {category.subcategories.map((subcategory) => (
                <div
                  key={subcategory.id}
                  ref={(el) => (subcategoryRefs.current[subcategory.id] = el)} // Assign ref to each subcategory section
                  className="mb-6"
                >
                  <h4 className="text-xl font-semibold mb-2">{subcategory.name}</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {subcategory.products.map((product) => (
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
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;