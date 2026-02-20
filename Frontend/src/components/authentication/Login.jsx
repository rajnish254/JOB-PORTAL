import React, { useState } from "react";
import Navbar from "../components_lite/Navbar";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import axios from "axios";
import { USER_API_ENDPOINT } from "../../utils/data.js";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setLoading, setUser } from "../../redux/authSlice.js";
import { Button } from "../ui/button.jsx";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
    file: "",
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

    try {
      dispatch(setLoading(true)); // Set loading state to true when starting the login process
      const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // Include cookies in the request
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/"); // Navigate to home page after successful login
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "Failed to login. Please check your credentials and try again.",
      );
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
            Login
          </h1>
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
          {/* Role */}
          <div className="flex items-center gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                value="student"
                checked={input.role === "student"}
                onChange={changeEventHandler}
                className="cursor-pointer"
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
                className="cursor-pointer"
              />
              Recruiter
            </label>
          </div>
          {loading ? (
            <Button>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading...
            </Button>
          ) : null}
          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black hover:bg-blue-800 text-white py-2 rounded-md"
          >
            Login
          </button>

          {/* No account then register */}
          <p className="text-sm text-gray-500 mt-3 text-center font-bold">
            Create new account ?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:underline font-bold"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
