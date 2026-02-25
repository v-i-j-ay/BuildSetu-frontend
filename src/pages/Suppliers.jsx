import React, { useState } from "react";

const productsData = [
  { id: 1, name: "Ultratech Cement 50kg", price: 380, category: "Cement" },
  { id: 2, name: "ACC Cement 50kg", price: 370, category: "Cement" },
  { id: 3, name: "TMT Steel 12mm", price: 6500, category: "Steel" },
  { id: 4, name: "River Sand (1 Load)", price: 5500, category: "Sand" },
  { id: 5, name: "Wall Putty 20kg", price: 850, category: "Paint" },
];

const Suppliers = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);

  const categories = ["All", "Cement", "Steel", "Sand", "Paint"];

  // Filter products
  const filteredProducts = productsData.filter((product) => {
    return (
      (selectedCategory === "All" ||
        product.category === selectedCategory) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  // Add to Cart
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
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
     <div className="flex justify-center items-center m-5">
  <div className="bg-gray-500 text-white p-8 rounded-2xl shadow-xl border border-gray-300 w-full text-center">

    <h2 className="text-3xl font-bold mb-3">
      🛒 BuildSetu Materials Marketplace
    </h2>

    <p className="text-lg text-gray-250 mb-4">
      India’s trusted construction materials marketplace.
    </p>

    <p className="italic text-gray-200">
      Browse cement, steel, sand, tiles and more.
      Compare prices from verified suppliers and order
      construction materials easily in one place.
    </p>
    

  </div>
</div>
    <div className="p-6">

      {/* 🔹 Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[90%] max-w-md px-4 py-3 border rounded-xl"
        />
      </div>

      {/* 🔹 Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
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

      {/* 🔹 Products Grid */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Available Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 w-[90%] sm:w-full max-w-sm p-6 rounded-2xl shadow-lg text-center"
          >
            <h3 className="font-semibold text-lg mb-2">
              {product.name}
            </h3>
            <p className="text-green-700 font-bold mb-4">
              ₹{product.price}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 Cart Section */}
      {cart.length > 0 && (
        <div className="mt-12 bg-gray-200 p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-4">🛒 Cart</h2>

          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-3"
            >
              <div>
                {item.name} (₹{item.price})
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="bg-red-500 text-white px-3 rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="bg-green-600 text-white px-3 rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <hr className="my-4" />

          <h3 className="font-bold text-lg">
            Total: ₹{totalAmount}
          </h3>

          <button className="mt-4 bg-black text-white px-6 py-2 rounded-xl">
            Checkout
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default Suppliers;