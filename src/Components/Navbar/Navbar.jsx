import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
  return (
    <nav className="bg-teal-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="https://i.ibb.co/dPmrs62/Screenshot-5.png"
            alt="Logo"
            className="h-16 w-16"
          />
          <h1 className="text-white text-lg font-semibold">
            Green-Life Hospital
          </h1>
        </div>
        <ul className="flex space-x-6">
          <li className="relative group">
            <Link to="/" className="text-white hover:text-blue-200">
              Home
            </Link>
          </li>
          <li className="relative group">
            <Link to="/services" className="text-white hover:text-blue-200">
              Services
            </Link>
          </li>
          <li className="relative group">
            <Link to="/doctors" className="text-white hover:text-blue-200">
              Doctors
            </Link>
          </li>
          <li className="relative group">
            <Link to="/nurses" className="text-white hover:text-blue-200">
              Nurses
            </Link>
          </li>
          <li className="relative group">
            <Link to="/appointment" className="text-white hover:text-blue-200">
              Appointment
            </Link>
          </li>
          <li className="relative group">
            <Link to="/others" className="text-white hover:text-blue-200">
              Others
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="bg-white text-red-500 hover:bg-blue-700 text-red font-semibold py-2 px-4 rounded-full"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-white text-red-500 hover:bg-blue-700 text-red font-semibold py-2 px-4 rounded-full"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
