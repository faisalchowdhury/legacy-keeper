import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { CheckCircle2, Loader2, XCircle, ArrowRight } from "lucide-react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { getPaymentStatus } from "../../api/payment";
import type { PaymentStatus } from "../../api/payment";

const POLL_ATTEMPTS = 6;
const POLL_DELAY_MS = 1500;

const PaymentSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState<PaymentStatus | "loading" | "unknown">(
    "loading",
  );
  const [email, setEmail] = useState<string | undefined>();

  useEffect(() => {
    if (!sessionId) {
      setStatus("unknown");
      return;
    }

    let cancelled = false;
    let attempt = 0;

    // The webhook that marks the order as paid may arrive a moment after the
    // browser redirect, so we poll a few times before giving up.
    const poll = async () => {
      try {
        const res = await getPaymentStatus(sessionId);
        if (cancelled) return;

        if (res.status === "paid") {
          setEmail(res.customerEmail);
          setStatus("paid");
          return;
        }
        if (res.status === "failed" || res.status === "expired") {
          setStatus(res.status);
          return;
        }
      } catch (err) {
        console.error("Failed to fetch payment status:", err);
      }

      attempt += 1;
      if (attempt < POLL_ATTEMPTS && !cancelled) {
        setTimeout(poll, POLL_DELAY_MS);
      } else if (!cancelled) {
        setStatus("unknown");
      }
    };

    poll();
    return () => {
      cancelled = true;
    };
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-white to-[#f5f8ff]">
      <Header />

      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-xl">
          <div className="bg-white rounded-3xl border border-[#e2e8f0] shadow-[0_8px_30px_rgba(27,110,243,0.08)] p-10 text-center">
            {status === "loading" && (
              <>
                <Loader2
                  size={56}
                  className="mx-auto mb-6 text-accent animate-spin"
                />
                <h1 className="text-2xl font-bold text-[#1e2332] mb-2">
                  Confirming your payment…
                </h1>
                <p className="text-[#6b7280]">
                  This only takes a few seconds. Please don't close this tab.
                </p>
              </>
            )}

            {status === "paid" && (
              <>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-6">
                  <CheckCircle2 size={48} className="text-green-500" />
                </div>
                <h1 className="text-3xl font-bold text-[#1e2332] mb-3">
                  Payment successful 🎉
                </h1>
                <p className="text-[#6b7280] mb-2">
                  Thank you for your purchase! Your access is now active.
                </p>
                {email && (
                  <p className="text-[#6b7280] mb-8">
                    A receipt has been sent to{" "}
                    <span className="font-semibold text-[#1e2332]">
                      {email}
                    </span>
                    .
                  </p>
                )}
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1b6ef3] to-[#00b4f0] text-white font-bold rounded-full shadow-[0_8px_20px_rgba(27,110,243,0.3)] hover:scale-105 transition-all duration-300"
                >
                  Back to home <ArrowRight size={18} />
                </Link>
              </>
            )}

            {(status === "failed" ||
              status === "expired" ||
              status === "unknown") && (
              <>
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-50 mb-6">
                  <XCircle size={48} className="text-amber-500" />
                </div>
                <h1 className="text-2xl font-bold text-[#1e2332] mb-3">
                  We couldn't confirm your payment
                </h1>
                <p className="text-[#6b7280] mb-8">
                  If you completed the payment, it may take a moment to appear.
                  You'll receive an email receipt once it's confirmed. If you
                  were charged but don't get a receipt, please contact support.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/checkout"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1b6ef3] to-[#00b4f0] text-white font-bold rounded-full hover:scale-105 transition-all duration-300"
                  >
                    Try again
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-[#e2e8f0] text-[#1e2332] font-bold rounded-full hover:border-accent transition-all duration-300"
                  >
                    Contact support
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
