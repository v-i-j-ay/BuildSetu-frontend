import React from "react";
import bs from "../photos/bs.jpeg";
import go from "../photos/go.jpg";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
const navigate = useNavigate();
  async function signIn() {
  try {
    await signInWithPopup(auth, googleProvider);

    toast.success("Login successful 🚀");

    navigate("/profile");
  } catch (error) {
    toast.error("Login failed");
  }
}

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden border">
        
        <div className="relative h-56 md:h-auto">
          <img
            src={bs}
            alt="Visual"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-xl md:text-2xl font-bold">Build Better</h2>
            <p className="text-sm opacity-90">
              Simple. Secure. Fast login.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 md:p-12">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Welcome Back 👋
          </h1>

          <p className="text-gray-500 text-center mb-8">
            Login using your Google account
          </p>

          <button 
            onClick={signIn}
            className="flex items-center justify-center gap-4 w-full border border-gray-300 rounded-xl py-4 hover:bg-gray-100 active:scale-95 transition"
          >
            <img
              src={go}
              alt="Google"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="font-semibold text-gray-700 text-base hover:text-blue-700">
              Continue with Google
            </span>
          </button>

          <p className="text-xs text-gray-400 text-center mt-6">
            Secure sign-in powered by Google
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
