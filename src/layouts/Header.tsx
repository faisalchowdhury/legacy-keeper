import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle navigation - works from any page
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();

    // If we're on the contact page (or any page other than home), navigate to home first
    if (location.pathname !== "/") {
      // Navigate to home with hash
      window.location.href = `/#${sectionId}`;
    } else {
      // We're on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Close mobile menu
    setMobileMenuOpen(false);
  };

  return (
    <div>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-dark-nav backdrop-blur-xl py-4"
            : "bg-white/80 backdrop-blur-sm py-6 shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center">
                <img src={Logo} alt="Legacy Keeper Logo" className="w-18" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 items-center">
              <a
                href="#features"
                onClick={(e) => handleNavClick(e, "features")}
                className="nav-link text-[#4b5563] hover:text-accent transition-all duration-300 font-medium"
              >
                Features
              </a>
              <Link
                to={"/privacy-policy"}
                className="nav-link text-[#4b5563] hover:text-accent transition-all duration-300 font-medium"
              >
                Privacy
              </Link>
              <a
                href="#download"
                onClick={(e) => handleNavClick(e, "download")}
                className="nav-link text-[#4b5563] hover:text-accent transition-all duration-300 font-medium"
              >
                Download
              </a>
              <Link
                to="/contact"
                className="nav-link text-[#4b5563] hover:text-accent transition-all duration-300 font-medium"
              >
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-white focus:outline-none z-50"
              aria-label="Toggle mobile menu"
            >
              <div className="hamburger-menu">
                <span
                  className={`hamburger-line ${mobileMenuOpen ? "active" : ""}`}
                ></span>
                <span
                  className={`hamburger-line ${mobileMenuOpen ? "active" : ""}`}
                ></span>
                <span
                  className={`hamburger-line ${mobileMenuOpen ? "active" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white backdrop-blur-xl shadow-2xl z-40 transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          <nav className="flex flex-col gap-6">
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="mobile-nav-link text-2xl font-semibold text-[#1e2332] hover:text-accent transition-all duration-300 transform hover:translate-x-2"
            >
              Features
            </a>
            <a
              href="#privacy"
              onClick={(e) => handleNavClick(e, "privacy")}
              className="mobile-nav-link text-2xl font-semibold text-[#1e2332] hover:text-accent transition-all duration-300 transform hover:translate-x-2"
            >
              Privacy
            </a>
            <a
              href="#download"
              onClick={(e) => handleNavClick(e, "download")}
              className="mobile-nav-link text-2xl font-semibold text-[#1e2332] hover:text-accent transition-all duration-300 transform hover:translate-x-2"
            >
              Download
            </a>
            <Link
              to="/contact"
              className="mobile-nav-link text-2xl font-semibold text-[#1e2332] hover:text-accent transition-all duration-300 transform hover:translate-x-2"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="mt-auto pt-8 border-t border-[#e2e8f0]">
            <p className="text-[#9ca3af] text-sm">© 2026 Legacy Keeper</p>
          </div>
        </div>

        {/* Decorative Glow */}
        <div className="mobile-menu-glow absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </div>
  );
}
