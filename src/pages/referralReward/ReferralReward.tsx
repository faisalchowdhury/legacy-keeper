import React from "react";
import { Link } from "react-router";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useLanguage } from "../../i18n/LanguageContext";
import lkt from "../../assets/lkt.png";
const ReferralReward: React.FC = () => {
  const { t } = useLanguage();
  const r = t.referralReward;

  const years = [
    {
      year: "2026",
      reward: "500 Points",
      allocation: "100,000,000 LKT",
      desc: r.year2026Desc,
      color: "from-[#1b6ef3] to-[#00b4f0]",
      glow: "shadow-[0_0_40px_rgba(27,110,243,0.25)]",
      badge: r.earlyPhase,
      badgeColor: "bg-blue-50 text-[#1b6ef3] border-blue-200",
      barWidth: "100%",
      barColor: "from-[#1b6ef3] to-[#00b4f0]",
    },
    {
      year: "2027",
      reward: "250 Points",
      allocation: "75,000,000 LKT",
      desc: r.year2027Desc,
      color: "from-[#6366f1] to-[#8b5cf6]",
      glow: "shadow-[0_0_40px_rgba(99,102,241,0.2)]",
      badge: r.growthPhase,
      badgeColor: "bg-indigo-50 text-indigo-600 border-indigo-200",
      barWidth: "75%",
      barColor: "from-[#6366f1] to-[#8b5cf6]",
    },
    {
      year: "2028",
      reward: "125 Points",
      allocation: "25,000,000 LKT",
      desc: r.year2028Desc,
      color: "from-[#8b5cf6] to-[#a855f7]",
      glow: "shadow-[0_0_40px_rgba(139,92,246,0.15)]",
      badge: r.maturityPhase,
      badgeColor: "bg-purple-50 text-purple-600 border-purple-200",
      barWidth: "25%",
      barColor: "from-[#8b5cf6] to-[#a855f7]",
    },
  ];

  const goals = [
    { icon: "📉", title: r.goal1Title, desc: r.goal1Desc },
    { icon: "💎", title: r.goal2Title, desc: r.goal2Desc },
    { icon: "🏆", title: r.goal3Title, desc: r.goal3Desc },
    { icon: "🌱", title: r.goal4Title, desc: r.goal4Desc },
    { icon: "🔐", title: r.goal5Title, desc: r.goal5Desc },
  ];

  return (
    <div className="min-h-screen bg-white text-[#1e2332]">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-[#f5f8ff] to-white">
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/3 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/25 rounded-full text-sm font-semibold text-accent mb-8 shadow-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            {r.badge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight text-[#1e2332]">
            {r.heroTitle}{" "}
            <span className="gradient-text">{r.heroTitleAccent}</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#6b7280] leading-relaxed max-w-3xl mx-auto mb-10">
            {r.heroDesc}
          </p>

          {/* Token pill */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-[#e2e8f0] rounded-full shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1b6ef3] to-[#00b4f0] flex items-center justify-center text-white font-bold text-xs">
              <img src={lkt} alt="" />
            </div>
            <span className="text-sm font-semibold text-[#1e2332]">
              {r.tokenName}
            </span>
            <span className="w-px h-4 bg-[#e2e8f0]"></span>
            <span className="text-sm text-[#6b7280]">{r.tokenSubtitle}</span>
          </div>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-[#4b5563] leading-relaxed">
            {r.introText}
          </p>
          <p className="text-lg text-[#4b5563] leading-relaxed mt-6">
            {r.introText2}
          </p>
        </div>
      </section>

      {/* Year-by-year Schedule */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f8ff] relative overflow-hidden">
        <div className="absolute top-0 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent mb-5">
              {r.scheduleBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e2332] mb-4">
              {r.scheduleTitle}{" "}
              <span className="gradient-text">{r.scheduleTitleAccent}</span>
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              {r.scheduleDesc}
            </p>
          </div>

          {/* Year Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {years.map((y, i) => (
              <div
                key={i}
                className={`relative bg-white border border-[#e2e8f0] rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 ${y.glow} group overflow-hidden`}
              >
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/3 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Year badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border mb-6 ${y.badgeColor}`}
                >
                  {y.badge}
                </div>

                {/* Year */}
                <div
                  className={`text-6xl font-black mb-2 bg-gradient-to-r ${y.color} bg-clip-text text-transparent`}
                >
                  {y.year}
                </div>

                {/* Reward */}
                <div className="mb-6">
                  <div className="text-3xl font-extrabold text-[#1e2332] mb-1">
                    {y.reward}
                  </div>
                  <div className="text-sm text-[#9ca3af] font-medium">
                    {r.perReferral}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-[#9ca3af] mb-2">
                    <span>{r.allocation}</span>
                    <span className="font-semibold text-[#6b7280]">
                      {y.allocation}
                    </span>
                  </div>
                  <div className="h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${y.barColor} transition-all duration-1000`}
                      style={{ width: y.barWidth }}
                    ></div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#6b7280] text-sm leading-relaxed relative z-10">
                  {y.desc}
                </p>

                {/* Number indicator */}
                <div
                  className={`absolute top-6 right-6 w-10 h-10 rounded-2xl bg-gradient-to-br ${y.color} flex items-center justify-center text-white font-bold text-lg opacity-15 group-hover:opacity-30 transition-opacity`}
                >
                  {i + 1}
                </div>

                <div className="shimmer-effect"></div>
              </div>
            ))}
          </div>

          {/* Decreasing arrow visual */}
          <div className="hidden lg:flex items-center justify-center mt-10 gap-4 text-[#9ca3af]">
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-[#1b6ef3]"></div>
              <span>2026 — 500 Points</span>
            </div>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
              <span>2027 — 250 Points</span>
            </div>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span>2028 — 125 Points</span>
            </div>
          </div>
        </div>
      </section>

      {/* Goals / Purpose */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent mb-5">
              {r.designedForBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e2332] mb-4">
              {r.designedTitle}{" "}
              <span className="gradient-text">{r.designedTitleAccent}</span>
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              {r.designedDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal, i) => (
              <div
                key={i}
                className={`group p-8 bg-white border border-[#e2e8f0] rounded-2xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-glow cursor-default ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110 inline-block">
                  {goal.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1e2332] mb-3 group-hover:text-accent transition-colors">
                  {goal.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b6ef3] to-[#00b4f0] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 border border-white/25 rounded-full text-sm font-semibold text-white mb-8">
            ⏰ {r.actNowBadge}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {r.ctaTitle}
          </h2>

          <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
            {r.ctaDesc}
          </p>

          {/* Reward comparison */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            {[
              { year: "2026", lkt: "500", active: true },
              { year: "2027", lkt: "250", active: false },
              { year: "2028", lkt: "125", active: false },
            ].map((item) => (
              <div
                key={item.year}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl border transition-all ${
                  item.active
                    ? "bg-white border-white shadow-lg scale-105"
                    : "bg-white/10 border-white/20"
                }`}
              >
                <span
                  className={`text-sm font-semibold ${item.active ? "text-[#1b6ef3]" : "text-white/70"}`}
                >
                  {item.year}
                </span>
                <span
                  className={`w-px h-4 ${item.active ? "bg-blue-200" : "bg-white/20"}`}
                ></span>
                <span
                  className={`text-xl font-extrabold ${item.active ? "text-[#1e2332]" : "text-white/70"}`}
                >
                  {item.lkt} Points
                </span>
                {item.active && (
                  <span className="px-2 py-0.5 bg-accent text-white text-xs font-bold rounded-full">
                    {r.nowLabel}
                  </span>
                )}
              </div>
            ))}
          </div>

          <Link
            to="/affiliate"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#1b6ef3] font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            {r.ctaButton}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReferralReward;
