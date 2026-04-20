import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "data-storage", label: "2. Data Storage" },
  { id: "information-collect", label: "3. Information We Collect" },
  { id: "how-we-use", label: "4. How We Use Data" },
  { id: "data-sharing", label: "5. Data Sharing" },
  { id: "data-security", label: "6. Data Security" },
  { id: "your-rights", label: "7. Your Rights" },
  { id: "children", label: "8. Children's Privacy" },
  { id: "changes", label: "9. Policy Changes" },
  { id: "contact", label: "10. Contact Us" },
];

const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("introduction");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#1e2332] pt-30">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent mb-6">
              Legal
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-lg text-[#6b7280] max-w-3xl mx-auto mb-4">
              Your privacy is at the core of everything we do. Learn how Legacy
              Keeper protects your most sensitive information.
            </p>
            <p className="text-sm text-[#9ca3af]">
              Last Updated: January 1, 2024
            </p>
          </div>

          {/* Key Privacy Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="section-card text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">100% Local Storage</h3>
              <p className="text-sm text-[#6b7280]">
                All data stays on your device. No cloud uploads ever.
              </p>
            </div>
            <div className="section-card text-center">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-semibold mb-2">No Data Collection</h3>
              <p className="text-sm text-[#6b7280]">
                We don't collect, store, or sell your personal information.
              </p>
            </div>
            <div className="section-card text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Full Control</h3>
              <p className="text-sm text-[#6b7280]">
                You own and control 100% of your data at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sidebar */}
            <div className="lg:col-span-1">
              <div className="table-of-contents">
                <h3 className="text-xl font-bold mb-4 text-[#1e2332]">
                  Contents
                </h3>
                <nav>
                  {sections.map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(id);
                      }}
                      className={`toc-link ${activeSection === id ? "toc-link-active" : ""}`}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="section-card">
                {/* Introduction */}
                <div id="introduction" className="policy-section">
                  <h2>1. Introduction</h2>
                  <p>
                    Welcome to Legacy Keeper. We are committed to protecting
                    your privacy and ensuring the security of your most
                    sensitive personal information. This Privacy Policy explains
                    our approach to data privacy, which is fundamentally
                    different from other estate planning services.
                  </p>
                  <div className="highlight-box">
                    <p>
                      <strong>Our Core Principle:</strong> Legacy Keeper is
                      built on a foundation of privacy-first design. Your data
                      never leaves your device, and we never have access to your
                      will, assets, or personal information.
                    </p>
                  </div>
                  <p>
                    By using Legacy Keeper, you agree to the terms outlined in
                    this Privacy Policy. If you do not agree with our practices,
                    please do not use our application.
                  </p>
                </div>

                {/* Data Storage */}
                <div id="data-storage" className="policy-section">
                  <h2>2. Our Unique Data Storage Model</h2>
                  <p>
                    Legacy Keeper operates on a 100% local storage model. This
                    means:
                  </p>
                  <ul>
                    <li>
                      <strong>No Cloud Storage:</strong> We do not upload,
                      transmit, or store any of your personal data on our
                      servers or any third-party cloud services.
                    </li>
                    <li>
                      <strong>Device-Only Storage:</strong> All information you
                      enter into Legacy Keeper is stored exclusively on your
                      device using encrypted local storage.
                    </li>
                    <li>
                      <strong>No Backups on Our Servers:</strong> We do not
                      create or maintain backups of your data. You are
                      responsible for backing up your device.
                    </li>
                    <li>
                      <strong>No Data Synchronization:</strong> Your data does
                      not sync across devices. Each device maintains its own
                      independent data.
                    </li>
                  </ul>
                  <div className="highlight-box">
                    <p>
                      <strong>What This Means:</strong> If you lose your device
                      or uninstall the app, your data cannot be recovered by
                      Legacy Keeper. We recommend regular device backups.
                    </p>
                  </div>
                </div>

                {/* Information We Collect */}
                <div id="information-collect" className="policy-section">
                  <h2>3. Information We Collect</h2>

                  <h3>3.1 Information Stored Locally on Your Device</h3>
                  <p>
                    The following information is stored only on your device:
                  </p>
                  <ul>
                    <li>
                      Personal information (name, date of birth, contact
                      details)
                    </li>
                    <li>
                      Asset information (properties, bank accounts, investments,
                      digital assets)
                    </li>
                    <li>Will and testament details</li>
                    <li>Executor information</li>
                    <li>Funeral wishes and preferences</li>
                    <li>Beneficiary information</li>
                    <li>Important documents and notes</li>
                  </ul>

                  <h3>3.2 Minimal Technical Data We Collect</h3>
                  <p>
                    To provide core app functionality and comply with app store
                    requirements, we collect minimal technical data:
                  </p>
                  <ul>
                    <li>
                      <strong>Device Type:</strong> iOS or Android (for
                      compatibility purposes)
                    </li>
                    <li>
                      <strong>App Version:</strong> To ensure you have the
                      latest updates
                    </li>
                    <li>
                      <strong>Crash Reports:</strong> Anonymous technical logs
                      if the app crashes (no personal data included)
                    </li>
                    <li>
                      <strong>Anonymous Usage Statistics:</strong> Basic metrics
                      like app opens (no user identification or content
                      tracking)
                    </li>
                  </ul>

                  <h3>3.3 Information We Do NOT Collect</h3>
                  <ul>
                    <li>
                      Email addresses or phone numbers (unless you contact
                      support)
                    </li>
                    <li>Payment information (if the app is free)</li>
                    <li>Location data</li>
                    <li>Contacts or photos from your device</li>
                    <li>Browsing history or app usage patterns</li>
                    <li>
                      Any content of your will, assets, or personal documents
                    </li>
                  </ul>
                </div>

                {/* How We Use Data */}
                <div id="how-we-use" className="policy-section">
                  <h2>4. How We Use Information</h2>

                  <h3>4.1 Local Data (Stored on Your Device)</h3>
                  <p>
                    Data stored locally on your device is used solely for the
                    purpose of providing Legacy Keeper's functionality to you.
                    We never access, view, or use this data.
                  </p>

                  <h3>4.2 Technical Data</h3>
                  <p>The minimal technical data we collect is used only to:</p>
                  <ul>
                    <li>Ensure app compatibility with your device</li>
                    <li>Fix bugs and improve app performance</li>
                    <li>Understand general usage patterns (anonymously)</li>
                    <li>Comply with app store requirements</li>
                  </ul>
                </div>

                {/* Data Sharing */}
                <div id="data-sharing" className="policy-section">
                  <h2>5. Data Sharing and Third Parties</h2>

                  <h3>5.1 We Do Not Share Your Personal Data</h3>
                  <div className="highlight-box">
                    <p>
                      <strong>Zero Data Sharing:</strong> Because we don't have
                      access to your personal data (it's stored only on your
                      device), we cannot and do not share it with anyone.
                    </p>
                  </div>

                  <h3>5.2 Third-Party Services</h3>
                  <p>
                    We use the following third-party services with minimal data
                    exposure:
                  </p>
                  <ul>
                    <li>
                      <strong>Analytics (Optional):</strong> Anonymous app usage
                      statistics (you can opt-out in settings)
                    </li>
                    <li>
                      <strong>Crash Reporting:</strong> Technical crash logs
                      without personal data
                    </li>
                    <li>
                      <strong>App Stores:</strong> Apple App Store and Google
                      Play Store (governed by their privacy policies)
                    </li>
                  </ul>

                  <h3>5.3 Legal Requirements</h3>
                  <p>
                    Since we don't have access to your personal data, we cannot
                    provide it to law enforcement or government agencies, even
                    if legally required to do so.
                  </p>
                </div>

                {/* Data Security */}
                <div id="data-security" className="policy-section">
                  <h2>6. Data Security</h2>

                  <h3>6.1 Device-Level Encryption</h3>
                  <p>
                    All data stored by Legacy Keeper on your device is encrypted
                    using industry-standard encryption protocols provided by iOS
                    and Android operating systems.
                  </p>

                  <h3>6.2 Your Responsibility</h3>
                  <p>
                    Since data is stored on your device, security depends on:
                  </p>
                  <ul>
                    <li>Using a strong device passcode/password</li>
                    <li>
                      Enabling biometric authentication (Face ID, Touch ID,
                      fingerprint)
                    </li>
                    <li>Keeping your device's operating system updated</li>
                    <li>Not jailbreaking or rooting your device</li>
                    <li>
                      Regular device backups (iCloud, Google Drive, or local)
                    </li>
                  </ul>

                  <h3>6.3 No Server-Side Vulnerabilities</h3>
                  <p>
                    Because we don't store your data on servers, there is no
                    risk of server breaches, data leaks, or unauthorized access
                    to our systems affecting your personal information.
                  </p>
                </div>

                {/* Your Rights */}
                <div id="your-rights" className="policy-section">
                  <h2>7. Your Privacy Rights</h2>

                  <h3>7.1 Access to Your Data</h3>
                  <p>
                    You have complete access to all your data at all times
                    through the Legacy Keeper app on your device.
                  </p>

                  <h3>7.2 Data Deletion</h3>
                  <p>You can delete all your data at any time by:</p>
                  <ul>
                    <li>Deleting individual items within the app</li>
                    <li>Using the "Delete All Data" option in app settings</li>
                    <li>Uninstalling the app (which removes all local data)</li>
                  </ul>

                  <h3>7.3 Data Portability</h3>
                  <p>
                    You can export your data from Legacy Keeper at any time
                    using the export function, which creates a secure file you
                    can store or transfer.
                  </p>

                  <h3>7.4 Rights Under GDPR, CCPA, and Other Privacy Laws</h3>
                  <p>
                    While we are not subject to most data privacy regulations
                    (because we don't collect personal data), we respect the
                    principles of:
                  </p>
                  <ul>
                    <li>Right to access your information</li>
                    <li>Right to rectification</li>
                    <li>Right to erasure</li>
                    <li>Right to data portability</li>
                    <li>Right to object to processing</li>
                  </ul>
                </div>

                {/* Children's Privacy */}
                <div id="children" className="policy-section">
                  <h2>8. Children's Privacy</h2>
                  <p>
                    Legacy Keeper is intended for users aged 18 and older. We do
                    not knowingly collect information from children under 18. If
                    we become aware that a child under 18 has provided us with
                    personal information, we will take steps to delete such
                    information.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div id="changes" className="policy-section">
                  <h2>9. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time to
                    reflect changes in our practices, technology, or legal
                    requirements. We will notify you of any material changes
                    through:
                  </p>
                  <ul>
                    <li>In-app notifications</li>
                    <li>
                      Updates to this page (with a new "Last Updated" date)
                    </li>
                    <li>
                      Email (if you've provided contact information for support)
                    </li>
                  </ul>
                  <p>
                    Continued use of Legacy Keeper after changes indicates your
                    acceptance of the updated Privacy Policy.
                  </p>
                </div>

                {/* Contact */}
                <div id="contact" className="policy-section">
                  <h2>10. Contact Us</h2>
                  <p>
                    If you have questions, concerns, or requests regarding this
                    Privacy Policy or our privacy practices, please contact us:
                  </p>
                  <div className="section-card mt-6 mb-6">
                    <h3 className="text-lg font-semibold mb-4 text-[#00d4ff]">
                      Contact Information
                    </h3>
                    <p>
                      <strong>Email:</strong> privacy@legacykeeper.com
                    </p>
                    <p>
                      <strong>Support:</strong> support@legacykeeper.com
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Legacy Street, San
                      Francisco, CA 94102
                    </p>
                  </div>
                  <p>We will respond to your inquiry within 30 days.</p>
                </div>

                {/* Additional Information */}
                <div className="policy-section">
                  <h2>Additional Information</h2>

                  <h3>International Users</h3>
                  <p>
                    Legacy Keeper is available worldwide. Since all data is
                    stored locally on your device, international data transfer
                    regulations do not apply.
                  </p>

                  <h3>California Residents (CCPA)</h3>
                  <p>
                    California residents have additional rights under the
                    California Consumer Privacy Act (CCPA). However, since we do
                    not sell personal information or collect personal data
                    beyond minimal technical information, most CCPA provisions
                    do not apply.
                  </p>

                  <h3>European Users (GDPR)</h3>
                  <p>
                    European users have rights under the General Data Protection
                    Regulation (GDPR). Our local-storage model inherently
                    provides maximum data protection and privacy control.
                  </p>
                </div>

                {/* Conclusion */}
                <div className="highlight-box">
                  <p className="text-lg">
                    <strong>Our Commitment:</strong> Legacy Keeper is built on
                    trust and privacy. We believe your most sensitive
                    information should stay exactly where it belongs—with you,
                    on your device, under your control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
