import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms & Conditions
      </h1>

      <p className="mb-4 text-gray-600">
        Last Updated: {new Date().toLocaleDateString()}
      </p>

      <p className="mb-6">
        Welcome to JobPortal. By accessing and using our website, you agree to
        comply with and be bound by the following terms and conditions.
      </p>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By creating an account or using our services, you agree to these Terms
        and Conditions. If you do not agree, please do not use our website.
      </p>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">2. User Accounts</h2>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your account
        information. You agree to provide accurate and complete information
        during registration.
      </p>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">3. Job Applications</h2>
      <p className="mb-4">
        JobPortal acts as a platform connecting job seekers and employers. We do
        not guarantee employment or job offers.
      </p>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Prohibited Activities
      </h2>
      <ul className="list-disc pl-6 mb-4">
        <li>Posting false or misleading information</li>
        <li>Uploading harmful or illegal content</li>
        <li>Attempting to hack or disrupt the platform</li>
        <li>Impersonating another individual or company</li>
      </ul>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Intellectual Property
      </h2>
      <p className="mb-4">
        All content on this website, including logos, text, and graphics, is the
        property of JobPortal and may not be used without permission.
      </p>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Limitation of Liability
      </h2>
      <p className="mb-4">
        JobPortal is not responsible for any direct or indirect damages
        resulting from the use of our platform.
      </p>

      {/* Section 7 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">7. Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate accounts that violate these
        terms.
      </p>

      {/* Section 8 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms & Conditions at any time. Continued use of the
        platform means you accept the updated terms.
      </p>

      {/* Section 9 */}
      <h2 className="text-xl font-semibold mt-6 mb-2">
        9. Contact Information
      </h2>
      <p className="mb-4">
        If you have any questions regarding these Terms, please contact us at:
      </p>
      <p className="font-medium">support@jobportal.com</p>
    </div>
  );
};

export default TermsOfService;
