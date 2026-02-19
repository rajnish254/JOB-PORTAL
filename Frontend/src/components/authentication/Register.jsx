import React from "react";
import Navbar from "../components_lite/Navbar";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link, useNavigate } from "react-router-dom";
import Login from "../authentication/Login";
import axios from "axios";
import { USER_API_ENDPOINT } from "../../utils/data";
import { toast } from "sonner";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../redux/authSlice";
import { Button } from "../ui/button.jsx";
import { Loader2 } from "lucide-react";

const Register = () => {
  const [input, setInput] = React.useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
    file: "",
    phoneNumber: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);

  const changeEventHandler = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const changeFileHandler = (e) => {
    setInput((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("role", input.role);
    formData.append("phoneNumber", input.phoneNumber);
    if (input.file) formData.append("file", input.file);

    try {
      dispatch(setLoading(true)); // Set loading state to true when starting the login process
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, // Include cookies in the request
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to register. Please try again.";
      toast.error(errorMessage);
    } finally {
      dispatch(setLoading(false)); // Set loading state to false after the login process is complete
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex item-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-300 rounded-md p-6 my-10 bg-white shadow-sm"
        >
          <h1 className="font-bold text-2xl mb-6 text-center text-blue-600">
            Register
          </h1>

          {/* Name */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="********"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              type="tel"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Role */}
          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
              />
              Student
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="recruiter"
                checked={input.role === "recruiter"}
                onChange={changeEventHandler}
              />
              Recruiter
            </label>
          </div>

          {/* Profile Photo */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={changeFileHandler}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-green-800 text-white py-2 rounded-md"
          >
            Register
          </button>

          {/* Login Link */}
          <p className="text-sm text-gray-500 mt-3 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:underline font-bold"
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
