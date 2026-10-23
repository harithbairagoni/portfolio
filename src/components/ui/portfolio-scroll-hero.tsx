import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import {
  ArrowRight,
  Clock,
  Menu,
  UserPlus,
  Calendar,
  BarChart2,
  Users,
  ShieldCheck,
  Camera,
  Upload
} from 'lucide-react';

interface PortfolioScrollHeroProps {
  onExploreWork: () => void;
  onExploreAbout: () => void;
}

const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export default function PortfolioScrollHero({
  onExploreWork,
  onExploreAbout,
}: PortfolioScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Profile photo state (retrieved from localStorage or actual uploaded photo)
  const [photoUrl, setPhotoUrl] = useState<string | null>(() => {
    try {
      return localStorage.getItem('harith_profile_photo') || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    const handleStorageChange = () => {
      try {
        const stored = localStorage.getItem('harith_profile_photo');
        if (stored) setPhotoUrl(stored);
      } catch {
        // Ignore
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Quick photo upload handler directly from the hero placeholder
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setPhotoUrl(dataUrl);
        try {
          localStorage.setItem('harith_profile_photo', dataUrl);
          window.dispatchEvent(new Event('storage'));
        } catch {
          // Ignore
        }
      }
    };
    reader.readAsDataURL(file);
  };

  // ===========================================================================
  // LIVE DESK CLOCK TIMEPIECE LOGIC
  // ===========================================================================
  const [now, setNow] = useState<Date>(() => new Date());
  const [is24h, setIs24h] = useState<boolean>(() => {
    try {
      return localStorage.getItem('harith_portfolio_time_format') !== '12h';
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleTimeFormat = () => {
    setIs24h((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('harith_portfolio_time_format', next ? '24h' : '12h');
      } catch {
        // Ignore
      }
      return next;
    });
  };

  const rawHours = now.getHours();
  const displayHours = is24h
    ? String(rawHours).padStart(2, '0')
    : String(rawHours % 12 === 0 ? 12 : rawHours % 12).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const monthStr = MONTHS[now.getMonth()];
  const dateNum = now.getDate();
  const dayStr = DAYS[now.getDay()];

  // ===========================================================================
  // MOUSE PARALLAX SYSTEM (Subtle: 6-10px movement on periphery, center stable)
  // ===========================================================================
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);
    mouseX.set(Math.max(-1, Math.min(1, normX)));
    mouseY.set(Math.max(-1, Math.min(1, normY)));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Parallax offsets for perimeter objects
  const upperLeftX = useTransform(smoothMouseX, [-1, 1], [-8, 8]);
  const upperLeftY = useTransform(smoothMouseY, [-1, 1], [-6, 6]);

  const upperRightX = useTransform(smoothMouseX, [-1, 1], [8, -8]);
  const upperRightY = useTransform(smoothMouseY, [-1, 1], [-6, 6]);

  const lowerLeftX = useTransform(smoothMouseX, [-1, 1], [-6, 6]);
  const lowerLeftY = useTransform(smoothMouseY, [-1, 1], [6, -6]);

  const lowerRightX = useTransform(smoothMouseX, [-1, 1], [6, -6]);
  const lowerRightY = useTransform(smoothMouseY, [-1, 1], [6, -6]);

  // Center text is virtually stationary
  const centerTextX = useTransform(smoothMouseX, [-1, 1], [-1, 1]);
  const centerTextY = useTransform(smoothMouseY, [-1, 1], [-1, 1]);

  // ===========================================================================
  // SCROLL-DRIVEN OUTWARD MOVEMENT
  // ===========================================================================
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const onScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollY]);

  // Central text scales down slightly
  const centerScale = useTransform(scrollY, [0, 400], [1, 0.95]);

  // Perimeter objects drift gently outward
  const upperLeftDriftX = useTransform(scrollY, [0, 400], [0, -30]);
  const upperRightDriftX = useTransform(scrollY, [0, 400], [0, 30]);
  const lowerDriftY = useTransform(scrollY, [0, 400], [0, 30]);

  // Scroll to section handler
  const scrollToTarget = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenColdConnect = () => {
    scrollToTarget('projects');
    setTimeout(() => {
      const btn = document.getElementById('try-cold-connect-btn');
      if (btn) btn.click();
    }, 450);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="hero-workspace"
      className="relative w-full min-h-[96vh] lg:min-h-[100vh] flex flex-col justify-between bg-[#F7F7F2] overflow-hidden pt-20 sm:pt-24 pb-8 sm:pb-10 px-4 sm:px-8 lg:px-12 select-none"
    >
      {/* ================================================================== */}
      {/* 1. LAYER 1: BACKGROUND (Very subtle pale sage-green atmosphere)     */}
      {/* Looks off-white; green is only an ambient, soft warm breathing glow */}
      {/* ================================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Soft radial sage glows centered behind hero */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 50% 45%, rgba(214, 230, 210, 0.55) 0%, rgba(235, 243, 233, 0.28) 45%, transparent 65%),
              radial-gradient(circle at 15% 30%, rgba(225, 238, 222, 0.3) 0%, transparent 45%),
              radial-gradient(circle at 85% 35%, rgba(225, 238, 222, 0.3) 0%, transparent 45%)
            `,
          }}
        />

        {/* Minimal drafting grid dots */}
        <div className="absolute inset-0 opacity-[0.22] mix-blend-multiply">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="desk-dots"
                width="56"
                height="56"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="28" cy="28" r="0.65" fill="#889882" opacity="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#desk-dots)" />
          </svg>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 2. TOP BAR: TIME TICKER (Upper-Left Desk Clock)                    */}
      {/* Aligned to content grid, z-index 80                                */}
      {/* ================================================================== */}
      <div className="relative z-[80] w-full max-w-[1440px] mx-auto flex items-center justify-between mb-2 sm:mb-4 px-2">
        <button
          type="button"
          onClick={toggleTimeFormat}
          title="Click to toggle 12/24 hour format"
          className="group relative flex items-center gap-3 bg-[#EFECE3] hover:bg-[#E8E5DC] border border-[#DDD9CE] shadow-[0_6px_16px_-4px_rgba(0,0,0,0.06)] px-3.5 py-2 rounded-xl cursor-pointer transition-all duration-200 hover:scale-102"
        >
          {/* Subtle Activity Dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#E5484D] shadow-[0_0_4px_#E5484D]" />

          {/* Clock Icon */}
          <Clock className="w-3.5 h-3.5 text-[#5A5954]" />

          {/* Digits */}
          <div className="flex items-baseline gap-1 text-[#171717] font-mono text-sm sm:text-base font-semibold tracking-wider">
            <span>{displayHours}</span>
            <span className="text-[#888680] animate-pulse">:</span>
            <span>{minutes}</span>
            <span className="text-[#888680] animate-pulse">:</span>
            <span>{seconds}</span>
          </div>

          <div className="h-4 w-px bg-[#D6D2C4]" />

          {/* Date */}
          <div className="flex flex-col text-left leading-none pr-0.5">
            <span className="font-mono text-[9px] font-bold text-[#4A4A46] tracking-wider uppercase">
              {monthStr} {dateNum}
            </span>
            <span className="font-mono text-[8px] font-medium text-[#7E7C75] tracking-widest uppercase mt-0.5">
              {dayStr}
            </span>
          </div>
        </button>

        {/* Minimal Quiet Location Tag */}
        <div className="hidden sm:block font-mono text-[9px] text-[#6B6B67]/70 tracking-[0.2em] uppercase">
          WORKSPACE // HYDERABAD
        </div>
      </div>

      {/* ================================================================== */}
      {/* 3. MAIN WORKSPACE CANVAS                                           */}
      {/* PROTECTED CENTRAL ZONE (Width ~760px)                              */}
      {/* PERIMETER OBJECTS POSITIONED SAFELY ON THE EDGES (Z-INDEX 20)       */}
      {/* ================================================================== */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex-1 flex flex-col justify-center items-center py-4 sm:py-8 lg:py-12">

        {/* ============================================================== */}
        {/* LAYER 3: CENTRAL IDENTITY (PROTECTED ZONE — Z-INDEX 50 & 60)   */}
        {/* Strictly dominates, max-w-[760px], at least 80-120px clear margin*/}
        {/* ============================================================== */}
        <motion.div
          style={{
            x: centerTextX,
            y: centerTextY,
            scale: centerScale,
          }}
          className="relative z-50 text-center max-w-[760px] mx-auto px-4 pointer-events-auto"
        >
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-mono text-[#6B6B67] tracking-[0.3em] uppercase mb-3 sm:mb-4 font-semibold">
            H E Y , &nbsp; I ’ M
          </p>

          {/* Protagonist: Dominant HARITH GOUD */}
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] text-[#171717] font-normal tracking-tight leading-[0.92] select-text">
            HARITH GOUD
          </h1>

          {/* Positioning Statement (max-w-[620px], centered) */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-[#6B6B67] font-light leading-relaxed max-w-[620px] mx-auto select-text">
            I build products, systems and businesses at the intersection of technology, strategy and execution.
          </p>

          {/* CTA Buttons (Z-INDEX 60) */}
          <div className="relative z-60 mt-7 sm:mt-9 flex items-center justify-center gap-4 sm:gap-5">
            {/* Left: Deep Forest Green Pill */}
            <button
              type="button"
              onClick={onExploreWork}
              id="hero-explore-work-btn"
              className="group inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-full bg-[#0E2E20] hover:bg-[#16422F] text-white text-sm sm:text-base font-medium shadow-[0_4px_16px_rgba(14,46,32,0.2)] transition-all duration-200 hover:scale-103 active:scale-97 cursor-pointer"
            >
              <span>Explore my work</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Right: Soft Cream Outlined Pill */}
            <button
              type="button"
              onClick={onExploreAbout}
              id="hero-about-me-btn"
              className="group inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#F0EFE8] hover:bg-[#E6E4DC] border border-[#DDD9CE] text-[#171717] text-sm sm:text-base font-medium transition-all duration-200 hover:scale-103 active:scale-97 cursor-pointer"
            >
              <span>About me</span>
              <ArrowRight className="w-4 h-4 text-[#55544F] group-hover:text-[#171717] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* LAYER 2: WORKSPACE OBJECTS (PERIMETER GRID — Z-INDEX 20)        */}
        {/* Positioned safely around the perimeter, never touching the text */}
        {/* ============================================================== */}

        {/* -------------------------------------------------------------- */}
        {/* 01. UPPER-RIGHT: COLD CONNECT (HERO PRODUCT PREVIEW)           */}
        {/* Width: 290px, warm white, deep green, Try Demo label           */}
        {/* -------------------------------------------------------------- */}
        <motion.div
          style={{
            x: useTransform(upperRightX, (x) => x + (upperRightDriftX.get() || 0)),
            y: upperRightY,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:absolute lg:right-4 xl:right-10 lg:top-4 xl:top-6 w-full max-w-[290px] sm:max-w-[310px] mt-8 lg:mt-0 group cursor-pointer z-20"
          onClick={handleOpenColdConnect}
        >
          {/* Subtle Annotation 1 (Near Cold Connect) */}
          <div className="hidden xl:flex items-center gap-1.5 mb-1.5 ml-2 select-none pointer-events-none">
            <span className="font-hand text-lg text-[#6B6B67] -rotate-2">
              build things that matter
            </span>
          </div>

          {/* Floating Mobile Product Window */}
          <div className="relative p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2E0D6] shadow-[0_16px_36px_-10px_rgba(0,0,0,0.08)] transform lg:rotate-1 group-hover:rotate-0 group-hover:scale-[1.03] group-hover:-translate-y-1.5 group-hover:shadow-[0_24px_48px_-10px_rgba(0,0,0,0.12)] transition-all duration-300">
            {/* Attached "TRY DEMO →" Label */}
            <div className="absolute -top-3 right-4 bg-[#DCE8D8] border border-[#C6D8C0] text-[#0E2E20] px-2.5 py-0.5 rounded-full text-[9.5px] font-mono font-semibold uppercase tracking-wider flex items-center gap-1 shadow-2xs group-hover:bg-[#0E2E20] group-hover:text-white transition-colors">
              <span>TRY DEMO</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </div>

            {/* App Header */}
            <div className="flex items-center justify-between pb-2.5 border-b border-[#F2F1EA]">
              <div className="flex items-center gap-2">
                <Menu className="w-3.5 h-3.5 text-[#171717]" />
                <span className="font-serif text-base font-bold text-[#0E2C1E] tracking-tight">
                  ColdConnect
                </span>
              </div>
              <span className="font-mono text-[8px] uppercase tracking-wider bg-[#EAF1E7] text-[#0E2E20] px-1.5 py-0.5 rounded">
                COPILOT
              </span>
            </div>

            {/* Main Catchphrase */}
            <div className="my-3.5 text-left">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#171717] leading-tight">
                Make every<br />introduction<br />count.
              </h2>
            </div>

            {/* Action Buttons Inside App */}
            <div className="space-y-1.5">
              <div className="w-full py-2 px-3.5 rounded-lg bg-[#0E2E20] text-white flex items-center justify-center gap-1.5 text-xs font-medium shadow-xs group-hover:bg-[#16422F] transition-colors">
                <UserPlus className="w-3 h-3" />
                <span>Add Connection</span>
              </div>

              <div className="w-full py-1.5 px-3.5 rounded-lg bg-[#F4F3ED] border border-[#E0DED4] text-[#171717] flex items-center justify-center gap-1.5 text-xs font-medium">
                <Calendar className="w-3 h-3 text-[#6B6B67]" />
                <span>Schedule Meeting</span>
              </div>
            </div>

            {/* Bottom Tabs */}
            <div className="mt-3.5 pt-2 border-t border-[#F0EFE8] flex items-center justify-between text-[10px]">
              <span className="font-medium text-[#171717] border-b-2 border-[#0E2E20] pb-0.5">
                My Network (4)
              </span>
              <span className="text-[#888680] pb-0.5">
                Upcoming (0)
              </span>
            </div>
          </div>
        </motion.div>

        {/* -------------------------------------------------------------- */}
        {/* 02. UPPER-LEFT: LANDSAFE DOCUMENT                              */}
        {/* Width: 215px, tilted -3deg, physical deed format               */}
        {/* -------------------------------------------------------------- */}
        <motion.div
          style={{
            x: useTransform(upperLeftX, (x) => x + (upperLeftDriftX.get() || 0)),
            y: upperLeftY,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:absolute lg:left-4 xl:left-10 lg:top-4 xl:top-6 w-full max-w-[215px] sm:max-w-[225px] mt-6 lg:mt-0 group cursor-pointer z-20"
          onClick={() => scrollToTarget('landsafe')}
        >
          {/* Tilted Paper Document */}
          <div className="relative p-4 rounded-xl bg-[#FAF9F5] border border-[#E2E0D6] shadow-[0_12px_28px_-6px_rgba(0,0,0,0.06)] transform lg:-rotate-3 group-hover:rotate-0 group-hover:-translate-y-1.5 group-hover:shadow-[0_18px_34px_-6px_rgba(0,0,0,0.1)] transition-all duration-300">
            {/* Frosted Tape Top */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-3.5 bg-[#FFFFFF]/70 border border-[#DDD9CE] backdrop-blur-xs rounded-xs shadow-2xs" />

            {/* Header */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[#EAF1E7] border border-[#D5E5D1] flex items-center justify-center text-[#0E2E20]">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-serif text-lg text-[#0E2C1E] font-medium tracking-tight block leading-tight">
                  LANDSAFE
                </span>
                <span className="font-mono text-[7.5px] uppercase tracking-[0.16em] text-[#6B6B67] block">
                  PROPERTY RISK VERIFICATION
                </span>
              </div>
            </div>

            {/* Deed Detail */}
            <div className="my-2.5 py-1 px-2 rounded bg-[#FFFFFF] border border-[#EAE8E0] font-mono text-[8px] text-[#6B6B67] flex items-center justify-between">
              <span>TITLE DILIGENCE</span>
              <span className="text-[#0E2E20] font-bold">CLEARED</span>
            </div>

            {/* Role Credentials */}
            <div className="pt-2 border-t border-[#F0EFE8] text-[9.5px] text-[#6B6B67] leading-snug">
              <span className="block font-medium text-[#171717]">Co-Founder</span>
              <span>Director of Operations</span>
            </div>
          </div>
        </motion.div>

        {/* -------------------------------------------------------------- */}
        {/* 03. LOWER-LEFT: VIVEK BIO & NEUTRAL PROFILE FRAME               */}
        {/* Width: 215px, positioned firmly in lower-left corner           */}
        {/* -------------------------------------------------------------- */}
        <motion.div
          style={{
            x: useTransform(lowerLeftX, (x) => x + (upperLeftDriftX.get() || 0)),
            y: useTransform(lowerLeftY, (y) => y + (lowerDriftY.get() || 0)),
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:absolute lg:left-4 xl:left-10 lg:bottom-2 w-full max-w-[220px] sm:max-w-[230px] mt-6 lg:mt-0 z-20 flex flex-col gap-3"
        >
          {/* Vivek Bio Engineering Blueprint */}
          <div
            onClick={() => scrollToTarget('vivek-bio')}
            className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E2E0D6] shadow-[0_10px_24px_-6px_rgba(0,0,0,0.06)] transform lg:rotate-1 group-hover:rotate-0 group-hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-[8px] uppercase tracking-wider text-[#6B6B67] font-semibold">
                VIVEK BIO PRODUCTS
              </span>
              <span className="font-mono text-[9px] font-bold text-[#0E2E20] bg-[#DCE8D8] px-1.5 py-0.5 rounded">
                ₹152 Cr
              </span>
            </div>

            <p className="font-serif text-base text-[#171717] font-semibold leading-tight mt-1">
              100 KLPD
            </p>

            <div className="mt-2 pt-1.5 border-t border-[#ECEAE2] flex items-center justify-between text-[8.5px] font-mono text-[#6B6B67]">
              <span>Assistant Project Manager</span>
              <span className="text-[#0E2E20] font-semibold group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </div>

          {/* Small Neutral Personal Photo Frame (NO fake face) */}
          <div className="flex items-center gap-2.5 p-2 rounded-lg bg-[#FFFFFF] border border-[#E2E0D6] shadow-2xs w-full">
            <label
              htmlFor="hero-photo-upload"
              title="Click to upload your portrait photograph"
              className="w-10 h-10 rounded-sm bg-[#FAF9F5] border border-[#DDD9CE] overflow-hidden flex items-center justify-center shrink-0 cursor-pointer hover:border-[#0E2E20] transition-colors relative group"
            >
              {photoUrl ? (
                <img
                  src={photoUrl}
                  alt="Harith Goud"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-[#8C8A84] group-hover:text-[#0E2E20]">
                  <Camera className="w-3.5 h-3.5" />
                </div>
              )}
              <input
                id="hero-photo-upload"
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="sr-only"
              />
            </label>

            <div className="leading-tight flex-1 min-w-0 select-none">
              <span className="font-hand text-base text-[#6B6B67] block">
                always curious
              </span>
              <span className="font-mono text-[8px] text-[#8C8A84] block truncate">
                {photoUrl ? 'Harith Goud' : 'Editorial Portrait'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* -------------------------------------------------------------- */}
        {/* 04. LOWER-RIGHT: RASTRA STRATEGY DATA ARTIFACT                 */}
        {/* Width: 215px, positioned firmly in lower-right corner          */}
        {/* -------------------------------------------------------------- */}
        <motion.div
          style={{
            x: useTransform(lowerRightX, (x) => x + (upperRightDriftX.get() || 0)),
            y: useTransform(lowerRightY, (y) => y + (lowerDriftY.get() || 0)),
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:absolute lg:right-4 xl:right-10 lg:bottom-2 w-full max-w-[215px] sm:max-w-[225px] mt-6 lg:mt-0 group cursor-pointer z-20"
          onClick={() => scrollToTarget('rashtra')}
        >
          <div className="p-3.5 rounded-xl bg-[#FAF9F5] border border-[#E2E0D6] shadow-[0_10px_24px_-6px_rgba(0,0,0,0.06)] transform lg:-rotate-1 group-hover:rotate-0 group-hover:-translate-y-1 transition-all duration-300">
            <span className="font-serif text-base font-bold text-[#0E2C1E] tracking-tight block leading-tight">
              RASTRA
            </span>
            <span className="font-mono text-[7.5px] uppercase tracking-[0.16em] text-[#6B6B67] block mt-0.5">
              POLITICAL ANALYSIS
            </span>

            <div className="mt-2.5 space-y-1 font-mono text-[9.5px] text-[#171717]">
              <div className="flex items-center gap-1.5">
                <BarChart2 className="w-3 h-3 text-[#0E2E20]" />
                <span>15 Constituencies</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-3 h-3 text-[#0E2E20]" />
                <span>4M+ Voters</span>
              </div>
            </div>

            <div className="mt-2.5 pt-1.5 border-t border-[#ECEAE2] flex items-center justify-between font-mono text-[8.5px] text-[#6B6B67]">
              <span>Political Analyst</span>
              <span className="text-[#0E2E20] font-semibold group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ================================================================== */}
      {/* 4. BOTTOM SCROLL INDICATOR: Minimal, centered "↓ SCROLL"           */}
      {/* ================================================================== */}
      <div className="relative z-20 w-full flex justify-center pt-2">
        <button
          type="button"
          onClick={onExploreWork}
          className="group flex flex-col items-center gap-0.5 font-mono text-[9px] tracking-[0.3em] text-[#6B6B67] hover:text-[#171717] uppercase transition-colors cursor-pointer"
        >
          <span className="text-xs group-hover:translate-y-0.5 transition-transform">↓</span>
          <span>SCROLL</span>
        </button>
      </div>
    </section>
  );
}
