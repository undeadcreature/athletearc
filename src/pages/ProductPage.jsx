import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ProductPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [cartMessage, setCartMessage] = useState('');

    // Simulate fetching product details (replace with actual API call later)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                // Simulate a delay for API call
                setTimeout(() => {
                    const mockProduct = {
                        id: productId,
                        name: 'Running Shoes',
                        price: 129.99,
                        description: 'Comfortable running shoes for all terrains.',
                
                        images: [
                            {
                                url: '/images/running-shoes.jpg',
                                alt: 'Running Shoes',
                            },
                        ],
                    };
                    setProduct(mockProduct);
                    setLoading(false);
                }, 1000);
            } catch (error) {
                setError('Failed to fetch product details.');
                setLoading(false);
            }
        };

        fetchProduct();
    }, [productId]);

    // Add product to cart
    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cartItems.push({ ...product, quantity });
        }

        localStorage.setItem('cart', JSON.stringify(cartItems));
        setCartMessage('Product added to cart!');
        setTimeout(() => setCartMessage(''), 3000); // Clear message after 3 seconds
    };

    if (loading) return <p className="text-center text-xl">Loading...</p>;
    if (error) return <p className="text-center text-red-600 text-xl">Error: {error}</p>;
    if (!product) return <p className="text-center text-gray-600 text-xl">Product not found.</p>;

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
                {/* Product Image */}
                <div className="lg:max-w-lg lg:self-end">
                    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                        <img
                            src={product.images[0].url}
                            alt={product.images[0].alt}
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                        {product.name}
                    </h1>
                    <div className="mt-3">
                        <p className="text-3xl text-gray-900">₹{product.price.toFixed(2)}</p>
                    </div>

                    {/* Reviews */}
                    <div className="mt-3">
                        <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                                <FaStar
                                    key={rating}
                                    className={`${
                                        product.rating > rating ? 'text-yellow-400' : 'text-gray-300'
                                    } h-5 w-5 flex-shrink-0`}
                                />
                            ))}
                            <p className="ml-3 text-sm font-medium text-indigo-600">
                                {product.reviews} reviews
                            </p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <p className="text-base text-gray-900">{product.description}</p>
                    </div>

                    {/* Quantity Selector */}
                    <div className="mt-10">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
                            <div className="flex items-center">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="text-gray-500 focus:outline-none focus:text-gray-600"
                                >
                                    <span className="sr-only">Decrease quantity</span>
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M20 12H4"></path>
                                    </svg>
                                </button>
                                <span className="text-gray-700 text-lg mx-2">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="text-gray-500 focus:outline-none focus:text-gray-600"
                                >
                                    <span className="sr-only">Increase quantity</span>
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                         strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 4v16m8-8H4"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Add to cart
                    </button>

                    {/* Cart Message */}
                    {cartMessage && (
                        <div className="mt-4 text-center text-green-600">
                            {cartMessage} <a href="/cart" className="text-blue-600 underline">Go to Cart</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;