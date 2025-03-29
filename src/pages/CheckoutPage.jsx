import React, { useState } from 'react';

const CheckoutPage = () => {
    const [showConfirmPopup, setShowConfirmPopup] = useState(false);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const cartItems = [
        { id: 1, name: 'Running Shoes', price: 1299, quantity: 1 },
        { id: 2, name: 'Yoga Mat', price: 499, quantity: 2 },
    ];

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleOrder = () => {
        setShowConfirmPopup(true);
    };

    const confirmOrder = () => {
        setShowConfirmPopup(false);
        setShowSuccessPopup(true);
    };

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
                <button
                    onClick={handleOrder}
                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-indigo-700"
                >
                    Place Order
                </button>
            </div>

            {showConfirmPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="text-lg font-semibold">Are you sure you want to place the order?</p>
                        <div className="mt-4 flex justify-center space-x-4">
                            <button
                                onClick={confirmOrder}
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={() => setShowConfirmPopup(false)}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showSuccessPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="text-lg font-semibold text-green-600">Order Successful!</p>
                        <button
                            onClick={() => setShowSuccessPopup(false)}
                            className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CheckoutPage;
