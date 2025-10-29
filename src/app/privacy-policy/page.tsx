// src/app/privacy-policy/page.tsx
import React from "react";
import "../globals.css";

export const metadata = {
  title: "Privacy Policy | DressingSchool",
  description: "Read the privacy policy of DressingSchool — your trusted fashion and skincare guide for men.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

      <p><strong>Effective Date:</strong> October 29, 2025</p>
      <p><strong>Last Updated:</strong> October 29, 2025</p>

      <p className="mt-4">
        Welcome to <strong>DressingSchool</strong> (“we,” “our,” or “us”). This Privacy Policy explains
        how we collect, use, and protect your personal information when you use our website
        (<a href="https://www.dressingschool.com" className="text-blue-600 underline">www.dressingschool.com</a>)
        and mobile application (<strong>DressingSchool</strong> app).
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Information We Collect</h2>
      <p>We collect only the information necessary to provide and improve our services.</p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li><strong>Email Address</strong> – when you contact us or make a purchase.</li>
        <li><strong>Phone Number</strong> – for payment confirmation and customer verification.</li>
        <li><strong>Payment Information</strong> – processed securely through Razorpay when purchasing our paid eBook. We do not store full card details.</li>
      </ul>
      <p className="mt-3">
        We also use <strong>Firebase</strong> for analytics to understand app performance and improve user experience.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">2. How We Use Your Information</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>To process your eBook purchase through Razorpay.</li>
        <li>To provide access to your purchased content inside the app.</li>
        <li>To improve app and website performance through analytics.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Sharing Your Information</h2>
      <p>
        We do not sell, rent, or trade your data. We share limited information only with:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Razorpay</strong> – to process secure payments.</li>
        <li><strong>Firebase</strong> – to analyze app performance.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Data Security</h2>
      <p>
        All transactions are SSL-encrypted and processed securely through Razorpay. We implement standard
        measures to protect your personal information from unauthorized access or misuse.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">5. Data Retention</h2>
      <p>
        We retain only necessary information for purchase records and compliance. You can request deletion
        of your data anytime by contacting us.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">6. Cookies</h2>
      <p>
        Our website may use cookies for basic analytics. You can disable cookies in your browser settings, but
        some features may not function properly.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Children’s Privacy</h2>
      <p>
        Our app and website are not designed for children under 13. We do not knowingly collect data from minors.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. Third-Party Links</h2>
      <p>
        We may include external links (e.g., product or fashion references). We are not responsible for the privacy
        practices of those third-party sites.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy periodically. Updates will be reflected on this page with an updated
        effective date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">10. Contact Us</h2>
      <p>
        📧 <strong>Email:</strong> dressingschool@gmail.com <br />
        📍 <strong>Location:</strong> Mumbai, India <br />
        🌐 <strong>Website:</strong>{" "}
        <a href="https://www.dressingschool.com" className="text-blue-600 underline">
          www.dressingschool.com
        </a>
      </p>

      <p className="mt-10 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} DressingSchool. All rights reserved.
      </p>
    </main>
  );
}
