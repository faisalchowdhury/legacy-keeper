import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router";
import { useLanguage } from "../i18n/LanguageContext";
// Import audio files directly
import defaultAudio from "../assets/LegacyKeeper.mp3";
import rewardAudio from "../assets/rewardprogram.mp3";

export default function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [langMenuOpen, setLangMenuOpen] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.7);

  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", label: "EN", full: "English" },
    { code: "nl", label: "NL", full: "Nederlands" },
    { code: "de", label: "DE", full: "Deutsch" },
    { code: "fr", label: "FR", full: "Français" },
    { code: "es", label: "ES", full: "Español" },
    { code: "pt", label: "PT", full: "Português" },
    { code: "ru", label: "RU", full: "Русский" },
    { code: "ar", label: "AR", full: "العربية" },
    { code: "hi", label: "HI", full: "हिन्दी" },
    { code: "zh", label: "ZH", full: "中文" },
    { code: "ja", label: "JA", full: "日本語" },
    { code: "ko", label: "KO", full: "한국어" },
    { code: "tr", label: "TR", full: "Türkçe" },
    { code: "bn", label: "BN", full: "বাংলা" },
    { code: "ur", label: "UR", full: "اردو" },
  ];

  // Close language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langMenuRef.current &&
        !langMenuRef.current.contains(event.target as Node)
      ) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get audio source based on route (using imported files)
  const getAudioSrc = () => {
    if (
      location.pathname.includes("/affiliate") ||
      location.pathname.includes("/referral-reward")
    ) {
      return rewardAudio;
    }
    return defaultAudio;
  };

  // Get track label based on route
  const getTrackLabel = () => {
    if (location.pathname.includes("/affiliate")) {
      return "Affiliate Program";
    } else if (location.pathname.includes("/referral-reward")) {
      return "Referral Reward";
    }
    return "Official Track";
  };

  // Initialize audio when route changes
  useEffect(() => {
    if (audioRef.current) {
      const wasPlaying = isPlaying;
      audioRef.current.pause();
      audioRef.current.src = getAudioSrc();
      audioRef.current.load();
      if (wasPlaying) {
        audioRef.current.play().catch(console.error);
      }
    }
  }, [location.pathname]);

  // Setup audio on mount
  useEffect(() => {
    audioRef.current = new Audio(getAudioSrc());
    audioRef.current.volume = volume;
    audioRef.current.loop = true;

    const audio = audioRef.current;
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onDurationChange = () => setDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("ended", onEnded);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("ended", onEnded);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Update volume when changed
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
  };

  const toggleMute = () => setIsMuted(!isMuted);

  const seek = (value: number) => {
    if (!audioRef.current || !duration) return;
    audioRef.current.currentTime = value * duration;
    setCurrentTime(audioRef.current.currentTime);
  };

  const changeVolume = (value: number) => {
    setVolume(value);
    if (isMuted && value > 0) setIsMuted(false);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    seek(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)));
  };

  const fmt = (s: number) =>
    `${Math.floor(s / 60)}:${Math.floor(s % 60)
      .toString()
      .padStart(2, "0")}`;
  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes bar1 { 0%,100%{height:6px} 50%{height:16px} }
        @keyframes bar2 { 0%,100%{height:12px} 50%{height:5px} }
        @keyframes bar3 { 0%,100%{height:8px} 50%{height:18px} }
        @keyframes bar4 { 0%,100%{height:14px} 50%{height:6px} }
        @keyframes bar5 { 0%,100%{height:6px} 50%{height:12px} }
        .audio-volume::-webkit-slider-thumb{-webkit-appearance:none;width:12px;height:12px;border-radius:50%;background:linear-gradient(135deg,#1b6ef3,#00b4f0);cursor:pointer;box-shadow:0 0 6px rgba(27,110,243,0.4)}
        .audio-volume::-moz-range-thumb{width:12px;height:12px;border:none;border-radius:50%;background:linear-gradient(135deg,#1b6ef3,#00b4f0);cursor:pointer}
        .audio-volume{-webkit-appearance:none;height:3px;border-radius:99px;outline:none;cursor:pointer}
      `}</style>

      <div className="fixed top-0 left-0 right-0 z-50">
        <nav
          className={`relative z-20 transition-all duration-300 ${scrolled ? "bg-dark-nav backdrop-blur-xl py-3" : "bg-white/80 backdrop-blur-sm py-5 shadow-sm"}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex justify-between items-center">
              <Link to="/" className="flex items-center">
                <img src={Logo} alt="Legacy Keeper Logo" className="w-18" />
              </Link>

              <div className="hidden lg:flex gap-6 items-center">
                <a
                  href="#features"
                  onClick={(e) => handleNavClick(e, "features")}
                  className="nav-link text-[#4b5563] hover:text-accent transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  {t.nav.features}
                </a>
                <Link
                  to="/privacy-policy"
                  className="nav-link text-[#4b5563] hover:text-accent transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  {t.nav.privacy}
                </Link>
                <a
                  href="#download"
                  onClick={(e) => handleNavClick(e, "download")}
                  className="nav-link text-[#4b5563] hover:text-accent transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  {t.nav.download}
                </a>
                <Link
                  to="/contact"
                  className="nav-link text-[#4b5563] hover:text-accent transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  {t.nav.contact}
                </Link>
                <Link
                  to="/affiliate"
                  className="nav-link text-[#4b5563] hover:text-accent transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  {t.nav.affiliate}
                </Link>
                <Link
                  to="/referral-reward"
                  className="nav-link text-[#4b5563] hover:text-accent transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  {t.nav.referralReward}
                </Link>
                <Link
                  to="/legecy-keeper-token"
                  className="nav-link text-[#4b5563] hover:text-accent transition-all duration-300 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  {t.nav.lkt}
                </Link>

                <div className="relative" ref={langMenuRef}>
                  <button
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    className="flex items-center gap-2 px-3 xl:px-4 py-2 rounded-full border border-[#e2e8f0] bg-white shadow-sm hover:border-accent transition-all duration-300 text-sm font-semibold text-[#4b5563]"
                  >
                    <span>
                      {languages.find((l) => l.code === language)?.label}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${langMenuOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {langMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 max-h-[70vh] overflow-y-auto bg-white rounded-2xl shadow-xl border border-[#e2e8f0] py-2 z-[60] animate-in fade-in zoom-in duration-200 custom-scrollbar">
                      <div className="grid grid-cols-1 gap-1 px-2">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code as any);
                              setLangMenuOpen(false);
                            }}
                            className={`flex items-center justify-between px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${language === lang.code ? "bg-accent text-white" : "text-[#4b5563] hover:bg-[#f5f8ff] hover:text-accent"}`}
                          >
                            <span>{lang.full}</span>
                            {language === lang.code && (
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={toggleMobileMenu}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none z-50"
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

        {/* Audio Player Bar */}
        <div className="relative z-10 bg-white/95 backdrop-blur-xl border-b border-[#e2e8f0] shadow-[0_6px_24px_rgba(27,110,243,0.08)]">
          <div className="h-[2px] bg-gradient-to-r from-[#1b6ef3] via-[#00b4f0] to-[#1b6ef3]" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="flex items-center gap-4 py-2.5">
              {/* Waveform */}
              <div className="flex items-end gap-[3px] h-5 flex-shrink-0">
                {[
                  { anim: "bar1", baseH: 6 },
                  { anim: "bar2", baseH: 12 },
                  { anim: "bar3", baseH: 8 },
                  { anim: "bar4", baseH: 14 },
                  { anim: "bar5", baseH: 6 },
                ].map(({ anim, baseH }, i) => (
                  <div
                    key={i}
                    className="w-[3px] rounded-full bg-gradient-to-t from-[#1b6ef3] to-[#00b4f0]"
                    style={{
                      height: `${baseH}px`,
                      animation: isPlaying
                        ? `${anim} ${0.7 + i * 0.12}s ease-in-out infinite`
                        : "none",
                    }}
                  />
                ))}
              </div>

              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-[#1b6ef3] to-[#00b4f0] flex items-center justify-center text-white shadow-[0_4px_14px_rgba(27,110,243,0.35)] hover:scale-110 transition-all duration-200"
              >
                {isPlaying ? (
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 fill-current ml-0.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Track Info */}
              <div className="flex-shrink-0 hidden sm:block">
                <div className="text-xs font-semibold text-[#1e2332] leading-tight">
                  Legacy Keeper
                </div>
                <div className="text-[10px] text-[#9ca3af] leading-tight">
                  {getTrackLabel()}
                </div>
              </div>

              <div className="hidden sm:block w-px h-5 bg-[#e2e8f0] flex-shrink-0" />

              {/* Progress */}
              <div className="flex-1 flex items-center gap-3 min-w-0">
                <div
                  ref={progressRef}
                  onClick={handleProgressClick}
                  className="flex-1 h-1.5 bg-[#f1f5f9] rounded-full cursor-pointer relative group"
                >
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#1b6ef3] to-[#00b4f0]"
                    style={{ width: `${progressPct}%` }}
                  />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1b6ef3] shadow-[0_0_0_3px_rgba(27,110,243,0.15)] opacity-0 group-hover:opacity-100"
                    style={{ left: `calc(${progressPct}% - 7px)` }}
                  />
                </div>
                <span className="text-[11px] tabular-nums text-[#9ca3af] flex-shrink-0 hidden sm:block">
                  {fmt(currentTime)} / {fmt(duration)}
                </span>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={toggleMute}
                  className="text-[#9ca3af] hover:text-accent"
                >
                  {isMuted || volume === 0 ? (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.02}
                  value={isMuted ? 0 : volume}
                  onChange={(e) => changeVolume(Number(e.target.value))}
                  className="audio-volume w-16 hidden sm:block"
                  style={{
                    background: `linear-gradient(to right, #1b6ef3 ${(isMuted ? 0 : volume) * 100}%, #e2e8f0 ${(isMuted ? 0 : volume) * 100}%)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[calc(80px+56px)] md:h-[calc(80px+56px)]" />

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-overlay fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white backdrop-blur-xl shadow-2xl z-40 transition-transform duration-300 ease-out md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-8">
          <nav className="flex flex-col gap-6">
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="mobile-nav-link text-2xl font-semibold text-[#1e2332] hover:text-accent transition-all duration-300"
            >
              {t.nav.features}
            </a>
            <Link
              to="/privacy-policy"
              className="mobile-nav-link text-2xl font-semibold text-[#1e2332] hover:text-accent transition-all duration-300"
            >
              {t.nav.privacy}
            </Link>
            <a
              href="#download"
              onClick={(e) => handleNavClick(e, "download")}
              className="mobile-nav-link text-2xl font-semibold text-[#1e2332] hover:text-accent transition-all duration-300"
            >
              {t.nav.download}
            </a>
            <Link
              to="/contact"
              className="mobile-nav-link text-2xl font-semibold text-[#1e2332] hover:text-accent transition-all duration-300"
            >
              {t.nav.contact}
            </Link>
            <Link
              to="/affiliate"
              className="mobile-nav-link text-2xl font-semibold text-[#1e2332] hover:text-accent transition-all duration-300"
            >
              {t.nav.affiliate}
            </Link>
            <Link
              to="/referral-reward"
              className="mobile-nav-link text-2xl font-semibold text-[#1e2332] hover:text-accent transition-all duration-300"
            >
              {t.nav.referralReward}
            </Link>
            <div className="grid grid-cols-2 gap-2 pt-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code as any)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all duration-200 ${language === lang.code ? "bg-accent text-white border-accent shadow-md" : "text-[#6b7280] border-[#e2e8f0] bg-white"}`}
                >
                  {lang.full}
                </button>
              ))}
            </div>
          </nav>
          <div className="mt-auto pt-8 border-t border-[#e2e8f0]">
            <p className="text-[#9ca3af] text-sm">© 2026 Legacy Keeper</p>
          </div>
        </div>
      </div>
    </>
  );
}
