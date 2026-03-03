import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const constructionCategories = [
  "Construction Labour",
  "Electrician",
  "Plumber",
  "Carpenter",
  "Painter",
  "Welder",
  "Tiles Worker",
];

const otherCategories = [
  "Agricultural Labour",
  "Driver",
  "House Cleaning",
  "Security Guard",
];

const LabourRegister = () => {
  const navigate = useNavigate(); // ✅ added

  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
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

    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill all required fields");
      return;
    }

    alert("Registration Successful! Waiting for Admin Approval");

    // Reset form
    setPreview(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      category: "",
      experience: "",
      location: "",
      profile: null,
    });

    // ✅ Go back to labour page
    navigate("/labours");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-6 sm:p-10 relative">

        {/* ✅ Close Button (same UI style, no design change) */}
        <button
          onClick={() => navigate("/labours")}
          className="absolute top-6 right-6 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Labour Registration
        </h2>

        <p className="text-gray-500 mb-8 text-sm sm:text-base">
          Fill your details to get hired faster
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Personal Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />

          {/* Work Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            >
              <option value="">Select Category</option>
              {[...constructionCategories, ...otherCategories].map(
                (cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                )
              )}
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
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
          />

          {/* Profile Upload */}
          <div>
            <label className="text-sm font-medium text-gray-600 block mb-2">
              Profile Photo
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
                  <span className="text-4xl mb-2">📷</span>
                  <p className="text-sm">Click to upload photo</p>
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

export default LabourRegister;