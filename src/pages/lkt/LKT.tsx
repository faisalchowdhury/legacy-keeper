import React from "react";
import { Link } from "react-router";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useLanguage } from "../../i18n/LanguageContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import lkt from "../../assets/lkt.png";
const LKT: React.FC = () => {
  const { t } = useLanguage();
  const l = t.lkt;

  // Tokenomics data for the round pie chart
  const tokenomicsData = [
    { name: l.allocationItems.referral, value: 20, color: "#1b6ef3", icon: "🎁" },
    { name: l.allocationItems.team, value: 20, color: "#6366f1", icon: "👥" },
    { name: l.allocationItems.marketing, value: 15, color: "#8b5cf6", icon: "📈" },
    { name: l.allocationItems.liquidity, value: 15, color: "#a855f7", icon: "💧" },
    { name: l.allocationItems.reserve, value: 10, color: "#ec4899", icon: "🏦" },
    { name: l.allocationItems.ecosystem, value: 10, color: "#f43f5e", icon: "🌿" },
    { name: l.allocationItems.community, value: 10, color: "#f97316", icon: "🤝" },
  ];

  // Custom Tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-[#e2e8f0] rounded-2xl shadow-xl p-4 min-w-[180px]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{payload[0].payload.icon}</span>
            <p className="font-bold text-[#1e2332]">{payload[0].name}</p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-[#1b6ef3]">
              {payload[0].value}%
            </span>
            <span className="text-sm text-[#6b7280]">{l.allocation.toLowerCase()}</span>
          </div>
          <div className="w-full h-1.5 bg-[#f1f5f9] rounded-full mt-2 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${payload[0].value}%`,
                backgroundColor: payload[0].payload.color,
              }}
            ></div>
          </div>
        </div>
      );
    }
    return null;
  };

  const referralYears = [
    {
      year: "2026",
      reward: "500 Points",
      allocation: "100,000,000 LKT",
      color: "from-[#1b6ef3] to-[#00b4f0]",
      barWidth: "100%",
    },
    {
      year: "2027",
      reward: "250 Points",
      allocation: "75,000,000 LKT",
      color: "from-[#6366f1] to-[#8b5cf6]",
      barWidth: "75%",
    },
    {
      year: "2028",
      reward: "125 Points",
      allocation: "25,000,000 LKT",
      color: "from-[#8b5cf6] to-[#a855f7]",
      barWidth: "25%",
    },
  ];

  const utilities = l.utilities.map((item, i) => ({
    ...item,
    icon: ["💎", "🔄", "⚡", "🎁", "💰"][i],
  }));

  const waysToEarn = l.waysToEarn.map((item, i) => ({
    ...item,
    points: ["500", "1,000", "Varies", "100-500", "1,000", "Varies"][i],
  }));

  return (
    <div className="min-h-screen bg-white text-[#1e2332]">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-[#f5f8ff] to-white">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/25 rounded-full text-sm font-semibold text-accent mb-8">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            {l.heroBadge}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            {l.heroTitle} <span className="gradient-text">(LKT)</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#6b7280] leading-relaxed max-w-3xl mx-auto mb-10">
            {l.heroSubtitle}
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white border border-[#e2e8f0] rounded-full shadow-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1b6ef3] to-[#00b4f0] flex items-center justify-center text-white font-bold text-xs">
              <img src={lkt} alt="LKT" />
            </div>
            <span className="text-sm font-semibold">{l.builtOnSolana}</span>
            <span className="w-px h-4 bg-[#e2e8f0]"></span>
            <span className="text-sm text-[#6b7280]">
              {l.splToken}
            </span>
          </div>
        </div>
      </section>

      {/* About LKT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e2332] mb-4">
              {l.aboutTitle}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1b6ef3] to-[#00b4f0] mx-auto rounded-full"></div>
          </div>
          <p className="text-lg text-[#4b5563] leading-relaxed text-center">
            {l.aboutDesc}
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f8ff]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e2332] mb-4">
              {l.featuresTitle}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1b6ef3] to-[#00b4f0] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {l.features.map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#e2e8f0]"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1b6ef3] to-[#00b4f0] flex items-center justify-center text-white text-sm font-bold">
                  ✓
                </div>
                <span className="text-[#4b5563]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Information Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e2332] mb-4">
              {l.tokenInfoTitle}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1b6ef3] to-[#00b4f0] mx-auto rounded-full"></div>
          </div>
          <div className="bg-[#f5f8ff] rounded-2xl overflow-hidden border border-[#e2e8f0]">
            {[
              { label: l.tokenInfo.name, value: "Legacy Keeper Token" },
              { label: l.tokenInfo.address, value: l.tokenInfo.comingSoon },

              { label: l.tokenInfo.symbol, value: "LKT" },
              { label: l.tokenInfo.blockchain, value: "Solana" },
              { label: l.tokenInfo.standard, value: "SPL Token" },
              { label: l.tokenInfo.supply, value: "1,000,000,000 LKT" },
              {
                label: l.tokenInfo.utility,
                value: l.tokenInfo.utilityValue,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex justify-between items-center px-6 py-4 ${i !== 6 ? "border-b border-[#e2e8f0]" : ""}`}
              >
                <span className="font-semibold text-[#1e2332]">
                  {item.label}
                </span>
                <span className="text-[#4b5563]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Users Earn LKT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f8ff]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e2332] mb-4">
              {l.howToEarnTitle}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1b6ef3] to-[#00b4f0] mx-auto rounded-full"></div>
            <p className="text-[#6b7280] mt-4 max-w-2xl mx-auto">
              {l.howToEarnDesc}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#e2e8f0]">
              <span className="font-bold text-[#1b6ef3]">{l.conversionRate}</span>
              <span>1,000 Points = 1 LKT</span>
              <span className="w-px h-4 bg-[#e2e8f0]"></span>
              <span className="font-bold text-[#1b6ef3]">{l.minimumRedemption}</span>
              <span>50,000 Points = 50 LKT</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {waysToEarn.map((way, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-[#e2e8f0] hover:border-accent/40 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-[#1e2332]">{way.title}</h3>
                  <span className="text-xs font-semibold text-[#1b6ef3] bg-blue-50 px-2 py-1 rounded-full">
                    {way.points} pts
                  </span>
                </div>
                <p className="text-sm text-[#6b7280]">{way.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics - ROUND PIE CHART */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-blue-50 rounded-full blur-3xl"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-5 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent mb-5">
              {l.tokenomicsBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e2332] mb-4">
              {l.tokenomicsTitle}
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              {l.totalSupply}{" "}
              <span className="font-bold text-[#1b6ef3]">
                1,000,000,000 LKT
              </span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Round Donut Chart */}
            <div className="w-full max-w-md mx-auto lg:mx-0">
              <div className="relative">
                <ResponsiveContainer width="100%" height={380}>
                  <PieChart>
                    <Pie
                      data={tokenomicsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={140}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="none"
                    >
                      {tokenomicsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
                {/* Center text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-3xl font-black text-[#1e2332]">100%</div>
                  <div className="text-xs text-[#6b7280]">{l.totalSupply.replace(":", "")}</div>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {tokenomicsData.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-2 py-1 bg-[#f5f8ff] rounded-full"
                  >
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-xs text-[#4b5563]">{item.name}</span>
                    <span className="text-xs font-bold text-[#1b6ef3]">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tokenomics list */}
            <div className="flex-1 w-full">
              <div className="bg-[#f5f8ff] rounded-2xl p-6 border border-[#e2e8f0]">
                <h3 className="text-xl font-bold text-[#1e2332] mb-4">
                  {l.allocationDetails}
                </h3>
                <div className="space-y-3">
                  {tokenomicsData.map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{item.icon}</span>
                          <span className="font-medium text-[#1e2332]">
                            {item.name}
                          </span>
                        </div>
                        <span className="font-bold text-[#1b6ef3]">
                          {item.value}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-white rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700 group-hover:opacity-80"
                          style={{
                            width: `${item.value}%`,
                            backgroundColor: item.color,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-[#e2e8f0]">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6b7280]">{l.totalAllocated}</span>
                    <span className="font-bold text-[#1e2332]">
                      100% • 1,000,000,000 LKT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Reward Schedule */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f5f8ff] relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent mb-5">
              {l.referralBadge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e2332] mb-4">
              {l.referralTitle} <span className="gradient-text">{l.referralTitleAccent}</span>
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              {l.referralDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {referralYears.map((year, i) => (
              <div
                key={i}
                className="relative bg-white border border-[#e2e8f0] rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`text-4xl font-black mb-2 bg-gradient-to-r ${year.color} bg-clip-text text-transparent`}
                >
                  {year.year}
                </div>
                <div className="text-2xl font-extrabold text-[#1e2332] mb-1">
                  {year.reward}
                </div>
                <div className="text-sm text-[#9ca3af] mb-4">{l.perReferral}</div>
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-[#9ca3af] mb-1">
                    <span>{l.allocation}</span>
                    <span>{year.allocation}</span>
                  </div>
                  <div className="h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${year.color}`}
                      style={{ width: year.barWidth }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Can You Do With LKT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1e2332] mb-4">
              {l.utilityTitle}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1b6ef3] to-[#00b4f0] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {utilities.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-[#f5f8ff] rounded-xl border border-[#e2e8f0] hover:border-accent/40 transition-all"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#1e2332] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6b7280]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Future Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#f5f8ff]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1b6ef3] to-[#00b4f0] flex items-center justify-center text-white">
                  🔒
                </div>
                <h3 className="text-xl font-bold text-[#1e2332]">
                  {l.securityTitle}
                </h3>
              </div>
              <p className="text-[#6b7280] leading-relaxed">
                {l.securityDesc}
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1b6ef3] to-[#00b4f0] flex items-center justify-center text-white">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-[#1e2332]">
                  {l.visionTitle}
                </h3>
              </div>
              <p className="text-[#6b7280] leading-relaxed">
                {l.visionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1b6ef3] to-[#00b4f0] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent pointer-events-none"></div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 border border-white/25 rounded-full text-sm font-semibold text-white mb-8">
            {l.ctaBadge}
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {l.ctaTitle}
          </h2>

          <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
            {l.ctaDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/affiliate"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1b6ef3] font-bold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {l.ctaButton}
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
            <Link
              to="/legecy-keeper-token"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
            >
              {l.ctaViewDetails}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LKT;
