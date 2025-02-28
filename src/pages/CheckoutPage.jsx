import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    // Example cart items (replace with your actual cart data)
    const cartItems = [
        { id: 1, name: 'Running Shoes', price: 1299, quantity: 1 },
        { id: 2, name: 'Yoga Mat', price: 499, quantity: 2 },
    ];

    // Calculate total amount
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Checkout</h1>
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Order Summary</h2>
                <div className="mt-4 space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center border-b pb-4">
                            <div>
                                <p className="text-lg font-medium">{item.name}</p>
                                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                            </div>
                            <p className="text-lg font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex justify-between items-center">
                    <p className="text-xl font-semibold">Total Amount</p>
                    <p className="text-xl font-semibold">₹{totalAmount.toFixed(2)}</p>
                </div>
            </div>

            <div className="mt-8">
                <Link
                    to="/payment"
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-indigo-700"
                >
                    Proceed to Payment
                </Link>
            </div>
        </div>
    );
};

export default CheckoutPage;