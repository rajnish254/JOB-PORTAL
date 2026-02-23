import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { User2 } from "lucide-react";
import { LogOut } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";
import { USER_API_ENDPOINT } from "@/utils/data";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await axios.post(`${USER_API_ENDPOINT}/logout`, {
        withCreentials: true,
      });
      if (response.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success("Logged out successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            <span className="text-[#FA4F09]">Job</span>{" "}
            <span className="text-[#022bf8]">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-6">
            <li>
              <Link to={"/Home"}>Home</Link>
            </li>
            <li>
              <Link to={"/Browse"}>Browse</Link>
            </li>
            <li>
              <Link to={"/Jobs"}>Jobs</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-red-600 hover:bg-red-700">
                  Register
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer h-10 w-10">
                  <AvatarImage
                    src={user?.profile?.profilePhoto}
                    alt="profile"
                  />
                </Avatar>
              </PopoverTrigger>

              <PopoverContent
                align="end"
                className="w-72 bg-white rounded-lg shadow-xl border border-gray-200 p-4"
              >
                {/* User Info */}
                <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={user.profile?.profilePhoto}
                      alt="profile"
                    />
                  </Avatar>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {user?.fullname}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {user?.profile?.bio || "No bio added yet"}
                    </p>
                  </div>
                </div>

                {/* Options */}
                <Link to="/profile">
                  <div className="flex items-center gap-3 p-2 rounded-md cursor-pointer hover:bg-gray-100 transition">
                    <User2 className="w-5 h-5 text-gray-600" />
                    <span className="font-medium text-gray-700">Profile</span>
                  </div>
                </Link>
                <div className="flex w-fit items-center gap-2 cursor-pointer">
                  <LogOut></LogOut>
                  <Button onClick={logoutHandler} variant="link">
                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
