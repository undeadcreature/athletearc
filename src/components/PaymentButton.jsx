import React from 'react';

const PaymentButton = ({ amount }) => {
    const handlePayment = async () => {
        // Replace with your Test Key ID
        const razorpayKey = 'rzp_test_m5EELa362TkRIs';

        // Create an order (you can hardcode this for testing)
        const order = {
            amount: amount, // Amount in paise (e.g., 1000 = ₹10)
            currency: 'INR',
            receipt: 'order_receipt_123', // Unique receipt ID
        };

        // Open Razorpay payment modal
        const options = {
            key: razorpayKey,
            amount: order.amount,
            currency: order.currency,
            name: 'Your Store Name',
            description: 'Payment for your order',
            order_id: order.receipt, // Use a dummy order ID for testing
            handler: function (response) {
                alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
                // Redirect to a success page or show a success message
            },
            prefill: {
                name: 'John Doe', // Prefill customer details (optional)
                email: 'john.doe@example.com',
                contact: '9999999999',
            },
            theme: {
                color: '#F37254', // Customize Razorpay theme
            },
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
    };

    return (
        <button
            onClick={handlePayment}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-indigo-700"
        >
            Pay Now
        </button>
    );
};

export default PaymentButton;