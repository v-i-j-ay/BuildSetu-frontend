import React from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

 async function logout() {
  try {
    await signOut(auth);

    toast.success("Logged out successfully 👋");

    navigate("/login");
  } catch (error) {
    toast.error("Logout failed");
  }
}

  // Safety check (shouldn't happen if ProtectedRoute works)
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center px-4">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 border-b-4 border-blue-600 pb-2">
        Profile Page
      </h1>

      {/* Profile Card */}
      <div className="w-full max-w-md mt-6 bg-white rounded-3xl p-10 text-center shadow-2xl border-2 hover:shadow-blue-200 transition duration-300">
        
        <img
          src={user.photoURL}
          alt="profile"
          className="h-28 w-28 rounded-full mx-auto mb-6 ring-4 ring-blue-100 shadow-lg"
        />

        <h2 className="text-2xl font-semibold text-gray-800">
          {user.displayName}
        </h2>

        <p className="text-gray-500 mt-2">
          {user.email}
        </p>

        <button
          onClick={logout}
          className="mt-8 w-full py-3 rounded-xl
                     bg-red-500 text-white font-semibold
                     hover:bg-red-600 hover:shadow-lg
                     active:scale-95
                     transition duration-200"
        >
          Logout
        </button>
      </div>

    </div>
  );
};

export default Profile;