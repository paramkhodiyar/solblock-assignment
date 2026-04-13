"use client";

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b0f19] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden font-sans">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-[#101726] to-[#0b0f19]" />
        <div className="absolute top-[20%] left-[20%] w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-orange-400/5 rounded-full blur-3xl animate-[pulse-glow_5s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto glass-panel p-12 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-2xl">
        <div className="text-brand-orange text-8xl font-black mb-6 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)] tracking-tighter">
          404
        </div>
        <h1 className="text-3xl font-bold text-white mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-10 text-lg">
          The property or asset you are looking for has either been moved or doesn't exist.
        </p>
        
        <Link href="/" className="group bg-brand-orange hover:bg-brand-orange-hover text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:-translate-y-0.5 inline-flex items-center">
            Return to Homepage
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-2 transition-transform duration-300 group-hover:-translate-x-1 rotate-180">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
        </Link>
      </div>
    </div>
  );
}
