import React from "react";
import "./Terms.css";
import { Link, useNavigate } from "react-router-dom";

const Terms = () => {
  const a = useNavigate();
  const backtohome = () => {
    a("/");
  };
  return (
    <>
      <button onClick={backtohome} className="backbutton">
        &#8592; Back to home
      </button>
      <button onClick={backtohome} className="backbutton">
        &#8592; Back to home
      </button>
      <div className="terms-section">
        <h1>Terms and Conditions</h1>

        <p>
          Welcome to <strong>RK PHARMACY</strong> ("we," "us," or "our"). By
          accessing or using our website, you agree to comply with these Terms
          and Conditions. Please read them carefully.
        </p>

        <h2>1. Eligibility</h2>
        <ul>
          <li>
            You must be at least <strong>18 years old</strong> (or the legal age
            in your jurisdiction) to purchase prescription medications.
          </li>
          <li>
            By placing an order, you confirm that all provided information
            (including medical details) is accurate.
          </li>
        </ul>

        <h2>2. Prescription Requirements</h2>
        <ul>
          <li>
            <strong>Prescription drugs</strong> require a valid prescription
            from a licensed healthcare provider.
          </li>
          <li>
            We reserve the right to <strong>verify prescriptions</strong> and
            cancel orders if documentation is insufficient or invalid.
          </li>
        </ul>

        <h2>3. Order Acceptance & Pricing</h2>
        <ul>
          <li>
            All orders are subject to <strong>availability</strong> and
            confirmation.
          </li>
          <li>
            We may modify product{" "}
            <strong>prices, descriptions, or availability</strong> without prior
            notice.
          </li>
        </ul>

        <h2>4. Shipping & Delivery</h2>
        <ul>
          <li>
            Delivery times are <strong>estimates only</strong> and depend on
            location and pharmacy regulations.
          </li>
          <li>
            <strong>Signature may be required</strong> for certain medications.
          </li>
        </ul>

        <h2>5. Returns & Refunds</h2>
        <ul>
          <li>
            Due to health regulations,{" "}
            <strong>
              prescription medications cannot be returned or refunded
            </strong>{" "}
            unless damaged or incorrect.
          </li>
          <li>
            Over-the-counter (OTC) products may be eligible for returns within{" "}
            <strong>7 days</strong> with proof of purchase.
          </li>
        </ul>

        <h2>6. Privacy & Security</h2>
        <ul>
          <li>
            Your personal and medical data is protected under{" "}
            <strong>HIPAA</strong> and our <strong>Privacy Policy</strong>.
          </li>
          <li>
            We use <strong>SSL encryption</strong> to secure transactions.
          </li>
        </ul>

        <h2>7. Prohibited Use</h2>
        <ul>
          <li>
            You may <strong>not</strong> resell, misuse, or abuse medications
            purchased from our platform.
          </li>
          <li>
            <strong>Fraudulent prescriptions</strong> will be reported to
            authorities.
          </li>
        </ul>

        <h2>8. Limitation of Liability</h2>
        <ul>
          <li>
            We are not liable for <strong>misuse of medications</strong> or
            delays caused by third-party shipping providers.
          </li>
        </ul>

        <h2>9. Governing Law</h2>
        <ul>
          <li>
            These Terms are governed by the laws of{" "}
            <strong>[Your State/Country]</strong>.
          </li>
        </ul>

        <h2>10. Changes to Terms</h2>
        <ul>
          <li>
            We may update these Terms at any time. Continued use constitutes
            acceptance of changes.
          </li>
        </ul>

        <div class="contact-info">
          <h2>Contact Us</h2>
          <p>For questions, contact:</p>
          <p>
            📧 <strong>Email:</strong> support@rkpharmacy.com
          </p>
          <p>
            📞 <strong>Phone:</strong> [+91 1234567890]
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;
