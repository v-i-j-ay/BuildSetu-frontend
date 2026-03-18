import React from "react";
import { Link } from "react-router-dom";

const Ordersuccess = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="bg-white shadow-lg rounded-xl p-8 text-center max-w-md w-full">

        <div className="text-5xl mb-4">
          ✅
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-green-600 mb-3">
          Order Placed Successfully
        </h2>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Thank you for your purchase. Your order has been placed successfully and will be processed soon.
        </p>

        <Link
          to="/suppliers"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-lg font-medium w-full md:w-auto"
        >
          Continue Shopping
        </Link>

      </div>

    </div>
  );
};

export default Ordersuccess;