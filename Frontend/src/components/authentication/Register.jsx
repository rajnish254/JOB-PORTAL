import React from "react";
import Navbar from "../components_lite/Navbar";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Link } from "react-router-dom";
import Login from "../authentication/Login";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="flex item-center justify-center max-w-7xl mx-auto">
        <form className="w-1/2 border border-gray-300 rounded-md p-6 my-10 bg-white shadow-sm">
          <h1 className="font-bold text-2xl mb-6 text-center text-blue-600">
            Register
          </h1>

          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role */}
          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="role" value="Student" />
              Student
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="role" value="Recruiter" />
              Recruiter
            </label>
          </div>

          {/* Profile Photo */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white py-2 rounded-md"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-sm text-gray-500 mt-3 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
