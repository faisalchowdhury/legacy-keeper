import React, { useState } from "react";
import { useSearchParams } from "react-router";
import { Check, ShieldCheck, Lock, Loader2, AlertCircle } from "lucide-react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { createCheckoutSession } from "../../api/payment";

/**
 * Single digital product sold on the landing page.
 * Price is shown for display only — the REAL price is set on the backend /
 * in Stripe (never trust an amount sent from the browser).
 */
const PRODUCT = {
  id: "legacy-keeper-pro",
  name: "Legacy Keeper Pro",
  tagline: "Lifetime access to the full digital legacy toolkit",
  priceLabel: "$3.99",
  priceCaption: "one-time payment",
  features: [
    "Unlimited digital will entries",
    "Secure asset & document vault",
    "Executor & funeral-wish management",
    "Priority support",
    "All future updates included",
  ],
};

const Checkout: React.FC = () => {
  const [searchParams] = useSearchParams();
  // The buyer is identified by ?userId=... on the checkout link.
  const userId = searchParams.get("userId") ?? undefined;

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleBuy = async () => {
    setError(null);

    if (!userId) {
      setError(
        "This checkout link is missing a user id. Please open it again from the app.",
      );
      return;
    }

    setLoading(true);
    try {
      const { url } = await createCheckoutSession({
        userId,
        customerEmail: email.trim() || undefined,
      });
      // Hand off to the Stripe-hosted checkout page.
      window.location.href = url;
    } catch (err) {
      console.error("Failed to start checkout:", err);
      setError(
        "We couldn't start the checkout. Please try again in a moment.",
      );
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-white to-[#f5f8ff]">
      <Header />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/25 rounded-full text-sm font-semibold text-accent mb-5">
              <Lock size={16} />
              Secure checkout powered by Stripe
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e2332] mb-3">
              Get <span className="gradient-text">{PRODUCT.name}</span>
            </h1>
            <p className="text-lg text-[#6b7280]">{PRODUCT.tagline}</p>
          </div>

          <div className="bg-white rounded-3xl border border-[#e2e8f0] shadow-[0_8px_30px_rgba(27,110,243,0.08)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Features */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-[#e2e8f0]">
                <h2 className="text-lg font-bold text-[#1e2332] mb-5">
                  What's included
                </h2>
                <ul className="space-y-3">
                  {PRODUCT.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#1b6ef3] to-[#00b4f0] flex items-center justify-center text-white">
                        <Check size={14} />
                      </span>
                      <span className="text-[#4b5563]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Purchase */}
              <div className="p-8 flex flex-col">
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-[#1e2332]">
                      {PRODUCT.priceLabel}
                    </span>
                    <span className="text-[#9ca3af]">
                      {PRODUCT.priceCaption}
                    </span>
                  </div>
                </div>

                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[#1e2332] mb-2"
                >
                  Email for your receipt
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#e2e8f0] bg-[#f5f8ff] text-[#1e2332] placeholder-[#9ca3af] focus:outline-none focus:border-accent focus:bg-white transition-all mb-5"
                />

                {error && (
                  <div className="flex items-start gap-2 text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-4">
                    <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  onClick={handleBuy}
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-[#1b6ef3] to-[#00b4f0] text-white font-bold rounded-full shadow-[0_8px_20px_rgba(27,110,243,0.3)] hover:shadow-[0_12px_30px_rgba(27,110,243,0.4)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Redirecting…
                    </>
                  ) : (
                    <>
                      <Lock size={18} />
                      Pay {PRODUCT.priceLabel}
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-[#9ca3af]">
                  <ShieldCheck size={14} />
                  <span>
                    Secured by Stripe. We never see your card details.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
