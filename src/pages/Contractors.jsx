
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContractorRegister from "./ContractorRegister";

const constructionContractors = [
  { name: "Building Contractor", icon: "🏗️", color: "bg-orange-200" },
  { name: "Civil Engineer", icon: "📐", color: "bg-blue-200" },
  { name: "Interior Designer Contractor", icon: "🛋️", color: "bg-purple-200" },
  { name: "Electrical Contractor", icon: "⚡", color: "bg-green-200" },
  { name: "Plumbing Contractor", icon: "🚰", color: "bg-sky-200" },
];

const otherContractors = [
  { name: "Renovation Specialist Contractor", icon: "🏠", color: "bg-red-200" },
  { name: "Road Contractor", icon: "🛣️", color: "bg-gray-200" },
  { name: "Government Contractor", icon: "🏢", color: "bg-indigo-200" },
];

const Contractors = () => {
  const [search, setSearch] = useState("");
   const navigate = useNavigate();

  const filteredConstruction = constructionContractors.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredOther = otherContractors.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* 🔹 Register as Contractor Card */}
      <div className="flex justify-center items-center m-5">
       <div className="bg-gray-500 text-white p-8 rounded-2xl shadow-xl border border-gray-300 w-full text-center">
        
         <h2 className="text-3xl font-bold mb-3">
          🏗️ Grow Your Business with BuildSetu
         </h2>
         <p className="italic text-lg mb-6 text-gray-100">
           “Get skilled workers, manage projects,  
           and build faster with confidence.”
         </p>
         <div className="flex flex-col sm:flex-row justify-center gap-4">
           <button  onClick={() => navigate("/contractor/register")} className="bg-white text-gray-800 font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all">
             Register as Contractor
           </button>
           
         </div>

       </div>
     </div>

      {/* 🔍 Search Bar */}
      <div className="flex justify-center mt-12 mb-10">
        <input
          type="text"
          placeholder="Search contractor type (e.g. Civil Engineer...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-[90%] max-w-md sm:w-full sm:max-w-sm px-4 py-3 border border-black rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* 🔹 Construction Contractors */}
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Construction Contractors
        </h3>

        {filteredConstruction.length === 0 ? (
          <p className="text-center text-gray-500">
            No contractor category found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
            {filteredConstruction.map((cat, index) => (
              <div
                key={index}
                onClick={() => navigate(`/contractors/category/${cat.name}`)}
                className={`${cat.color} w-[90%] sm:w-full max-w-xs sm:max-w-sm rounded-2xl p-10 shadow-xl hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer text-center`}
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {cat.name}
                </h4>
                <p className="text-sm text-green-600">
                  Contractors Available
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 🔹 Other Contractors */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Other Contractors
        </h3>

        {filteredOther.length === 0 ? (
          <p className="text-center text-gray-500">
            No contractor category found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
            {filteredOther.map((cat, index) => (
              <div
                key={index}
                onClick={() => navigate(`/contractors/category/${cat.name}`)}
                className={`${cat.color} w-[90%] sm:w-full max-w-xs sm:max-w-sm rounded-2xl p-10 shadow-xl hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer text-center`}
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  {cat.name}
                </h4>
                <p className="text-sm text-green-600">
                  Contractors Available
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Contractors;
