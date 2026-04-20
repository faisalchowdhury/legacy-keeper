import React, { useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";

const Contact: React.FC = () => {
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate API call - Replace with your actual API endpoint
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header></Header>
      <section className="contact-section py-24 lg:py-60 relative overflow-hidden bg-[#f5f8ff]">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern */}
        <div className="grid-pattern absolute inset-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent mb-6 shadow-glow-sm backdrop-blur-xl">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#1e2332]">
              We're Here to <span className="gradient-text">Help You</span>
            </h2>
            <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">
              Have questions about Legacy Keeper? Our team is ready to assist
              you in securing your legacy.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Column - Contact Form */}
            <div className="contact-form-container relative">
              <div className="contact-form-card p-8 lg:p-10 bg-white border border-[#e2e8f0] rounded-3xl shadow-sm">
                <h3 className="text-2xl font-bold mb-8 text-[#1e2332]">Send us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="form-group">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold mb-3 text-[#4b5563]"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="form-input w-full px-5 py-4 bg-white border border-[#e2e8f0] rounded-2xl text-[#1e2332] placeholder-[#9ca3af] focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="form-group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold mb-3 text-[#4b5563]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="form-input w-full px-5 py-4 bg-white border border-[#e2e8f0] rounded-2xl text-[#1e2332] placeholder-[#9ca3af] focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none"
                      required
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="form-group">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold mb-3 text-[#4b5563]"
                    >
                      Subject
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
                        Select a topic
                      </option>
                      <option value="general" className="bg-white">
                        General Inquiry
                      </option>
                      <option value="support" className="bg-white">
                        Technical Support
                      </option>
                      <option value="feedback" className="bg-white">
                        Feedback
                      </option>
                      <option value="partnership" className="bg-white">
                        Partnership
                      </option>
                      <option value="other" className="bg-white">
                        Other
                      </option>
                    </select>
                  </div>

                  {/* Message Textarea */}
                  <div className="form-group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold mb-3 text-[#4b5563]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="form-input w-full px-5 py-4 bg-white border border-[#e2e8f0] rounded-2xl text-[#1e2332] placeholder-[#9ca3af] focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 outline-none resize-none"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`submit-button w-full py-4 px-8 bg-gradient-to-r from-accent to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden ${isSubmitting ? "loading opacity-70 cursor-not-allowed" : ""}`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? "Sending..." : "Send Message"}
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

                  {/* Success/Error Messages */}
                  {submitStatus === "success" && (
                    <div className="success-message">
                      ✓ Thank you! Your message has been sent successfully.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="error-message">
                      ✕ Something went wrong. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Right Column - Contact Info */}
            <div className="space-y-6">
              {/* Email Card */}
              <div className="contact-info-card p-8 bg-white border border-[#e2e8f0] rounded-3xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-glow-sm group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-blue-600 rounded-2xl flex items-center justify-center shadow-glow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 text-[#1e2332] group-hover:text-accent transition-colors">
                      Email Us
                    </h4>
                    <p className="text-[#9ca3af] mb-3">
                      Get in touch via email
                    </p>
                    <a
                      href="mailto:support@legacykeeper.com"
                      className="text-accent hover:underline font-medium"
                    >
                      support@legacykeeper.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="contact-info-card p-8 bg-white border border-[#e2e8f0] rounded-3xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-glow-sm group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-glow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 text-[#1e2332] group-hover:text-accent transition-colors">
                      Call Us
                    </h4>
                    <p className="text-[#9ca3af] mb-3">
                      Mon-Fri from 8am to 6pm
                    </p>
                    <a
                      href="tel:+1234567890"
                      className="text-accent hover:underline font-medium"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-info-card p-8 bg-white border border-[#e2e8f0] rounded-3xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-1 hover:shadow-glow-sm group">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-glow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2 text-[#1e2332] group-hover:text-accent transition-colors">
                      Visit Us
                    </h4>
                    <p className="text-[#9ca3af] mb-3">
                      Come say hello at our office
                    </p>
                    <p className="text-[#4b5563]">
                      123 Legacy Street
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-8 bg-white border border-[#e2e8f0] rounded-3xl">
                <h4 className="text-xl font-semibold mb-6 text-[#1e2332]">Follow Us</h4>
                <div className="flex gap-4">
                  {/* Facebook */}
                  <a
                    href="#"
                    className="social-icon w-12 h-12 bg-[#f5f8ff] border border-[#e2e8f0] rounded-xl flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 text-[#6b7280] group-hover:text-accent transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a
                    href="#"
                    className="social-icon w-12 h-12 bg-[#f5f8ff] border border-[#e2e8f0] rounded-xl flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 text-[#6b7280] group-hover:text-accent transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="social-icon w-12 h-12 bg-[#f5f8ff] border border-[#e2e8f0] rounded-xl flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 text-[#6b7280] group-hover:text-accent transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="#"
                    className="social-icon w-12 h-12 bg-[#f5f8ff] border border-[#e2e8f0] rounded-xl flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <svg
                      className="w-5 h-5 text-[#6b7280] group-hover:text-accent transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Contact;
