import React, { useState } from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Pen, Mail, Contact } from "lucide-react";
import { Badge } from "../ui/badge";
import AppliedJob from "./AppliedJob";
import EditProfileModal from "./EditProfileModal.jsx";
import { useSelector } from "react-redux";

// const skills = [
//   "React",
//   "JavaScript",
//   "HTML",
//   "CSS",
//   "Python",
//   "Node.js",
//   "MongoDB",
//   "MySQL",
//   "Redux",
//   "Tailwind CSS",
//   "Docker",
//   "Kubernetes",
// ];

const Profile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  if (!user) {
    return <div className="text-center mt-10">Loading...</div>;
  }
  console.log(user);
  const isResume = user?.profile?.resume ? true : false;

  return (
    <div>
      <Navbar />

      {/* Main Wrapper */}
      <div className="max-w-4xl mx-auto my-6 space-y-6">
        {/* ================= PROFILE CARD ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
          {/* Profile Section */}
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <Avatar className="h-24 w-24">
                <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>

              <div>
                <h2 className="font-semibold text-xl">{user?.fullname}</h2>
                <p>{user?.profile?.bio}</p>
              </div>
            </div>

            <Button
              onClick={() => setOpen(true)}
              className="text-right"
              variant="outline"
            >
              <Pen size={16} />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail size={18} />
              <span className="">
                <a href={`mailto:${user.email}`}>{user?.email}</a>
              </span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Contact size={18} />
              <span className=""></span>
              <a href={`tel:${user?.phoneNumber}`}>{user?.phoneNumber}</a>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user?.profile?.skills.length !== 0 ? (
                user?.profile?.skills.map((item, index) => (
                  <Badge key={index} className="whitespace-nowrap">
                    {item}
                  </Badge>
                ))
              ) : (
                <span>NA</span>
              )}
            </div>
          </div>

          {/* Resume */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Resume</h3>
            {isResume ? (
              <a
                target="_blank"
                href={user?.profile?.resume}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Download
              </a>
            ) : (
              <span>No Resume found</span>
            )}
          </div>
        </div>

        {/* ================= APPLIED JOBS SECTION ================= */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md">
          <h2 className="text-lg font-bold mb-6">Applied Jobs</h2>
          <AppliedJob />
        </div>
        {/* Edit Profile Modal */}
        <EditProfileModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Profile;
