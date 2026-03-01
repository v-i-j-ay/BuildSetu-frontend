import React, { useState } from "react";

const constructionCategories = [
  { name: "Construction Labour", icon: "🧱", color: "bg-orange-200" },
  { name: "Electrician", icon: "⚡", color: "bg-yellow-200" },
  { name: "Plumber", icon: "🚰", color: "bg-blue-200" },
  { name: "Carpenter", icon: "🪚", color: "bg-amber-200" },
  { name: "Painter", icon: "🎨", color: "bg-purple-200" },
  { name: "Welder", icon: "🔥", color: "bg-red-200" },
  { name: "Tiles Worker", icon: "🧱", color: "bg-green-200" },
];

const otherCategories = [
  { name: "Agricultural Labour", icon: "🌾", color: "bg-green-200" },
  { name: "Driver", icon: "🚚", color: "bg-sky-200" },
  { name: "House Cleaning", icon: "🧹", color: "bg-teal-200" },
  { name: "Security Guard", icon: "🛡️", color: "bg-gray-200" },
];

const Labours = () => {
  const [search, setSearch] = useState("");

  const filteredConstruction = constructionCategories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredOther = otherCategories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* 🔹 Register as Labour Card */}
      <div className="flex justify-center items-center m-5">
        <div className="bg-gray-500 text-white p-8 rounded-2xl shadow-xl border border-gray-300 w-full  text-center">
          <h2 className="text-3xl font-bold mb-3">
            👷 Work with BuildSetu
          </h2>

          <p className="italic text-lg mb-6 text-gray-100">
            “Your skill deserves work.  
            Register today and get hired near you.”
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-gray-800 font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all">
              Register as Labour
            </button>

            
          </div>
        </div>
      </div>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mt-12 mb-10">
        <input
          type="text"
          placeholder="Search labour type (e.g. Electrician, Driver...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" w-[90%] max-w-md sm:w-full sm:max-w-sm  px-4 py-3 border border-black rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* 🔹 Construction Categories */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Construction & Site Work
        </h3>

        {filteredConstruction.length === 0 ? (
          <p className="text-center text-gray-500">
            No construction category found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
            {filteredConstruction.map((cat, index) => (
               <div key={index}
                  className={`${cat.color}  w-[90%] sm:w-full max-w-xs sm:max-w-sm rounded-2xl p-10 shadow-xl hover:shadow-xl 
                           hover:-translate-y-1 transition-all cursor-pointer text-center`}>
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {cat.name}
                </h4>
                <p className="text-sm text-green-600">
                  Workers Available
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🔹 Other Categories */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Other Services
        </h3>

        {filteredOther.length === 0 ? (
          <p className="text-center text-gray-500">
            No service category found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
            {filteredOther.map((cat, index) => (
              <div key={index}
                  className={`${cat.color}  w-[90%] sm:w-full max-w-xs sm:max-w-sm rounded-2xl p-10 shadow-xl hover:shadow-xl 
                           hover:-translate-y-1 transition-all cursor-pointer text-center`}>
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {cat.name}
                </h4>
                <p className="text-sm text-green-600">
                  Workers Available
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Labours;
