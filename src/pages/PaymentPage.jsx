import React from 'react';
import PaymentButton from '../components/PaymentButton';

const PaymentPage = () => {
    // Example total amount (replace with your actual total amount)
    const totalAmount = 2297; // ₹22.97 (in paise: 2297)

    return (
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Payment</h1>
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Payment Details</h2>
                <div className="mt-4">
                    <p className="text-lg font-medium">Total Amount: ₹{(totalAmount / 100).toFixed(2)}</p>
                </div>
            </div>

            <div className="mt-8">
                <PaymentButton amount={totalAmount} />
            </div>
        </div>
    );
};

export default PaymentPage;