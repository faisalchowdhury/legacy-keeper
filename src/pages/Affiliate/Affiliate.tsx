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

export const Affiliate: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-[#ffffff] to-[#f5f8ff] pt-20">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(255,215,0,0.1)] border border-[rgba(255,215,0,0.3)] rounded-full text-sm font-semibold text-[#f59e0b] mb-6">
              <Gift size={20} />
              Referral Rewards Program
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#1e2332]">
              Share Legacy Keeper,{" "}
              <span className="gradient-text">Earn Rewards</span>
            </h1>
            <p className="text-lg text-[#6b7280] mb-8 leading-relaxed">
              Help your friends and family secure their legacy while earning
              coins to unlock premium features. Everyone wins when you share the
              gift of peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#download"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all"
              >
                Start Referring <Share2 size={20} />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#e2e8f0] rounded-full text-[#1e2332] font-semibold hover:border-[#00d4ff] transition-all"
              >
                How It Works <ArrowRight size={20} />
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
              <p className="text-[#6b7280] font-medium">Coins Per Referral</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff] border border-[rgba(0,212,255,0.2)] rounded-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full mb-4">
                <Users size={40} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#1e2332] mb-2">∞</h3>
              <p className="text-[#6b7280] font-medium">Unlimited Referrals</p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#f3e8ff] to-[#faf5ff] border border-[rgba(168,85,247,0.2)] rounded-2xl">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#a855f7] to-[#9333ea] rounded-full mb-4">
                <Trophy size={40} className="text-white" />
              </div>
              <h3 className="text-4xl font-bold text-[#1e2332] mb-2">Free</h3>
              <p className="text-[#6b7280] font-medium">Premium Features</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2332] mb-6">
              How the <span className="gradient-text">Referral Program</span>{" "}
              Works
            </h2>
            <p className="text-lg text-[#6b7280]">
              Simple, transparent, and rewarding. Start earning coins in just 3
              easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: <Share2 size={40} />,
                title: "Share Your Link",
                desc: "Get your unique referral link from the app and share it with friends, family, or on social media.",
              },
              {
                step: "02",
                icon: <Users size={40} />,
                title: "They Sign Up",
                desc: "When someone downloads Legacy Keeper using your link and creates their account, you're on your way!",
              },
              {
                step: "03",
                icon: <Coins size={40} />,
                title: "Earn 500 Coins",
                desc: "You instantly receive 500 coins once they complete their first will setup. Start unlocking features!",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white border border-[#e2e8f0] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {item.step}
                </div>
                <div className="text-[#00d4ff] mb-6 mt-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#1e2332] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Unlock */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1e2332] mb-6">
              Unlock Premium <span className="gradient-text">Features</span>{" "}
              with Coins
            </h2>
            <p className="text-lg text-[#6b7280]">
              Use your earned coins to access advanced features and enhance your
              Legacy Keeper experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Unlock size={32} />,
                feature: "Funeral Wishes",
                coins: 1000,
                desc: "Document your complete funeral and memorial service preferences.",
                color: "from-[#00d4ff] to-[#0066ff]",
              },
              {
                icon: <Unlock size={32} />,
                feature: "Advanced Asset Tracking",
                coins: 1500,
                desc: "Track unlimited assets with detailed categorization and notes.",
                color: "from-[#a855f7] to-[#9333ea]",
              },
              {
                icon: <Unlock size={32} />,
                feature: "Multiple Executors",
                coins: 800,
                desc: "Assign multiple executors with different responsibilities.",
                color: "from-[#fbbf24] to-[#f59e0b]",
              },
              {
                icon: <Unlock size={32} />,
                feature: "Digital Legacy Letters",
                coins: 1200,
                desc: "Write personalized letters to be delivered after you're gone.",
                color: "from-[#00d4ff] to-[#0066ff]",
              },
              {
                icon: <Unlock size={32} />,
                feature: "Encrypted File Storage",
                coins: 2000,
                desc: "Store important documents and files securely in the app.",
                color: "from-[#a855f7] to-[#9333ea]",
              },
              {
                icon: <Unlock size={32} />,
                feature: "Priority Support",
                coins: 500,
                desc: "Get faster responses and dedicated customer support.",
                color: "from-[#fbbf24] to-[#f59e0b]",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f5f8ff] border border-[#e2e8f0] rounded-2xl p-6 hover:shadow-lg transition-all group"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl mb-4 text-white group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#1e2332]">
                    {item.feature}
                  </h3>
                  <div className="flex items-center gap-1 text-[#f59e0b] font-bold">
                    <Coins size={18} />
                    <span>{item.coins}</span>
                  </div>
                </div>
                <p className="text-[#6b7280] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#6b7280] mb-4">
              <strong className="text-[#1e2332]">Pro Tip:</strong> Refer just{" "}
              <strong className="text-[#00d4ff]">2 friends</strong> to unlock
              Funeral Wishes!
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-gradient-to-br from-[#00d4ff]/10 to-[#0066ff]/10 border border-[#00d4ff]/20 rounded-3xl p-10 lg:p-12">
            <h2 className="text-3xl font-bold text-[#1e2332] mb-8 text-center">
              Why Refer <span className="gradient-text">Legacy Keeper?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Star size={24} />,
                  title: "Help Loved Ones",
                  desc: "Give your friends and family the peace of mind that comes with being prepared.",
                },
                {
                  icon: <Trophy size={24} />,
                  title: "Earn While You Share",
                  desc: "Get rewarded with coins for every successful referral—no limits!",
                },
                {
                  icon: <Unlock size={24} />,
                  title: "Unlock Premium Features",
                  desc: "Access advanced features for free using the coins you earn.",
                },
                {
                  icon: <Shield size={24} />,
                  title: "Promote Privacy",
                  desc: "Share a tool that respects privacy with 100% device-only storage.",
                },
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-xl flex items-center justify-center text-white">
                    {benefit.icon}
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

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-[#1e2332] mb-12 text-center">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "How do I get my referral link?",
                a: "Once you download Legacy Keeper and create an account, you'll find your unique referral link in the 'Referrals' section of the app. Simply copy and share!",
              },
              {
                q: "When do I receive my coins?",
                a: "You receive 500 coins instantly when your referred friend completes their first will setup in the app. The coins are automatically added to your account.",
              },
              {
                q: "Is there a limit to how many people I can refer?",
                a: "Nope! There's no limit. Refer as many people as you like and keep earning coins. The more you share, the more features you unlock!",
              },
              {
                q: "Do coins expire?",
                a: "No, your earned coins never expire. You can save them up and use them whenever you're ready to unlock features.",
              },
              {
                q: "Can I share my referral link on social media?",
                a: "Absolutely! Share your link anywhere—Facebook, Twitter, Instagram, email, text message, or even in person. Spread the word!",
              },
              {
                q: "What if my friend already has the app?",
                a: "They need to download and sign up using your unique referral link to count as a successful referral. Existing users won't count toward your rewards.",
              },
            ].map((faq, i) => (
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

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-[#00d4ff]/10 to-[#0066ff]/10 border-2 border-[#00d4ff]/30 rounded-3xl p-12">
            <Gift size={64} className="text-[#00d4ff] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[#1e2332] mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-lg text-[#6b7280] mb-8 max-w-2xl mx-auto">
              Download Legacy Keeper now, get your referral link, and start
              sharing the gift of peace of mind while unlocking premium features
              for yourself!
            </p>
            <Link
              to="/#download"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#0066ff] rounded-full text-white font-semibold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all text-lg"
            >
              Download & Start Referring <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Affiliate;
