"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden font-sans">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg.png"
          alt="Modern Property at Night Background"
          fill
          priority
          className="object-cover opacity-60"
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19]/80 via-[#0b0f19]/40 to-[#0b0f19]" />
      </div>

      {/* Navigation Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0b0f19]/90 backdrop-blur-md shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-1.5 cursor-pointer group">
            {/* High-res precision geometric SVG logo */}
            <svg viewBox="0 0 40 40" className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] transition-transform duration-300 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 30 7 A 15 15 0 1 0 30 33" stroke="#F97316" strokeWidth="8" strokeLinecap="butt" className="drop-shadow-sm" />
              <rect x="15" y="16" width="16" height="8" rx="1.5" fill="#F97316" className="drop-shadow-sm" />
            </svg>
            <span className="text-2xl md:text-[1.75rem] font-black tracking-tight ml-1 drop-shadow-sm flex items-center">
              <span className="text-white">Sta</span>
              <span className="text-brand-orange drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]">k</span>
              <span className="text-white">e</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">Properties</a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">Digital Assets</a>
            <a href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">Stake & Earn</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium text-white hover:text-brand-orange transition-colors duration-200">Login</a>
            <button className="bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold py-2 px-6 rounded-full transition-all duration-200 hover:-translate-y-0.5">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white rounded transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white rounded transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white rounded transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0b0f19] z-40 transition-transform duration-500 ease-in-out transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col items-center justify-center space-y-8`}>
        <a href="#" className="text-2xl font-bold text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Properties</a>
        <a href="#" className="text-2xl font-bold text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Digital Assets</a>
        <a href="#" className="text-2xl font-bold text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Stake & Earn</a>
        <div className="flex flex-col items-center space-y-6 mt-8 w-full px-12">
          <a href="#" className="text-xl font-bold text-white w-full text-center py-3 border border-gray-700 rounded-full" onClick={() => setIsMobileMenuOpen(false)}>Login</a>
          <button className="bg-brand-orange text-white text-xl font-bold py-3 w-full rounded-full" onClick={() => setIsMobileMenuOpen(false)}>
            Sign Up
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 flex flex-col items-center text-center px-4 w-full h-full max-w-7xl mx-auto">

        {/* Title Section */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-xl max-w-4xl mx-auto leading-tight">
          Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-brand-orange font-black">high-growth</span><br className="hidden md:block" /> property investments
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light drop-shadow">
          Join the CEG Equity Token batch. Start building your portfolio with fractional ownership of global assets.
        </p>

        <button className="group bg-brand-orange hover:bg-brand-orange-hover text-white text-lg font-bold py-3.5 px-8 flex items-center rounded-full transition-all duration-300 hover:-translate-y-0.5 mb-16">
          Start Earning Now
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </button>

        {/* Central Graphic Section */}
        <div className="relative w-full max-w-5xl rounded-3xl glass-panel flex flex-col md:flex-row items-center justify-between shadow-2xl p-6 md:p-10 transition-transform duration-500 hover:scale-[1.01] bg-[#111827]/40 ring-1 ring-white/10 group backdrop-blur-xl mt-12">

          <div className="relative w-full md:w-[55%] h-64 md:h-[350px] rounded-2xl overflow-hidden mb-12 md:mb-0 shadow-inner group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all duration-500 z-10">
            {/* Base frame image */}
            <Image src="/frame-1.png" alt="Property overlay" fill className="absolute inset-0 object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" priority />

            {/* Hovering Jigsaw */}
            <div className="absolute left-[30%] top-[40%] w-24 h-24 md:w-32 md:h-32 transform -translate-y-1/2 drop-shadow-2xl animate-float group-hover:rotate-6 transition-transform duration-700">
              <Image src="/jigsaw.png" alt="puzzle piece" fill className="object-contain" />
            </div>
          </div>

          {/* Sweeping Progressive Animated Arrow */}
          <div className="absolute top-[48%] md:top-[47%] left-[55%] md:left-[55%] transform -translate-x-1/2 -translate-y-[50%] flex items-center justify-center z-30 pointer-events-none opacity-90 transition-transform duration-700">
            <style>{`
              @keyframes slideFadeFlow {
                0% { opacity: 0; transform: translateX(-10px); }
                50% { opacity: 1; transform: translateX(5px); }
                100% { opacity: 0; transform: translateX(20px); }
              }
            `}</style>
            <div className="w-full flex items-center justify-center gap-1.5 md:gap-2 ml-4">
              <svg width="18" height="30" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange drop-shadow-md" style={{ animation: 'slideFadeFlow 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0s', opacity: 0 }}><path d="M6 4L22 20L6 36" /></svg>
              <svg width="22" height="34" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange drop-shadow-md" style={{ animation: 'slideFadeFlow 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.2s', opacity: 0 }}><path d="M6 4L22 20L6 36" /></svg>
              <svg width="26" height="38" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400 drop-shadow-[0_0_12px_rgba(249,115,22,0.8)]" style={{ animation: 'slideFadeFlow 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.4s', opacity: 0 }}><path d="M6 4L22 20L6 36" /></svg>
            </div>
          </div>

          <div className="w-full md:w-[45%] md:pl-16 flex flex-col items-start justify-center text-left z-20">
            <h3 className="text-3xl md:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight mb-4 text-white drop-shadow-md">
              Access premium<br className="hidden md:block" /> property ownership <br /><span className="text-brand-orange mt-2 block">for $150</span>
            </h3>
            <div className="bg-[#1b253b]/90 backdrop-blur-md p-5 rounded-2xl border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:bg-[#1f2a43]/95 mt-4 w-full max-w-sm group/card">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-brand-orange to-orange-400 group-hover/card:shadow-[0_0_15px_rgba(249,115,22,0.8)] transition-all"></div>
              <div className="flex items-center text-xs text-gray-300 mb-3 font-semibold tracking-wide uppercase px-2">
                <div className="relative w-5 h-5 flex items-center justify-center mr-2">
                  <div className="absolute inset-0 bg-brand-orange/30 rounded-full animate-ping opacity-100"></div>
                  <div className="relative w-2.5 h-2.5 rounded-full bg-brand-orange ring-2 ring-[#1b253b]"></div>
                </div>
                All Time Returns
              </div>
              <div className="flex items-end gap-3 px-2">
                <span className="text-3xl lg:text-4xl font-black text-white tracking-tight drop-shadow-sm">AED 165,000</span>
                <div className="flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded-md mb-1 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                  <svg className="w-3 h-3 text-emerald-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span className="text-emerald-400 font-bold text-sm leading-none">+11%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sequence Section */}
        <div className="w-full max-w-5xl mx-auto mt-12 bg-gradient-to-r from-[#111828]/80 to-[#1e293b]/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/5 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-orange/5 via-transparent to-transparent pointer-events-none"></div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h4 className="font-bold text-brand-orange text-lg md:text-xl tracking-wide flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="lg:animate-pulse">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M12 4v16M8 4v16M16 4v16" strokeOpacity="0.2" />
              </svg>
              Price Progression (200 Tokens)
            </h4>
            <div className="flex items-center gap-2.5">
              <span className="text-xs bg-[#1f2937] text-gray-300 px-3.5 py-1.5 rounded-md font-bold tracking-wider shadow-inner border border-gray-700/50 uppercase">SOLD OUT 1-3</span>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 px-3.5 py-1.5 rounded-md font-bold tracking-wider uppercase border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)] relative">
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full"></span>
                ACTIVE 4
              </span>
            </div>
          </div>

          {/* Scrollable Container */}
          <div className="relative">
            <div className="flex overflow-x-auto gap-4 md:gap-5 pb-6 pt-2 snap-x snap-mandatory hide-scrollbar group/scroll">
              {[
                { batch: 1, price: '4,000', status: 'sold' },
                { batch: 2, price: '4,250', status: 'sold' },
                { batch: 3, price: '4,500', status: 'sold' },
                { batch: 4, price: '4,750', status: 'active' },
                { batch: 5, price: '5,000', status: 'upcoming' },
                { batch: 6, price: '5,250', status: 'upcoming' },
              ].map((item, idx) => (
                <div key={idx} className={`snap-center shrink-0 w-[140px] md:w-40 p-5 rounded-2xl flex flex-col justify-center h-28 relative transition-all duration-300 cursor-pointer overflow-hidden ${item.status === 'active'
                  ? 'border-2 border-brand-orange bg-gradient-to-b from-[#1e2a47] to-[#141d31] scale-[1.05] shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] z-10'
                  : 'border border-white/5 bg-[#0f172a] hover:bg-[#1e293b] hover:border-gray-600/50 opacity-70 hover:opacity-100'
                  }`}>
                  {item.status === 'active' && (
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                      <div className="w-[150%] h-1 absolute -top-1 left-[-25%] bg-brand-orange shadow-[0_0_15px_rgba(249,115,22,1)] blur-sm"></div>
                    </div>
                  )}
                  <span className={`text-xs font-bold uppercase tracking-wider mb-2 ${item.status === 'active' ? 'text-brand-orange' : 'text-gray-400'}`}>
                    Batch {item.batch}
                  </span>
                  <span className={`text-xl md:text-2xl font-extrabold tracking-tight ${item.status === 'active' ? 'text-white' : 'text-gray-300'}`}>
                    ${item.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Scroll Indication Fade */}
            <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-[#111828] to-transparent pointer-events-none md:hidden"></div>
          </div>
        </div>
      </div>

    </main>
  );
}
