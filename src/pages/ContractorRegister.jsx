import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const contractorCategories = [
  "Building Contractor",
  "Electrical Contractor",
  "Plumbing Contractor",
  "Interior Contractor",
  "Road Contractor",
];

const ContractorRegister = () => {
  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    companyName: "",
    ownerName: "",
    phone: "",
    email: "",
    category: "",
    experience: "",
    location: "",
    profile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "profile") {
      setFormData({ ...formData, profile: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.companyName || !formData.phone || !formData.email) {
      alert("Please fill all required fields");
      return;
    }

    alert("Contractor Registration Successful! Waiting for Admin Approval");

    setPreview(null);
    setFormData({
      companyName: "",
      ownerName: "",
      phone: "",
      email: "",
      category: "",
      experience: "",
      location: "",
      profile: null,
    });

    navigate("/contractors");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-6 sm:p-10 relative">

        {/* Close Button */}
        <button
          onClick={() => navigate("/contractors")}
          className="absolute top-6 right-6 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Contractor Registration
        </h2>

        <p className="text-gray-500 mb-8 text-sm sm:text-base">
          Register your company to hire skilled workers
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Basic Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name *"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />

            <input
              type="text"
              name="ownerName"
              placeholder="Owner Name"
              value={formData.ownerName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Work Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              <option value="">Select Contractor Type</option>
              {contractorCategories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <input
              type="number"
              name="experience"
              placeholder="Experience (Years)"
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          <input
            type="text"
            name="location"
            placeholder="Office Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />

          {/* Profile Upload */}
          <div>
            <label className="text-sm font-medium text-gray-600 block mb-2">
              Company Logo / Profile Photo
            </label>

            <label className="w-full flex flex-col items-center justify-center px-6 py-8 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-yellow-400 hover:bg-yellow-50 transition duration-300">

              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="w-24 h-24 rounded-full object-cover mb-3 shadow-md"
                />
              ) : (
                <div className="flex flex-col items-center text-gray-400">
                  <span className="text-4xl mb-2">🏢</span>
                  <p className="text-sm">Click to upload logo</p>
                  <p className="text-xs text-gray-400 mt-1">
                    JPG, PNG (Max 5MB)
                  </p>
                </div>
              )}

              <input
                type="file"
                name="profile"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  handleChange(e);
                  const file = e.target.files[0];
                  if (file) {
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300"
          >
            Submit Registration
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContractorRegister;