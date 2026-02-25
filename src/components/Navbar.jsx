import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../photos/bdsd.jpeg";
import account from "../photos/account.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-900 hover:text-blue-600";

  return (
    <>
      {/* ===== TOP NAVBAR ===== */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logo} alt="BuildSetu" className="h-15   w-auto" />
              <span className="text-xl font-bold text-gray-800">
                BuildSetu
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex text-md items-center gap-6">
              <NavLink to="/" className={linkClass}>Home</NavLink>
              <NavLink to="/labours" className={linkClass}>Labours</NavLink>
              <NavLink to="/contractors" className={linkClass}>Contractors</NavLink>
              <NavLink to="/suppliers" className={linkClass}>Materials</NavLink>
              <NavLink to="/about" className={linkClass}>About</NavLink>
              <NavLink to="/contact" className={linkClass}>Need help?</NavLink>
              <NavLink to="/login" className="flex items-center">
  <img
    src={account}
    alt="Account"
    className="w-8 h-8 rounded-full hover:opacity-80 transition"
  /><span className="ml-2 hover:text-blue-600">MyAccount</span>
</NavLink>

            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-3xl text-gray-700"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* ===== MOBILE SIDEBAR OVERLAY ===== */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* ===== MOBILE SIDEBAR ===== */}
      <div
        className={`fixed top-0 left-0 h-full w-60 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 h-20 border-b">
          <div className="flex items-center gap-2">
            <img src={logo} alt="BuildSetu" className="h-10" />
            <span className="text-lg font-bold">BuildSetu</span>
          </div>
          <button
            className="text-2xl text-gray-600 "
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col p-6 gap-5 text-md">
          <NavLink to="/" className={linkClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/labours" className={linkClass} onClick={() => setOpen(false)}>
            Labours
          </NavLink>
          <NavLink to="/contractors" className={linkClass} onClick={() => setOpen(false)}>
            Contractors
          </NavLink>
          <NavLink to="/suppliers" className={linkClass} onClick={() => setOpen(false)}>
            Materials
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
            About
          </NavLink>
           <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Need help?</NavLink>
           <div className=" p-6 border-t">
    <NavLink
      to="/login"
      onClick={() => setOpen(false)}
      className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition"
    >
      <img
        src={account}
        alt="Account"
        className="w-9 h-9 rounded-full"
      />
      <span className="font-medium">MyAccount</span>
    </NavLink>
  </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
