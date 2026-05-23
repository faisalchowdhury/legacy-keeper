import React, { useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { useLanguage } from "../../i18n/LanguageContext";
import dex from "../../assets/dex.png";
import { Mail, Send, Facebook, Twitter } from "lucide-react";
const Contact: React.FC = () => {
  const { t } = useLanguage();
  const c = t.contact;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <section className="contact-section py-24 lg:py-60 relative overflow-hidden bg-[#f5f8ff]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent mb-6 shadow-glow-sm backdrop-blur-xl">
              {c.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#1e2332]">
              {c.title} <span className="gradient-text">{c.titleAccent}</span>
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">{c.desc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="contact-form-container relative">
              <div className="contact-form-card p-8 lg:p-10 bg-white border border-[#e2e8f0] rounded-3xl shadow-sm">
                <h3 className="text-2xl font-bold mb-8 text-[#1e2332]">
                  {c.formTitle}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-3 text-[#4b5563]"
                    >
                      {c.fullName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={c.namePlaceholder}
                      className="form-input w-full px-5 py-4 bg-white border border-[#e2e8f0] rounded-2xl text-[#1e2332] placeholder-[#9ca3af] focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-3 text-[#4b5563]"
                    >
                      {c.emailAddress}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={c.emailPlaceholder}
                      className="form-input w-full px-5 py-4 bg-white border border-[#e2e8f0] rounded-2xl text-[#1e2332] placeholder-[#9ca3af] focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold mb-3 text-[#4b5563]"
                    >
                      {c.subject}
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input w-full px-5 py-4 bg-white border border-[#e2e8f0] rounded-2xl text-[#1e2332] focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none appearance-none cursor-pointer"
                      required
                    >
                      <option value="" className="bg-white">
                        {c.selectTopic}
                      </option>
                      <option value="general" className="bg-white">
                        {c.generalInquiry}
                      </option>
                      <option value="support" className="bg-white">
                        {c.technicalSupport}
                      </option>
                      <option value="feedback" className="bg-white">
                        {c.feedback}
                      </option>
                      <option value="partnership" className="bg-white">
                        {c.partnership}
                      </option>
                      <option value="other" className="bg-white">
                        {c.other}
                      </option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-3 text-[#4b5563]"
                    >
                      {c.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={c.messagePlaceholder}
                      className="form-input w-full px-5 py-4 bg-white border border-[#e2e8f0] rounded-2xl text-[#1e2332] placeholder-[#9ca3af] focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`submit-button w-full py-4 px-8 bg-gradient-to-r from-accent to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden ${isSubmitting ? "loading opacity-70 cursor-not-allowed" : ""}`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? c.sending : c.sendMessage}
                      {!isSubmitting && (
                        <svg
                          className="w-5 h-5 transition-transform group-hover:translate-x-1"
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
                      )}
                    </span>
                    {!isSubmitting && <div className="button-shimmer"></div>}
                  </button>

                  {submitStatus === "success" && (
                    <div className="success-message">{c.successMessage}</div>
                  )}
                  {submitStatus === "error" && (
                    <div className="error-message">{c.errorMessage}</div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="contact-info-card p-8 bg-white border border-[#e2e8f0] rounded-3xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-glow-sm group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-blue-600 rounded-2xl flex items-center justify-center shadow-glow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 text-[#1e2332] group-hover:text-accent transition-colors">
                      {c.emailUs}
                    </h4>
                    <p className="text-[#9ca3af] mb-3">{c.emailSubtitle}</p>
                    <a
                      href="mailto:info@legacykeeper.nl"
                      className="text-accent hover:underline font-medium"
                    >
                      info@legacykeeper.nl
                    </a>
                  </div>
                </div>
              </div>

              {/* Telegram Card */}
              <div className="contact-info-card p-8 bg-white border border-[#e2e8f0] rounded-3xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-glow-sm group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#0088cc] to-[#00a8e8] rounded-2xl flex items-center justify-center shadow-glow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Send className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 text-[#1e2332] group-hover:text-accent transition-colors">
                      {c.telegram}
                    </h4>
                    <p className="text-[#9ca3af] mb-3">{c.telegramSubtitle}</p>
                    <a
                      href="https://t.me/legacykeeper"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium inline-flex items-center gap-2"
                    >
                      <Send size={14} />
                      t.me/legacykeeper
                    </a>
                  </div>
                </div>
              </div>

              {/* Dexscreener Card */}
              <div className="contact-info-card p-8 bg-white border border-[#e2e8f0] rounded-3xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-glow-sm group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl flex items-center justify-center shadow-glow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 overflow-hidden">
                    <img
                      src={dex}
                      alt="Dexscreener"
                      className="w-9 h-9 object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 text-[#1e2332] group-hover:text-accent transition-colors">
                      DexScreener
                    </h4>
                    <p className="text-[#9ca3af] mb-3">
                      Track your token analytics and charts
                    </p>
                    <a
                      href="https://dexscreener.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium inline-flex items-center gap-2"
                    >
                      <span>📊</span>
                      dexscreener.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-white border border-[#e2e8f0] rounded-3xl">
                <h4 className="text-xl font-semibold mb-6 text-[#1e2332]">
                  {c.followUs}
                </h4>
                <div className="flex items-center gap-4">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/share/1bpDiQjaHS/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-[#e2e8f0] text-[#6b7280] hover:text-accent hover:border-accent/50 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com/legacykeeperapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-[#e2e8f0] text-[#6b7280] hover:text-accent hover:border-accent/50 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
                    aria-label="X"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>

                  {/* Telegram */}
                  <a
                    href="https://t.me/legacykeeperapp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white border border-[#e2e8f0] text-[#6b7280] hover:text-accent hover:border-accent/50 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
                    aria-label="Telegram"
                  >
                    <Send className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
