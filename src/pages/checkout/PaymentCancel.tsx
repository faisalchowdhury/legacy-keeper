import React from "react";
import { Link } from "react-router";
import { XCircle, ArrowLeft } from "lucide-react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const PaymentCancel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f8ff] via-white to-[#f5f8ff]">
      <Header />

      <section className="pt-32 pb-24 px-4">
        <div className="container mx-auto max-w-xl">
          <div className="bg-white rounded-3xl border border-[#e2e8f0] shadow-[0_8px_30px_rgba(27,110,243,0.08)] p-10 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#f5f8ff] mb-6">
              <XCircle size={48} className="text-[#9ca3af]" />
            </div>
            <h1 className="text-2xl font-bold text-[#1e2332] mb-3">
              Checkout cancelled
            </h1>
            <p className="text-[#6b7280] mb-8">
              No worries — you haven't been charged. You can pick up where you
              left off whenever you're ready.
            </p>
            <Link
              to="/checkout"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#1b6ef3] to-[#00b4f0] text-white font-bold rounded-full shadow-[0_8px_20px_rgba(27,110,243,0.3)] hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft size={18} /> Back to checkout
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PaymentCancel;
