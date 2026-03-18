import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {

  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const increase = (id) => {
    updateCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrease = (id) => {
    updateCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-6">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100"
      >
        ← Back
      </button>

      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">
          Your cart is empty
        </p>
      ) : (
        <div className="max-w-4xl mx-auto">

          {/* Cart Items */}
          <div className="space-y-4">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow-md"
              >

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                  {/* Image + Details */}
                  <div className="flex items-center gap-4">

                    <div className="w-20 h-20 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                        {item.name}
                      </h3>
                      <p className="text-green-600 font-bold text-sm">
                        ₹{item.price}
                      </p>
                    </div>

                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-between sm:justify-end gap-4">

                    {/* Quantity */}
                    <div className="flex items-center gap-2">

                      <button
                        onClick={() => decrease(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded-md"
                      >
                        −
                      </button>

                      <span className="font-semibold text-sm">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increase(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded-md"
                      >
                        +
                      </button>

                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 text-sm"
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* Total Section */}
          <div className="mt-6 bg-white p-4 rounded-xl shadow-md flex flex-col sm:flex-row justify-between items-center gap-3">

            <h3 className="text-lg font-bold">
              Total: ₹{total}
            </h3>

            <Link
              to="/checkout"
              className="w-full sm:w-auto text-center bg-green-600 text-white px-6 py-2 rounded-lg"
            >
              Checkout
            </Link>

          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;