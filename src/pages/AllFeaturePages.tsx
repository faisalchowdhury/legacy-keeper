import React, { useState } from "react";
import { Link } from "react-router";
import { FileText, CheckCircle, ArrowRight, Users, Image } from "lucide-react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { useLanguage } from "../i18n/LanguageContext";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
// ========================================
// 1. DIGITAL WILL CREATION PAGE
// ========================================
export const DigitalWillPage: React.FC = () => {
  const { t } = useLanguage();
  const d = t.digitalWill;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.3)] rounded-full text-sm font-semibold text-[#00d4ff] mb-6">
                <FileText size={20} />
                {d.badge}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#1e2332]">
                {d.title} <span className="gradient-text">{d.titleAccent}</span>
              </h1>
              <p className="text-lg text-[#6b7280] mb-8 leading-relaxed">
                {d.desc}
              </p>
              <Link
                to="/#download"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
              >
                {d.getStarted} <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white border border-[#e2e8f0] rounded-3xl p-8 shadow-lg">
              <FileText size={100} className="text-[#00d4ff] mb-6" />
              <h3 className="text-2xl font-bold text-[#1e2332] mb-4">
                {d.cardTitle}
              </h3>
              <ul className="space-y-3">
                {d.cardItems.map((item, i) => (
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

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-center text-[#1e2332] mb-12">
            {d.howTitle}{" "}
            <span className="gradient-text">{d.howTitleAccent}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {d.steps.map((item, i) => (
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

      {/* 3 Screenshots Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Screenshot 1 */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2 border-b border-[#e2e8f0]">
                <p className="text-xs font-medium text-gray-500 text-center">
                  Step 1: Create Will
                </p>
              </div>
              <div className="p-3 bg-gray-50 flex justify-center">
                <img
                  src={img6}
                  alt="Create will screenshot"
                  className="w-full h-auto object-contain rounded"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2 border-b border-[#e2e8f0]">
                <p className="text-xs font-medium text-gray-500 text-center">
                  Step 2: Add Assets
                </p>
              </div>
              <div className="p-3 bg-gray-50 flex justify-center">
                <img
                  src={img3}
                  alt="Add assets screenshot"
                  className="w-full h-auto object-contain rounded"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="bg-white rounded-xl border border-[#e2e8f0] overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2 border-b border-[#e2e8f0]">
                <p className="text-xs font-medium text-gray-500 text-center">
                  Step 3: Nominate Guardians
                </p>
              </div>
              <div className="p-3 bg-gray-50 flex justify-center">
                <img
                  src={img9}
                  alt="Nominate guardians screenshot"
                  className="w-full h-auto object-contain rounded"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <div className="container mx-auto max-w-4xl bg-white border border-[#e2e8f0] rounded-3xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-[#1e2332] mb-4">
            {d.ctaTitle}
          </h2>
          <p className="text-[#6b7280] mb-8">{d.ctaDesc}</p>
          <Link
            to="/#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
          >
            {d.downloadNow} <ArrowRight size={20} />
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
  const { t } = useLanguage();
  const a = t.assetManagement;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      <section className="pt-32 pb-12 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-[#1e2332] mb-6">
            {a.title} <span className="gradient-text">{a.titleAccent}</span>
          </h1>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto">{a.desc}</p>
        </div>
      </section>

      {/* Main Content Section - Content Left + Images Right */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT SIDE - Engaging Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00d4ff]/10 to-[#0066ff]/10 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse"></div>
                  <span className="text-sm font-medium text-[#0066ff]">
                    Smart Asset Management
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-[#1e2332] leading-tight">
                  Everything you need to manage your digital assets
                </h2>

                <p className="text-lg text-[#6b7280] leading-relaxed">
                  Centralize, organize, and track all your digital assets in one
                  powerful platform. From documents to media files, manage
                  everything with enterprise-grade security.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00d4ff]/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e2332] mb-1">
                      Real-time Sync
                    </h4>
                    <p className="text-sm text-[#6b7280]">
                      Instant updates across all devices and team members
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00d4ff]/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e2332] mb-1">
                      Advanced Analytics
                    </h4>
                    <p className="text-sm text-[#6b7280]">
                      Track usage patterns and optimize your asset performance
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00d4ff]/20 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#00d4ff]"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1e2332] mb-1">
                      Team Collaboration
                    </h4>
                    <p className="text-sm text-[#6b7280]">
                      Share, review, and collaborate seamlessly with your team
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Link
                  to="/#download"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-lg transition-all"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
                <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#e2e8f0] rounded-full text-[#1e2332] font-semibold hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* RIGHT SIDE - 2 Screenshots side by side */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
                {/* Screenshot 1 */}
                <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-md hover:shadow-xl transition-all group">
                  <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2 border-b border-[#e2e8f0]">
                    <p className="text-xs font-medium text-gray-500 text-center">
                      Dashboard View
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 flex justify-center items-center">
                    <img
                      src={img3}
                      alt="Asset dashboard"
                      className="w-full h-auto object-contain rounded-lg transition-transform group-hover:scale-105"
                      style={{ maxHeight: "350px" }}
                    />
                  </div>
                </div>

                {/* Screenshot 2 */}
                <div className="bg-white rounded-2xl border border-[#e2e8f0] overflow-hidden shadow-md hover:shadow-xl transition-all group">
                  <div className="bg-gradient-to-r from-gray-50 to-white px-3 py-2 border-b border-[#e2e8f0]">
                    <p className="text-xs font-medium text-gray-500 text-center">
                      Catalog View
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 flex justify-center items-center">
                    <img
                      src={img4}
                      alt="Asset catalog"
                      className="w-full h-auto object-contain rounded-lg transition-transform group-hover:scale-105"
                      style={{ maxHeight: "350px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Section - 6 Cards at the Bottom */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e2332] mb-4">
              Powerful Features at Your Fingertips
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto">
              Everything you need to take control of your digital assets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.assets.map((asset, i) => (
              <div
                key={i}
                className="bg-white border border-[#e2e8f0] rounded-2xl p-6 hover:border-[#00d4ff] hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff]/10 to-[#0066ff]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-3 h-3 rounded-full bg-[#00d4ff]"></div>
                </div>
                <h3 className="text-xl font-semibold text-[#1e2332] mb-2 group-hover:text-[#00d4ff] transition-colors">
                  {asset.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed">{asset.desc}</p>
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
            {a.startDocumenting} <ArrowRight size={20} />
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
  const { t } = useLanguage();
  const f = t.funeralWishes;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-[#1e2332] mb-6">
            {f.title} <span className="gradient-text">{f.titleAccent}</span>{" "}
            {f.titleEnd}
          </h1>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto mb-12">
            {f.desc}
          </p>
        </div>
      </section>

      {/* Screenshot Section - Clean and standalone */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-3 border border-[#e2e8f0]">
              <img
                src={img8}
                alt="Funeral wishes app interface"
                className="w-full h-auto object-contain rounded-lg"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {f.sections.map((section, i) => (
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
            {f.documentWishes} <ArrowRight size={20} />
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
  const { t } = useLanguage();
  const e = t.executorManagement;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-[#1e2332] mb-6">
            {e.title} <span className="gradient-text">{e.titleAccent}</span>
          </h1>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto mb-12">
            {e.desc}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Card 1: What Executors Do */}
            <div className="bg-white border border-[#e2e8f0] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <Users size={48} className="text-[#00d4ff]" />
                <span className="text-xs font-mono bg-gray-100 px-3 py-1 rounded-full text-gray-500">
                  Screenshot 1
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#1e2332] mb-4">
                {e.whatTitle}
              </h3>
              <div className="mb-6 rounded-xl overflow-hidden border border-gray-100 shadow-md">
                <img
                  src={img2}
                  alt="Executor tasks management interface"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <ul className="space-y-4 flex-grow">
                {e.whatItems.map((task, i) => (
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

            {/* Card 2: Choosing Executors */}
            <div className="bg-white border border-[#e2e8f0] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d4ff]/10 to-[#0066ff]/10 flex items-center justify-center">
                  <Image size={24} className="text-[#0066ff]" />
                </div>
                <span className="text-xs font-mono bg-gray-100 px-3 py-1 rounded-full text-gray-500">
                  Screenshot 2
                </span>
              </div>
              <h3 className="text-2xl font-bold text-[#1e2332] mb-4">
                {e.choosingTitle}
              </h3>
              <div className="mb-6 rounded-xl overflow-hidden border border-gray-100 shadow-md">
                <img
                  src={img5}
                  alt="Executor selection and types interface"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6 flex-grow">
                {e.executorTypes.map((item, i) => (
                  <div key={i} className="border-l-3 border-[#00d4ff] pl-4">
                    <h4 className="text-lg font-semibold text-[#1e2332] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-[#6b7280] leading-relaxed">
                      {item.desc}
                    </p>
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
            {e.cta} <ArrowRight size={20} />
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
  const { t } = useLanguage();
  const s = t.secureAccess;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-[#1e2332] mb-6">
            <span className="gradient-text">{s.title}</span> {s.titleAccent}
          </h1>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto mb-12">
            {s.desc}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-[#1e2332] mb-12">
            {s.howTitle}{" "}
            <span className="gradient-text">{s.howTitleAccent}</span>
          </h2>
          <div className="space-y-8">
            {s.steps.map((item, i) => (
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
            {s.protectedTitle}
          </h3>
          <p className="text-[#6b7280] mb-8">{s.protectedDesc}</p>
          <Link
            to="/#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
          >
            {s.learnMore} <ArrowRight size={20} />
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
  const { t } = useLanguage();
  const ds = t.deviceStorage;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl text-center">
          <h1 className="text-5xl font-bold text-[#1e2332] mb-6">
            {ds.title} <span className="gradient-text">{ds.titleAccent}</span>{" "}
            {ds.titleEnd}
          </h1>
          <p className="text-xl text-[#6b7280] max-w-3xl mx-auto mb-12">
            {ds.desc}
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ds.features.map((feature, i) => (
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
              {ds.whyTitle}{" "}
              <span className="gradient-text">{ds.whyTitleAccent}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ds.whyPoints.map((point, i) => (
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
            {ds.reminderTitle}
          </h3>
          <p className="text-[#6b7280] text-lg mb-8">{ds.reminderDesc}</p>
          <Link
            to="/#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
          >
            {ds.getStarted} <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};
