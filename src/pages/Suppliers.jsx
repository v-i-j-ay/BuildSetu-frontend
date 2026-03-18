import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import cement from "../photos/cement.jpg";
import steel from "../photos/steel.jpg";
import sand from "../photos/sand.jpg";
import wallputty from "../photos/wallputty.jpg";

const productsData = [
  { id: 1, img: cement, name: "Ultratech Cement 50kg", price: 380, category: "Cement" },
  { id: 2, img: cement, name: "ACC Cement 50kg", price: 370, category: "Cement" },
  { id: 3, img: steel, name: "TMT Steel 12mm", price: 6500, category: "Steel" },
  { id: 4, img: sand, name: "River Sand (1 Load)", price: 5500, category: "Sand" },
  { id: 5, img: wallputty, name: "Wall Putty 20kg", price: 850, category: "Paint" },
];

const Suppliers = () => {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const categories = ["All", "Cement", "Steel", "Sand", "Paint"];

  const filteredProducts = productsData.filter((product) => {
    return (
      (selectedCategory === "All" ||
        product.category === selectedCategory) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  const addToCart = (product) => {

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    toast.success(`${product.name} added to cart`);
  };

  // total quantity (fixed cart count)
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>

      {/* Banner */}
      <div className="flex justify-center items-center m-5">
        <div className="bg-gray-500 text-white p-8 rounded-2xl shadow-xl border border-gray-300 w-full text-center">
          <h2 className="text-3xl font-bold mb-3">
            🛒 BuildSetu Materials Marketplace
          </h2>
          <p className="text-lg mb-4">
            India’s trusted construction materials marketplace.
          </p>
          <p className="italic">
            Browse cement, steel, sand, tiles and more.
            Compare prices from verified suppliers and order
            construction materials easily in one place.
          </p>
        </div>
      </div>

      <div className="p-6">

        {/* Search + Cart */}
        <div className="flex justify-center items-center gap-4 mb-6">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-xl"
          />

          <Link to="/cart" className="relative">
            <span className="text-2xl">🛒</span>

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                {totalItems}
              </span>
            )}

          </Link>

        </div>

        {/* Categories */}
        <div className="flex justify-center gap-3 mb-6">

          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl ${
                selectedCategory === cat
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}

        </div>

        {/* Products */}
        <div className="grid md:grid-cols-3 gap-6">

          {filteredProducts.map((product) => (

            // ✅ ONLY CARD UI UPDATED HERE
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >

              {/* Image */}
              <div className=" w-full h-48 bg-gray-100 flex items-center justify-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full object-contain p-4"
                />
              </div>

              {/* Content */}
              <div className="p-4">

                <h3 className="text-base font-semibold text-gray-800 mb-1 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-green-600 font-bold text-lg mb-3">
                  ₹{product.price}
                </p>

                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      <ToastContainer position="top-right" autoClose={2000} />

    </>
  );
};

export default Suppliers;