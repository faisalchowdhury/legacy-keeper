import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const sections = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "description", label: "2. Service Description" },
  { id: "eligibility", label: "3. Eligibility" },
  { id: "user-responsibilities", label: "4. Your Responsibilities" },
  { id: "prohibited", label: "5. Prohibited Uses" },
  { id: "intellectual-property", label: "6. Intellectual Property" },
  { id: "disclaimers", label: "7. Disclaimers" },
  { id: "limitation", label: "8. Limitation of Liability" },
  { id: "indemnification", label: "9. Indemnification" },
  { id: "termination", label: "10. Termination" },
  { id: "changes", label: "11. Changes to Terms" },
  { id: "governing-law", label: "12. Governing Law" },
  { id: "contact", label: "13. Contact Us" },
];

const Terms: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("acceptance");

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
    <div className="min-h-screen bg-white text-[#1e2332]">
      {/* Navigation */}
      <Header />

      <div className="pt-30">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent mb-6">
                Legal Agreement
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                Terms & <span className="gradient-text">Conditions</span>
              </h1>
              <p className="text-lg text-[#6b7280] max-w-3xl mx-auto mb-4">
                Please read these terms carefully before using Legacy Keeper. By
                using our app, you agree to be bound by these terms.
              </p>
              <p className="text-sm text-[#9ca3af]">
                Last Updated: January 1, 2024
              </p>
            </div>

            {/* Key Terms Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="section-card text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-2">
                  Device-Only Storage
                </h3>
                <p className="text-sm text-[#6b7280]">
                  You are responsible for backing up your device and data.
                </p>
              </div>
              <div className="section-card text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold mb-2">No Legal Advice</h3>
                <p className="text-sm text-[#6b7280]">
                  Legacy Keeper does not provide legal or financial advice.
                </p>
              </div>
              <div className="section-card text-center">
                <div className="text-4xl mb-4">18+</div>
                <h3 className="text-xl font-semibold mb-2">Age Requirement</h3>
                <p className="text-sm text-[#6b7280]">
                  You must be 18 or older to use Legacy Keeper.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Table of Contents */}
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
                  {/* Acceptance of Terms */}
                  <div id="acceptance" className="terms-section">
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                      By downloading, installing, or using Legacy Keeper ("the
                      App", "the Service"), you agree to be bound by these Terms
                      and Conditions ("Terms"). If you do not agree to these
                      Terms, do not use the App.
                    </p>
                    <p>
                      These Terms constitute a legally binding agreement between
                      you ("User", "you", "your") and Legacy Keeper ("we", "us",
                      "our").
                    </p>
                    <div className="highlight-box">
                      <p>
                        <strong>Important:</strong> By clicking "Accept" or
                        using the App, you acknowledge that you have read,
                        understood, and agree to be bound by these Terms.
                      </p>
                    </div>
                  </div>

                  {/* Service Description */}
                  <div id="description" className="terms-section">
                    <h2>2. Description of Service</h2>
                    <p>
                      Legacy Keeper is a mobile application that helps users:
                    </p>
                    <ul>
                      <li>Create and store digital wills and testaments</li>
                      <li>Document assets, properties, and investments</li>
                      <li>Record funeral wishes and preferences</li>
                      <li>Designate executors and beneficiaries</li>
                      <li>Store important documents and information</li>
                    </ul>

                    <h3>2.1 Local Storage Model</h3>
                    <div className="warning-box">
                      <p>
                        <strong>Critical Information:</strong> All data is
                        stored exclusively on your device. We do not store,
                        backup, or have access to your data. If you lose your
                        device or uninstall the App, your data cannot be
                        recovered by Legacy Keeper.
                      </p>
                    </div>

                    <h3>2.2 Not Legal or Financial Advice</h3>
                    <p>
                      Legacy Keeper is a tool for organizing information. It
                      does not:
                    </p>
                    <ul>
                      <li>
                        Provide legal advice or create legally binding documents
                      </li>
                      <li>Replace the need for professional legal counsel</li>
                      <li>
                        Guarantee legal validity of wills created using the App
                      </li>
                      <li>Provide financial, tax, or estate planning advice</li>
                    </ul>
                    <div className="highlight-box">
                      <p>
                        <strong>Professional Advice Required:</strong> You
                        should consult with qualified legal and financial
                        professionals before making estate planning decisions.
                      </p>
                    </div>
                  </div>

                  {/* Eligibility */}
                  <div id="eligibility" className="terms-section">
                    <h2>3. Eligibility and Age Requirements</h2>

                    <h3>3.1 Age Requirement</h3>
                    <p>
                      You must be at least 18 years old to use Legacy Keeper. By
                      using the App, you represent and warrant that you are 18
                      years of age or older.
                    </p>

                    <h3>3.2 Legal Capacity</h3>
                    <p>
                      You must have the legal capacity to enter into a binding
                      agreement. If you are using the App on behalf of an
                      organization, you represent that you have the authority to
                      bind that organization to these Terms.
                    </p>
                  </div>

                  {/* User Responsibilities */}
                  <div id="user-responsibilities" className="terms-section">
                    <h2>4. Your Responsibilities</h2>

                    <h3>4.1 Data Accuracy</h3>
                    <p>You are solely responsible for:</p>
                    <ul>
                      <li>
                        The accuracy and completeness of information you enter
                      </li>
                      <li>Keeping your information up to date</li>
                      <li>Verifying all data before relying on it</li>
                      <li>
                        Ensuring legal compliance of your will and estate plans
                      </li>
                    </ul>

                    <h3>4.2 Device Security</h3>
                    <p>You are responsible for:</p>
                    <ul>
                      <li>Maintaining the security of your device</li>
                      <li>
                        Using strong passwords and biometric authentication
                      </li>
                      <li>Protecting your device from unauthorized access</li>
                      <li>Keeping your device's operating system updated</li>
                    </ul>

                    <h3>4.3 Data Backup</h3>
                    <div className="warning-box">
                      <p>
                        <strong>Your Responsibility:</strong> You must back up
                        your device regularly. Legacy Keeper does not provide
                        cloud backup services. Lost data cannot be recovered.
                      </p>
                    </div>

                    <h3>4.4 Legal Compliance</h3>
                    <p>You must:</p>
                    <ul>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>
                        Ensure your will meets legal requirements in your
                        jurisdiction
                      </li>
                      <li>
                        Obtain professional legal advice for your estate
                        planning
                      </li>
                      <li>
                        Follow proper legal procedures for will execution and
                        witnessing
                      </li>
                    </ul>
                  </div>

                  {/* Prohibited Uses */}
                  <div id="prohibited" className="terms-section">
                    <h2>5. Prohibited Uses</h2>
                    <p>You may NOT use Legacy Keeper to:</p>
                    <ul>
                      <li>Violate any laws or regulations</li>
                      <li>Infringe on intellectual property rights</li>
                      <li>Store illegal content or information</li>
                      <li>Attempt to reverse engineer or decompile the App</li>
                      <li>
                        Interfere with the App's functionality or security
                      </li>
                      <li>Use the App for any unlawful purpose</li>
                      <li>
                        Share your account or device access with unauthorized
                        persons
                      </li>
                    </ul>
                  </div>

                  {/* Intellectual Property */}
                  <div id="intellectual-property" className="terms-section">
                    <h2>6. Intellectual Property Rights</h2>

                    <h3>6.1 Our Intellectual Property</h3>
                    <p>
                      Legacy Keeper, including all software, designs, graphics,
                      text, and other content, is owned by us and protected by
                      copyright, trademark, and other intellectual property
                      laws.
                    </p>

                    <h3>6.2 Your Data</h3>
                    <p>
                      You retain all rights to the content and data you create
                      and store in Legacy Keeper. We do not claim ownership of
                      your data.
                    </p>

                    <h3>6.3 License to Use</h3>
                    <p>
                      We grant you a limited, non-exclusive, non-transferable
                      license to use Legacy Keeper for personal, non-commercial
                      purposes in accordance with these Terms.
                    </p>
                  </div>

                  {/* Disclaimers */}
                  <div id="disclaimers" className="terms-section">
                    <h2>7. Disclaimers</h2>

                    <h3>7.1 "AS IS" Service</h3>
                    <div className="warning-box">
                      <p>
                        <strong>Important Disclaimer:</strong> Legacy Keeper is
                        provided "AS IS" and "AS AVAILABLE" without warranties
                        of any kind, either express or implied.
                      </p>
                    </div>

                    <h3>7.2 No Warranty</h3>
                    <p>We do NOT warrant that:</p>
                    <ul>
                      <li>The App will be error-free or uninterrupted</li>
                      <li>Defects will be corrected</li>
                      <li>
                        The App is free from viruses or harmful components
                      </li>
                      <li>
                        Your data will always be accessible or recoverable
                      </li>
                      <li>The App will meet your specific requirements</li>
                    </ul>

                    <h3>7.3 No Legal Validity Guarantee</h3>
                    <p>We do NOT guarantee that:</p>
                    <ul>
                      <li>Wills created using the App will be legally valid</li>
                      <li>Documents will be enforceable in court</li>
                      <li>The App complies with laws in your jurisdiction</li>
                      <li>
                        Information provided is legally accurate or complete
                      </li>
                    </ul>

                    <h3>7.4 Third-Party Services</h3>
                    <p>
                      We are not responsible for any third-party services,
                      links, or content that may be accessible through the App.
                    </p>
                  </div>

                  {/* Limitation of Liability */}
                  <div id="limitation" className="terms-section">
                    <h2>8. Limitation of Liability</h2>

                    <div className="warning-box">
                      <p>
                        <strong>Important Legal Notice:</strong> To the maximum
                        extent permitted by law, Legacy Keeper and its
                        affiliates shall not be liable for any damages arising
                        from your use of the App.
                      </p>
                    </div>

                    <h3>8.1 No Liability For</h3>
                    <p>We are NOT liable for:</p>
                    <ul>
                      <li>
                        Loss of data due to device loss, theft, or malfunction
                      </li>
                      <li>Inability to access your data</li>
                      <li>
                        Legal invalidity of documents created using the App
                      </li>
                      <li>Decisions made based on information in the App</li>
                      <li>
                        Financial losses resulting from estate planning
                        decisions
                      </li>
                      <li>Disputes among beneficiaries or executors</li>
                      <li>Errors or omissions in content provided</li>
                    </ul>

                    <h3>8.2 Maximum Liability</h3>
                    <p>
                      In no event shall our total liability to you for all
                      damages exceed the amount you paid to use Legacy Keeper
                      (if any) in the 12 months preceding the claim.
                    </p>
                  </div>

                  {/* Indemnification */}
                  <div id="indemnification" className="terms-section">
                    <h2>9. Indemnification</h2>
                    <p>
                      You agree to indemnify, defend, and hold harmless Legacy
                      Keeper and its officers, directors, employees, and agents
                      from any claims, liabilities, damages, losses, or expenses
                      arising from:
                    </p>
                    <ul>
                      <li>Your use of the App</li>
                      <li>Your violation of these Terms</li>
                      <li>Your violation of any laws or regulations</li>
                      <li>Your violation of any third-party rights</li>
                      <li>Content you create or store in the App</li>
                    </ul>
                  </div>

                  {/* Termination */}
                  <div id="termination" className="terms-section">
                    <h2>10. Termination</h2>

                    <h3>10.1 Your Right to Terminate</h3>
                    <p>
                      You may stop using Legacy Keeper at any time by
                      uninstalling the App from your device.
                    </p>

                    <h3>10.2 Our Right to Terminate</h3>
                    <p>
                      We may suspend or terminate your access to Legacy Keeper
                      if you violate these Terms or for any other reason, with
                      or without notice.
                    </p>

                    <h3>10.3 Effect of Termination</h3>
                    <p>Upon termination:</p>
                    <ul>
                      <li>Your license to use the App will end</li>
                      <li>You must cease all use of the App</li>
                      <li>
                        Provisions that should survive termination will remain
                        in effect
                      </li>
                    </ul>
                  </div>

                  {/* Changes to Terms */}
                  <div id="changes" className="terms-section">
                    <h2>11. Changes to These Terms</h2>

                    <h3>11.1 Right to Modify</h3>
                    <p>
                      We reserve the right to modify these Terms at any time. We
                      will notify you of material changes through:
                    </p>
                    <ul>
                      <li>In-app notifications</li>
                      <li>
                        Updates to this page with a new "Last Updated" date
                      </li>
                      <li>Email notification (if provided)</li>
                    </ul>

                    <h3>11.2 Your Acceptance</h3>
                    <p>
                      Continued use of Legacy Keeper after changes to these
                      Terms constitutes your acceptance of the modified Terms.
                      If you do not agree to the changes, you must stop using
                      the App.
                    </p>
                  </div>

                  {/* Governing Law */}
                  <div id="governing-law" className="terms-section">
                    <h2>12. Governing Law and Dispute Resolution</h2>

                    <h3>12.1 Governing Law</h3>
                    <p>
                      These Terms shall be governed by and construed in
                      accordance with the laws of the State of California,
                      United States, without regard to its conflict of law
                      provisions.
                    </p>

                    <h3>12.2 Dispute Resolution</h3>
                    <p>
                      Any disputes arising from these Terms or your use of
                      Legacy Keeper shall be resolved through:
                    </p>
                    <ul>
                      <li>Good faith negotiations between the parties</li>
                      <li>Binding arbitration if negotiations fail</li>
                      <li>
                        Courts in San Francisco, California for any legal
                        actions
                      </li>
                    </ul>

                    <h3>12.3 Class Action Waiver</h3>
                    <p>
                      You agree to resolve disputes individually and waive any
                      right to participate in class action lawsuits or
                      class-wide arbitration.
                    </p>
                  </div>

                  {/* Contact */}
                  <div id="contact" className="terms-section">
                    <h2>13. Contact Us</h2>
                    <p>
                      If you have questions about these Terms and Conditions,
                      please contact us:
                    </p>
                    <div className="section-card mt-6 mb-6">
                      <h3 className="text-lg font-semibold mb-4 text-[#00d4ff]">
                        Contact Information
                      </h3>
                      <p>
                        <strong>Email:</strong> legal@legacykeeper.com
                      </p>
                      <p>
                        <strong>Support:</strong> support@legacykeeper.com
                      </p>
                      <p>
                        <strong>Address:</strong> 123 Legacy Street, San
                        Francisco, CA 94102
                      </p>
                    </div>
                  </div>

                  {/* Additional Provisions */}
                  <div className="terms-section">
                    <h2>Additional Provisions</h2>

                    <h3>Severability</h3>
                    <p>
                      If any provision of these Terms is found to be
                      unenforceable, the remaining provisions will remain in
                      full force and effect.
                    </p>

                    <h3>Entire Agreement</h3>
                    <p>
                      These Terms, together with our Privacy Policy, constitute
                      the entire agreement between you and Legacy Keeper
                      regarding use of the App.
                    </p>

                    <h3>No Waiver</h3>
                    <p>
                      Our failure to enforce any right or provision of these
                      Terms will not be considered a waiver of those rights.
                    </p>

                    <h3>Assignment</h3>
                    <p>
                      You may not assign or transfer these Terms without our
                      written consent. We may assign these Terms without
                      restriction.
                    </p>
                  </div>

                  {/* Final Notice */}
                  <div className="highlight-box">
                    <p className="text-lg">
                      <strong>
                        By using Legacy Keeper, you acknowledge that you have
                        read, understood, and agree to be bound by these Terms
                        and Conditions.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Terms;
