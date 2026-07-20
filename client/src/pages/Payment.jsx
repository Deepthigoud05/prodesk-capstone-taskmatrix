function Payment() {
  const handleCheckout = () => {
    setTimeout(() => {
      window.location.href = "/success";
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-3xl p-10 text-center w-[420px]">

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Upgrade to TaskMatrix Pro
        </h1>

        <p className="text-gray-500 mb-8">
          Unlock premium project management features.
        </p>

        <h2 className="text-5xl font-bold text-indigo-600 mb-8">
          $9.99
        </h2>

        <button
          onClick={handleCheckout}
          className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Proceed to Payment
        </button>

        <p className="text-xs text-gray-400 mt-6">
          Demo payment flow for academic project.
        </p>

      </div>
    </div>
  );
}

export default Payment;