import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const constructionCategories = [
  "Building Contractor",
  "Electrical Contractor",
  "Plumbing Contractor",
  "Interior Designer",
  "Road Contractor",
  "Renovation Specialist",
  "Civil Engineer"
];

const ContractorRegister = () => {

  const navigate = useNavigate();

  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

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

      const file = files[0];

      if (file) {
        setPreview(URL.createObjectURL(file));
      }

      setFormData({
        ...formData,
        profile: file,
      });

    }

    else if (name === "phone") {

      const phoneValue = value.replace(/\D/g, "").slice(0, 10);

      setFormData({
        ...formData,
        phone: phoneValue,
      });

    }

    else {

      setFormData({
        ...formData,
        [name]: value,
      });

    }

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    // VALIDATIONS
    if (!formData.name.trim()) {
      alert("Name is required");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      alert("Phone number must be exactly 10 digits");
      return;
    }

    if (!formData.email.trim()) {
      alert("Email is required");
      return;
    }

    if (!formData.category) {
      alert("Please select a category");
      return;
    }

    if (!formData.profile) {
      alert("Profile photo is required");
      return;
    }

    try {

      setLoading(true);

      const data = new FormData();

      data.append("name", formData.name);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("category", formData.category);
      data.append("experience", formData.experience);
      data.append("location", formData.location);
      data.append("profile", formData.profile);

      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contractors/register`,
        data
      );

      alert("Contractor Registration Successful! Waiting for Admin Approval");

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

      navigate("/contractors");

    }

    catch (error) {

      console.log(error);
      alert("Registration failed");

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-6 sm:p-10 relative">

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
          Fill your details to get hired faster
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid sm:grid-cols-2 gap-4">

            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border"
            />

          </div>

          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border"
          />

          <div className="grid sm:grid-cols-2 gap-4">

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border"
            >
              <option value="">Select Category</option>

              {constructionCategories.map((cat, index) => (
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
              className="w-full px-4 py-3 rounded-xl border"
            />

          </div>

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border"
          />

          <label className="w-full flex flex-col items-center justify-center px-6 py-8 border-2 border-dashed rounded-2xl cursor-pointer">

            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-24 h-24 rounded-full object-cover"
              />
            ) : (
              <p>Click to upload photo *</p>
            )}

            <input
              type="file"
              name="profile"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />

          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2"
          >

            {loading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                Processing...
              </>
            ) : (
              "Submit Registration"
            )}

          </button>

        </form>

      </div>

    </div>

  );

};

export default ContractorRegister;