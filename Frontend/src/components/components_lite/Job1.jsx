import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Navigate, useNavigate } from "react-router-dom";

const Job1 = () => {
  const navigate = useNavigate();
  const jobId = "dfghj";
  return (
    <div
      className="
    p-5 rounded-md bg-white border border-gray-200
    shadow-md
    cursor-pointer
    transition-all duration-300 ease-in-out
    hover:shadow-2xl hover:shadow-blue-200 hover:-translate-y-2 hover:scale-[1.02]
  "
    >
      {" "}
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">3 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark className="w-4 h-4" />
        </Button>
      </div>
      {/* Company Info */}
      <div className="flex items-center my-4 gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://yt3.googleusercontent.com/RvaWeIBzR10XOJtWuZGm1gnZ4Zmn3P9iQy9EMs7-2p5wohQH0d-u4vP90QVINN3wTZR0F5Ll1g=s900-c-k-c0x00ffffff-no-rj" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-lg font-medium">Company Name</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>
      {/* Job Info */}
      <div>
        <h2 className="font-bold text-lg mb-2">Job Title</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem eum
          tempore animi culpa necessitatibus.
        </p>
      </div>
      {/* Badges */}
      <div className="flex flex-wrap gap-2 items-center mt-4">
        <Badge className="text-blue-600 font-bold" variant="ghost">
          10 Position
        </Badge>
        <Badge className="text-[#FA4F09] font-bold" variant="ghost">
          20 LPA
        </Badge>
        <Badge className="text-[#6B3AC2] font-bold" variant="ghost">
          Remote
        </Badge>
        <Badge className="text-black font-bold" variant="ghost">
          Full Time
        </Badge>
      </div>
      <div className="flex gap-3 mt-4">
        <Button
          onClick={() => {
            navigate(`/description/${jobId}`);
          }}
          variant="outline"
          className="font-bold rounded-sm"
        >
          Details
        </Button>

        <Button className="bg-[#6B3AC2] text-white font-bold rounded-sm hover:bg-[#5a2fb5]">
          Save For Later
        </Button>
      </div>
    </div>
  );
};

export default Job1;
