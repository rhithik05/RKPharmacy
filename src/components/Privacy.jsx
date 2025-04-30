import React from "react";
import "./Privacy.css";
import { Link, useNavigate } from "react-router-dom";
const Privacy = () => {
  const a = useNavigate();
  const backtohome = () => {
    a("/");
  };
  return (
    <>
      <button onClick={backtohome} className="backbutton">
        &#8592; Back to home
      </button>
      <div className="policy-section">
        <div class="policy-container">
          <h1>Privacy Policy</h1>

          <p>
            RK PHARMACY ("we," "us," or "our") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our pharmacy services.
          </p>

          <div class="highlight">
            <p>
              <strong>Note:</strong> As a healthcare provider, we comply with
              HIPAA and other applicable privacy laws regarding protected health
              information (PHI).
            </p>
          </div>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Name, contact details, date
              of birth, shipping address
            </li>
            <li>
              <strong>Health Information:</strong> Prescriptions, medical
              history (with consent), insurance details
            </li>
            <li>
              <strong>Payment Information:</strong> Credit card details
              (processed securely via PCI-compliant systems)
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device
              information, usage patterns
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>To process and fulfill your pharmacy orders</li>
            <li>To verify prescriptions with healthcare providers</li>
            <li>
              To communicate about your orders and provide customer support
            </li>
            <li>To improve our services and website functionality</li>
            <li>To comply with legal and regulatory requirements</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We may share information with:</p>
          <ul>
            <li>Licensed pharmacists and healthcare providers</li>
            <li>Payment processors and shipping carriers</li>
            <li>Insurance companies for claims processing</li>
            <li>When required by law or to protect vital interests</li>
          </ul>
          <p>
            We <strong>do not</strong> sell your personal or health information
            to third parties.
          </p>

          <h2>4. Data Security</h2>
          <ul>
            <li>SSL/TLS encryption for all data transmissions</li>
            <li>Secure storage compliant with HIPAA standards</li>
            <li>Regular security audits and access controls</li>
            <li>Employee training on data privacy</li>
          </ul>

          <h2>5. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access and receive a copy of your health records</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of data (subject to legal requirements)</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>6. Cookies & Tracking</h2>
          <p>
            We use essential cookies for website functionality and analytics
            cookies to improve our services. You can manage preferences in your
            browser settings.
          </p>

          <h2>7. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under 18. We do not
            knowingly collect data from children without parental consent.
          </p>

          <h2>8. Policy Updates</h2>
          <p>
            We may update this policy periodically. Material changes will be
            notified via email or website notice.
          </p>

          <div class="contact-box">
            <h2>Contact Us</h2>
            <p>For privacy-related inquiries or to exercise your rights:</p>
            <p>
              📧 <strong>Email:</strong> privacy@rkpharmacy.com
            </p>
            <p>
              📞 <strong>Phone:</strong> [+91 1234567890]
            </p>
            <p>
              📫 <strong>Mail:</strong> [rhithik2005official@gmail.com]
            </p>
          </div>

          <p>
            <small>
              This policy supplements our{" "}
              <Link to="/termsandconditions">Terms and Conditions</Link>. For
              HIPAA-specific notices, please request our Notice of Privacy
              Practices.
            </small>
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
