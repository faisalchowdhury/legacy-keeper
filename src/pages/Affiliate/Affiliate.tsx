import React from "react";
import { Link } from "react-router";
import {
  Gift,
  Users,
  Coins,
  Unlock,
  Share2,
  CheckCircle,
  ArrowRight,
  Star,
  Trophy,
  Shield,
} from "lucide-react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useLanguage } from "../../i18n/LanguageContext";

export const Affiliate: React.FC = () => {
  const { t } = useLanguage();
  const a = t.affiliate;

  const premiumColors = [
    "from-[#00d4ff] to-[#0066ff]",
    "from-[#a855f7] to-[#9333ea]",
    "from-[#fbbf24] to-[#f59e0b]",
    "from-[#00d4ff] to-[#0066ff]",
    "from-[#a855f7] to-[#9333ea]",
    "from-[#fbbf24] to-[#f59e0b]",
  ];

  const benefitIcons = [
    <Star size={24} />,
    <Trophy size={24} />,
    <Unlock size={24} />,
    <Shield size={24} />,
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(255,215,0,0.1)] border border-[rgba(255,215,0,0.3)] rounded-full text-sm font-semibold text-[#f59e0b] mb-6">
              <Gift size={20} />
              {a.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#1e2332]">
              {a.title} <span className="gradient-text">{a.titleAccent}</span>
            </h1>
            <p className="text-lg text-[#6b7280] mb-8 leading-relaxed">
              {a.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#download"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
              >
                {a.startReferring} <Share2 size={20} />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#e2e8f0] rounded-full text-[#1e2332] font-semibold hover:border-[#00d4ff] transition-all"
              >
                {a.howItWorks} <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coin Rewards Highlight */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-[#fff7e6] to-[#fffbf0] border border-[rgba(245,158,11,0.2)] rounded-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] rounded-full mb-4">
                <Coins size={40} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#1e2332] mb-2">500</h3>
              <p className="text-[#6b7280] font-medium">{a.coinsPerReferral}</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff] border border-[rgba(0,212,255,0.2)] rounded-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full mb-4">
                <Users size={40} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#1e2332] mb-2">∞</h3>
              <p className="text-[#6b7280] font-medium">
                {a.unlimitedReferrals}
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#f3e8ff] to-[#faf5ff] border border-[rgba(168,85,247,0.2)] rounded-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#a855f7] to-[#9333ea] rounded-full mb-4">
                <Trophy size={40} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#1e2332] mb-2">
                {a.free}
              </h3>
              <p className="text-[#6b7280] font-medium">{a.premiumFeatures}</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2332] mb-6">
              {a.howTitle}{" "}
              <span className="gradient-text">{a.howTitleAccent}</span>{" "}
              {a.howTitleEnd}
            </h2>
            <p className="text-lg text-[#6b7280]">{a.howDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {a.steps.map((item, i) => (
              <div
                key={i}
                className="relative bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <div className="text-[#00d4ff] mb-6 mt-4">
                  {i === 0 ? (
                    <Share2 size={40} />
                  ) : i === 1 ? (
                    <Users size={40} />
                  ) : (
                    <Coins size={40} />
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#1e2332] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unlock Premium Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2332] mb-6">
              {a.unlockTitle}{" "}
              <span className="gradient-text">{a.unlockTitleAccent}</span>{" "}
              {a.unlockTitleEnd}
            </h2>
            <p className="text-lg text-[#6b7280]">{a.unlockDesc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {a.premiumItems.map((item, i) => (
              <div
                key={i}
                className="bg-[#f5f8ff] border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-lg transition-all group"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${premiumColors[i]} rounded-xl mb-4 text-white group-hover:scale-110 transition-transform`}
                >
                  <Unlock size={32} />
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#1e2332]">
                    {item.feature}
                  </h3>
                  <div className="flex items-center gap-1 text-[#f59e0b] font-bold">
                    <Coins size={18} />
                    <span>{item.Points}</span>
                  </div>
                </div>
                <p className="text-[#6b7280] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#6b7280] mb-4">
              <strong className="text-[#1e2332]">{a.proTip}</strong>{" "}
              {a.proTipText}{" "}
              <strong className="text-[#00d4ff]">{a.proTipFriends}</strong>{" "}
              {a.proTipEnd}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-[#00d4ff]/10 to-[#0066ff]/10 border border-[#00d4ff]/20 rounded-3xl p-10 lg:p-12">
            <h2 className="text-3xl font-bold text-[#1e2332] mb-8 text-center">
              {a.whyTitle}{" "}
              <span className="gradient-text">{a.whyTitleAccent}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {a.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-xl flex items-center justify-center text-white">
                    {benefitIcons[i]}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1e2332] mb-2">
                      {benefit.title}
                    </h4>
                    <p className="text-[#6b7280]">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#1e2332] mb-12 text-center">
            {a.faqTitle}{" "}
            <span className="gradient-text">{a.faqTitleAccent}</span>
          </h2>
          <div className="space-y-6">
            {a.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-[#f5f8ff] border border-[#e2e8f0] rounded-xl p-6 hover:shadow-lg transition-all"
              >
                <h4 className="text-lg font-bold text-[#1e2332] mb-3 flex items-start gap-3">
                  <CheckCircle
                    size={24}
                    className="text-[#00d4ff] flex-shrink-0 mt-1"
                  />
                  {faq.q}
                </h4>
                <p className="text-[#6b7280] pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#0066ff]/10 border-2 border-[#00d4ff]/30 rounded-3xl p-12">
            <Gift size={64} className="text-[#00d4ff] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#1e2332] mb-4">
              {a.ctaTitle}
            </h2>
            <p className="text-lg text-[#6b7280] mb-8 max-w-2xl mx-auto">
              {a.ctaDesc}
            </p>
            <Link
              to="/#download"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all text-lg"
            >
              {a.ctaButton} <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Affiliate;
