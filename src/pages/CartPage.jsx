import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    // Update quantity of a cart item
    const updateQuantity = (id, newQuantity) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Remove item from cart
    const removeItem = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    // Calculate subtotal
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Shopping Cart</h1>
            <div className="mt-12">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div className="flow-root">
                        <ul className="-my-6 divide-y divide-gray-200">
                            {cartItems.map((item) => (
                                <li key={item.id} className="py-6 flex">
                                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                        <img
                                            src={item.images[0].url}
                                            alt={item.images[0].alt}
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </div>
                                    <div className="ml-4 flex-1 flex flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <h3>{item.name}</h3>
                                                <p className="ml-4">₹{(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <div className="flex-1 flex items-end justify-between text-sm">
                                            <div className="flex items-center">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="text-gray-500 focus:outline-none focus:text-gray-600"
                                                >
                                                    <span className="sr-only">Decrease quantity</span>
                                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round"
                                                         strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path d="M20 12H4"></path>
                                                    </svg>
                                                </button>
                                                <span className="text-gray-700 mx-2">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="text-gray-500 focus:outline-none focus:text-gray-600"
                                                >
                                                    <span className="sr-only">Increase quantity</span>
                                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round"
                                                         strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path d="M12 4v16m8-8H4"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex">
                                                <button
                                                    type="button"
                                                    onClick={() => removeItem(item.id)}
                                                    className="font-medium text-red-600 hover:text-red-500"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="mt-10">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>₹{subtotal.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                        <Link
                            to="/checkout"
                            className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Checkout
                        </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
                        <p>
                            or{' '}
                            <Link to="/" className="text-indigo-600 font-medium hover:text-indigo-500">
                                Continue Shopping<span aria-hidden="true"> &rarr;</span>
                            </Link>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;