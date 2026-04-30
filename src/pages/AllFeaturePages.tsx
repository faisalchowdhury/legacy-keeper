// ========================================
// ALL FEATURE PAGES - LIGHT THEME VERSION
// ========================================
import React from "react";
import { Link } from "react-router";
import { FileText, CheckCircle, ArrowRight, Users } from "lucide-react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

// ========================================
// 1. DIGITAL WILL CREATION PAGE
// ========================================
export const DigitalWillPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] rounded-full text-sm font-semibold text-[#00d4ff] mb-6">
                <FileText size={20} />
                Digital Will
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#1e2332]">
                Create Your <span className="gradient-text">Digital Will</span>
              </h1>
              <p className="text-lg text-[#6b7280] mb-8 leading-relaxed">
                Build a comprehensive digital will that clearly outlines your
                wishes for asset distribution, guardianship, and inheritance.
                Easy to create, update, and store securely on your device.
              </p>
              <Link
                to="/#download"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
              >
                Get Started <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-3xl p-8 shadow-lg">
              <FileText size={100} className="text-[#00d4ff] mb-6" />
              <h3 className="text-2xl font-bold text-[#1e2332] mb-4">
                Everything You Need
              </h3>
              <ul className="space-y-3">
                {[
                  "Asset allocation",
                  "Beneficiary designation",
                  "Guardian appointments",
                  "Special bequests",
                  "Executor instructions",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-[#6b7280]"
                  >
                    <CheckCircle size={20} className="text-[#00d4ff]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-[#1e2332] mb-12">
            How It <span className="gradient-text">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Answer Questions",
                desc: "Guided questionnaire helps you document everything",
              },
              {
                step: "02",
                title: "Review & Edit",
                desc: "Update your will anytime as your life changes",
              },
              {
                step: "03",
                title: "Store Securely",
                desc: "Everything stays encrypted on your device",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f5f8ff] border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-bold gradient-text mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#1e2332] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#6b7280]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl bg-white border border-[#e2e8f0] rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-[#1e2332] mb-4">
            Ready to Secure Your Legacy?
          </h2>
          <p className="text-[#6b7280] mb-8">
            Download Legacy Keeper and start creating your digital will today.
          </p>
          <Link
            to="/#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
          >
            Download Now <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ========================================
// 2. ASSET MANAGEMENT PAGE
// ========================================
export const AssetManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-[#1e2332] mb-6">
            Comprehensive{" "}
            <span className="gradient-text">Asset Management</span>
          </h1>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">
            Document every asset you own in one secure place. From real estate
            to digital currencies, keep track of everything that matters.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Real Estate",
                desc: "Properties, land, vacation homes",
              },
              { title: "Bank Accounts", desc: "Checking, savings, CDs" },
              { title: "Investments", desc: "Stocks, bonds, mutual funds" },
              { title: "Retirement", desc: "401k, IRA, pension plans" },
              {
                title: "Digital Assets",
                desc: "Cryptocurrency, NFTs, domains",
              },
              {
                title: "Personal Property",
                desc: "Vehicles, jewelry, collections",
              },
            ].map((asset, i) => (
              <div
                key={i}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:border-[#00d4ff] hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-[#1e2332] mb-2">
                  {asset.title}
                </h3>
                <p className="text-[#6b7280]">{asset.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
          >
            Start Documenting <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ========================================
// 3. FUNERAL WISHES PAGE
// ========================================
export const FuneralWishesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-[#1e2332] mb-6">
            Your Final <span className="gradient-text">Wishes</span> Honored
          </h1>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto mb-12">
            Record your funeral and memorial preferences so your loved ones know
            exactly how you want to be remembered.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Service Type",
                items: [
                  "Traditional funeral",
                  "Memorial service",
                  "Celebration of life",
                  "Private ceremony",
                ],
              },
              {
                title: "Burial Preferences",
                items: [
                  "Burial location",
                  "Casket selection",
                  "Cremation wishes",
                  "Green burial options",
                ],
              },
              {
                title: "Special Requests",
                items: [
                  "Music selections",
                  "Readings & prayers",
                  "Photo displays",
                  "Charitable donations",
                ],
              },
              {
                title: "Guest List",
                items: [
                  "Who to notify",
                  "Special invitations",
                  "Eulogy speakers",
                  "Honorary pallbearers",
                ],
              },
            ].map((section, i) => (
              <div
                key={i}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-[#1e2332] mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-[#6b7280]"
                    >
                      <CheckCircle size={18} className="text-[#00d4ff]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
          >
            Document Your Wishes <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ========================================
// 4. EXECUTOR MANAGEMENT PAGE
// ========================================
export const ExecutorManagementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-[#1e2332] mb-6">
            Designate Trusted <span className="gradient-text">Executors</span>
          </h1>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto mb-12">
            Choose the right people to carry out your final wishes and manage
            your estate with care and precision.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white border border-[#e2e8f0] rounded-3xl p-10 shadow-lg">
              <Users size={60} className="text-[#00d4ff] mb-6" />
              <h3 className="text-2xl font-bold text-[#1e2332] mb-6">
                What Executors Do
              </h3>
              <ul className="space-y-4">
                {[
                  "Locate and secure all assets",
                  "Pay outstanding debts and taxes",
                  "Distribute assets to beneficiaries",
                  "Close accounts and cancel services",
                  "Handle legal paperwork",
                  "Execute funeral wishes",
                ].map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#6b7280]">
                    <CheckCircle
                      size={20}
                      className="text-[#00d4ff] mt-1 flex-shrink-0"
                    />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#e2e8f0] rounded-3xl p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1e2332] mb-6">
                Choosing Executors
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Primary Executor",
                    desc: "Your main choice - someone you trust completely",
                  },
                  {
                    title: "Backup Executors",
                    desc: "Secondary options if primary is unavailable",
                  },
                  {
                    title: "Co-Executors",
                    desc: "Multiple people working together (optional)",
                  },
                  {
                    title: "Instructions",
                    desc: "Leave detailed guidance for your executors",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="text-lg font-semibold text-[#1e2332] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#6b7280]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <Link
            to="/#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
          >
            Choose Your Executors <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ========================================
// 5. SECURE ACCESS PAGE
// ========================================
export const SecureAccessPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-[#1e2332] mb-6">
            <span className="gradient-text">Secure Access</span> Protocol
          </h1>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto mb-12">
            A carefully designed system ensures only authorized executors can
            access your information after proper verification.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-[#1e2332] mb-12">
            How Secure Access <span className="gradient-text">Works</span>
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "Death Verification",
                desc: "Executor provides official death certificate or legal documentation",
                icon: "📄",
              },
              {
                step: "2",
                title: "Identity Confirmation",
                desc: "Executor proves their identity and authorization to act",
                icon: "🔐",
              },
              {
                step: "3",
                title: "Device Access",
                desc: "Executor gains access to the deceased's unlocked device",
                icon: "📱",
              },
              {
                step: "4",
                title: "Information Retrieved",
                desc: "All legacy information becomes accessible to authorized executor",
                icon: "✅",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-6 bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0066ff] flex items-center justify-center text-2xl font-bold text-white">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-[#1e2332] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#6b7280] text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl bg-white border border-[#e2e8f0] rounded-3xl p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-[#1e2332] mb-4">
            Protected Until Needed
          </h3>
          <p className="text-[#6b7280] mb-8">
            Your information stays completely private and secure until the
            proper verification process is completed.
          </p>
          <Link
            to="/#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
          >
            Learn More <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// ========================================
// 6. DEVICE-ONLY STORAGE PAGE
// ========================================
export const DeviceStoragePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-[#1e2332] mb-6">
            100% <span className="gradient-text">Device-Only</span> Storage
          </h1>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto mb-12">
            Your most sensitive information never leaves your device. No cloud.
            No servers. Complete privacy guaranteed.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🚫",
                title: "No Cloud Upload",
                desc: "Your data never syncs to any cloud service or remote server",
              },
              {
                icon: "🔒",
                title: "Local Encryption",
                desc: "Everything is encrypted directly on your device using industry standards",
              },
              {
                icon: "👤",
                title: "You Own It",
                desc: "Complete control over your data - we never have access",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-all"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#1e2332] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#6b7280]">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-[#e2e8f0] rounded-3xl p-10 shadow-lg">
            <h2 className="text-3xl font-bold text-[#1e2332] mb-8 text-center">
              Why Device-Only <span className="gradient-text">Matters</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "No Data Breaches",
                  desc: "Since there's no central server, there's nothing for hackers to breach",
                },
                {
                  title: "No Third-Party Access",
                  desc: "Companies, governments, or employees cannot access your data",
                },
                {
                  title: "True Privacy",
                  desc: "What you store is known only to you - complete confidentiality",
                },
                {
                  title: "You're in Control",
                  desc: "Delete, backup, or manage your data however you choose",
                },
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle
                    size={24}
                    className="text-[#00d4ff] mt-1 flex-shrink-0"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-[#1e2332] mb-2">
                      {point.title}
                    </h4>
                    <p className="text-[#6b7280]">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl bg-gradient-to-r from-[rgba(255,159,10,0.1)] to-[rgba(255,159,10,0.05)] border border-[rgba(255,159,10,0.3)] rounded-3xl p-10 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-[#1e2332] mb-4">
            ⚠️ Important Reminder
          </h3>
          <p className="text-[#6b7280] text-lg mb-8">
            Because your data is stored only on your device, make sure to back
            up your device regularly. If you lose your device or uninstall the
            app, your data cannot be recovered.
          </p>
          <Link
            to="/#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
          >
            Get Started <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
