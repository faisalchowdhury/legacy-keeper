import "./landingPage.css";
import Home from "../../assets/Home.png";
import StatsCounterSection from "../../components/StatsCounterSection";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import FeaturesSection from "../../components/FeturedSection";
import { useLanguage } from "../../i18n/LanguageContext";

const LandingPage: React.FC = () => {
  const { t } = useLanguage();
  const l = t.landing;

  return (
    <div className="landing-page bg-white">
      <Header />
      <div className="main pt-30">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-white">
          <div className="hero-background absolute inset-0 z-0"></div>
          <div className="parallax-circle-1" style={{ transform: `translateY(${scrollY * 0.2}px)` }}></div>
          <div className="parallax-circle-2" style={{ transform: `translateY(${scrollY * -0.15}px)` }}></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left Column */}
              <div className="flex-1 w-full lg:w-1/2 animate-fadeInUp">
                <div className="hero-badge inline-flex items-center gap-2 px-6 py-3 bg-accent/8 border border-accent/20 rounded-full text-sm font-semibold text-accent mb-8 shadow-sm">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  {l.heroBadge}
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-8 tracking-tight text-[#1e2332]">
                  {l.heroTitle}{" "}
                  <span className="gradient-text-animated">{l.heroTitleAccent}</span>
                  <br />
                  <span className="gradient-text">{l.heroTitleLine2}</span>
                </h1>

                <p className="text-lg sm:text-xl text-[#6b7280] mb-12 leading-relaxed max-w-2xl">
                  {l.heroDesc}
                  <span className="text-accent font-semibold">{l.heroDescAccent}</span>
                  {l.heroDescEnd}
                </p>

                {/* Store Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a href="https://apps.apple.com" className="store-button group">
                    <svg className="w-8 h-8 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-secondary/70">{l.downloadOnThe}</div>
                      <div className="text-lg font-semibold">{l.appStore}</div>
                    </div>
                  </a>

                  <a href="https://play.google.com" className="store-button group">
                    <svg className="w-8 h-8 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    <div className="text-left">
                      <div className="text-xs text-secondary/70">{l.getItOn}</div>
                      <div className="text-lg font-semibold">{l.googlePlay}</div>
                    </div>
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-6 lg:gap-8">
                  <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-[#e2e8f0] shadow-sm">
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                    </svg>
                    <span className="text-sm font-medium text-[#1e2332]">{l.localStorageBadge}</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-[#e2e8f0] shadow-sm">
                    <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                    </svg>
                    <span className="text-sm font-medium text-[#1e2332]">{l.encryptedBadge}</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Phone Mockup */}
              <div
                className="flex-1 w-full lg:w-1/2 hidden lg:flex justify-center items-center animate-fadeInRight"
                style={{ transform: `translateY(${scrollY * 0.1}px)`, transition: "transform 0.1s ease-out" }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-transparent blur-3xl scale-150"></div>
                  <div className="phone-mockup-premium relative">
                    <div className="phone-screen-premium overflow-hidden">
                      <img src={Home} alt="Legacy Keeper App Preview" className="w-full h-full object-cover" />
                    </div>
                    <div className="phone-notch"></div>
                    <div className="floating-element floating-1">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <div className="floating-element floating-2">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="floating-element floating-3">
                      <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* How It Works */}
        <section className="how-it-works-section py-24 lg:py-32 relative overflow-hidden bg-white">
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-100"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="text-center mb-20">
              <div className="inline-block px-6 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent mb-6 shadow-glow-sm">
                {l.simpleProcess}
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#1e2332]">
                {l.howItWorksTitle1}{" "}
                <span className="gradient-text">{l.howItWorksTitle2}</span>{" "}
                {l.howItWorksTitle3}
              </h2>
              <p className="text-lg text-[#6b7280] max-w-2xl mx-auto">{l.howItWorksDesc}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {l.steps.map((step, index) => (
                <div
                  key={index}
                  className="step-card-premium group relative p-8 bg-white border border-[#e2e8f0] rounded-3xl transition-all duration-500 hover:border-accent/50 hover:-translate-y-2 hover:shadow-glow cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-glow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                  <div className="relative">
                    <h3 className="text-2xl font-bold mb-4 text-[#1e2332] group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[#6b7280] leading-relaxed text-lg">{step.desc}</p>
                  </div>
                  {index < 3 && index % 2 === 0 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-accent/30 group-hover:text-accent/60 transition-colors">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                  <div className="shimmer-effect"></div>
                </div>
              ))}
            </div>

            <div className="lg:hidden flex justify-center mt-12 gap-2">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-100"></div>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-200"></div>
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-300"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsCounterSection />

        {/* Privacy Section */}
        <section id="privacy" className="py-24 lg:py-32 bg-[#f5f8ff] relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-6 py-2 bg-accent/10 border border-accent/50 rounded-full text-sm font-semibold text-accent mb-8 shadow-glow-sm">
                  {l.ourPromise}
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-[#1e2332]">
                  {l.privacyTitle}{" "}
                  <span className="gradient-text">{l.privacyTitleAccent}</span>
                </h2>
                <p className="text-lg text-[#6b7280] leading-relaxed mb-12">{l.privacyDesc}</p>
                <div className="space-y-6">
                  {l.privacyPoints.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 text-lg group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <svg className="w-5 h-5 text-accent" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <span className="text-[#4b5563] group-hover:text-accent transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex justify-center items-center">
                <div className="shield-icon w-[300px] h-[300px] flex items-center justify-center animate-rotate-slow">
                  <svg
                    className="w-full h-full text-accent opacity-60"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ filter: "drop-shadow(0 0 30px rgba(27, 110, 243, 0.2))" }}
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section id="download" className="py-24 lg:py-32 bg-gradient-to-br from-[#1b6ef3] to-[#00b4f0] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"></div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-white">
              {l.downloadTitle}{" "}
              <span className="text-white/90">{l.downloadTitleAccent}</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">{l.downloadDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://apps.apple.com" className="store-button-large group">
                <svg className="w-10 h-10 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-black">{l.downloadOnTheLarge}</div>
                  <div className="text-xl font-semibold text-[#1e2332]">{l.appStore}</div>
                </div>
              </a>
              <a href="https://play.google.com" className="store-button-large group">
                <svg className="w-10 h-10 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-black">{l.getItOnLarge}</div>
                  <div className="text-xl font-semibold text-[#1e2332]">{l.googlePlay}</div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
