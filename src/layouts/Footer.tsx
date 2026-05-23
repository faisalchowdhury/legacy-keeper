import Logo from "../assets/logo.svg";
import { Link } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";
import { Facebook, Send, Twitter } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-[#f5f8ff] border-t border-[#e2e8f0] py-16 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link to="/" className="transition-transform hover:scale-105">
              <img src={Logo} alt="Legacy Keeper Logo" className="w-32" />
            </Link>
            <p className="text-[#6b7280] text-center md:text-left">
              {t.footer.tagline}
            </p>
          </div>
          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <Link
              to="/privacy-policy"
              className="text-[#6b7280] hover:text-accent transition-all duration-300 font-medium hover:translate-y-[-2px]"
            >
              {t.footer.privacy}
            </Link>
            <Link
              to="/terms"
              className="text-[#6b7280] hover:text-accent transition-all duration-300 font-medium hover:translate-y-[-2px]"
            >
              {t.footer.terms}
            </Link>
            <Link
              to="/contact"
              className="text-[#6b7280] hover:text-accent transition-all duration-300 font-medium hover:translate-y-[-2px]"
            >
              {t.footer.contact}
            </Link>
          </div>
          {/* Social Links */}

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

        <div className="border-t border-[#e2e8f0] mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-[#9ca3af] text-center md:text-left">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#e2e8f0] shadow-sm">
            <svg
              className="w-4 h-4 text-accent"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
            </svg>
            <span className="text-[#6b7280] text-xs font-medium">
              {t.footer.badge}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
