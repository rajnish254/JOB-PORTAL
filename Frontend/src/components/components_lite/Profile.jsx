import React from "react";
import Navbar from "./Navbar";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Pen, Mail, Contact } from "lucide-react";
import { Badge } from "../ui/badge";
import AppliedJob from "./AppliedJob";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Python",
  "Node.js",
  "MongoDB",
  "MySQL",
  "Redux",
  "Tailwind CSS",
  "Docker",
  "Kubernetes",
];

const Profile = () => {
  const isResume = true;

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
                <AvatarImage
                  src="https://us.123rf.com/450wm/lukpedclub/lukpedclub2203/lukpedclub220300191/183186889-developer-icon-decentralized-finance-related-vector-illustration.jpg?ver=6"
                  alt="profile"
                />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>

              <div>
                <h2 className="font-semibold text-xl">Full Name</h2>
                <p className="text-gray-600">Lorem ipsum dolor sit amet</p>
              </div>
            </div>

            <Button variant="outline">
              <Pen size={16} />
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <Mail size={18} />
              <span>rajnish@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Contact size={18} />
              <span>+919876542360</span>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-6">
            <h3 className="font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.length !== 0 ? (
                skills.map((item, index) => (
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
              <Button
                variant="link"
                className="p-0 text-blue-600"
                href="http://resume.com"
              >
                Download
              </Button>
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
      </div>
    </div>
  );
};

export default Profile;
