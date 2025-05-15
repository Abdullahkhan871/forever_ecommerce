function loadRazorpay() {
    const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Replace with your test key ID
        amount: 50000, // in paise = ₹500
        currency: "INR",
        name: "Test Company",
        description: "Test Transaction",
        image: "https://your-logo-url.com/logo.png",
        handler: function (response) {
            toast(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
            name: "Test User",
            email: "test@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Test Address",
        },
        theme: {
            color: "#3399cc",
        },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
};

export default loadRazorpay;