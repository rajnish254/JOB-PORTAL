import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4 text-gray-600">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mb-6">
        Welcome to JobPortal. Your privacy is important to us. This Privacy
        Policy explains how we collect, use, and protect your information when
        you use our website.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal information including your name, email address,
        phone number, resume, and job preferences when you register or apply for
        jobs on our platform.
      </p>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. How We Use Your Information
      </h2>
      <p className="mb-4">We use your information to:</p>
      <ul className="list-disc pl-6 mb-4">
        <li>Create and manage your account</li>
        <li>Connect you with recruiters and companies</li>
        <li>Improve our services</li>
        <li>Send important updates and notifications</li>
      </ul>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Sharing of Information
      </h2>
      <p className="mb-4">
        We do not sell your personal information. We may share your profile with
        employers when you apply for jobs or make your profile public.
      </p>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We use appropriate security measures to protect your personal data from
        unauthorized access, disclosure, or alteration.
      </p>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies</h2>
      <p className="mb-4">
        Our website may use cookies to enhance user experience and analyze
        traffic. You can disable cookies in your browser settings.
      </p>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
      <p className="mb-4">
        You have the right to access, update, or delete your personal
        information at any time by contacting us.
      </p>

      {/* Section 7 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us
        at:
      </p>
      <p className="font-medium">support@jobportal.com</p>
    </div>
  );
};

export default PrivacyPolicy;
