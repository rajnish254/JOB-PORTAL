import React from "react";
import { Link } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsofService from "./TermsofService";

const Footer = () => (
  <div>
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#f1f1f1",
      }}
    >
      <p>© {new Date().getFullYear()} Rk Pvt Ltd. All rights reserved.</p>

      <p>
        Powered by{" "}
        <a
          href="https://github.com/rajnish254"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rajnish Kumar
        </a>
      </p>

      <p>
        <Link to="/privacy-policy">Privacy Policy</Link> |{" "}
        <Link to="/TermsofService">Terms of Service</Link>
      </p>
    </div>
  </div>
);

export default Footer;
