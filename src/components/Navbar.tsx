"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-950 shadow-xl border-b-4 border-primary-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-10 bg-slate-950">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <Image src="/images/logo.svg" alt="Silverlink Consultation Logo" fill className="object-contain brightness-0 invert" />
          </div>
          <span className="text-xl font-bold tracking-widest uppercase text-white hidden sm:block">Silverlink Consultation</span>
          <span className="text-xl font-bold tracking-widest uppercase text-white sm:hidden">Silverlink</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
          <Link href="/#about" className="hover:text-white transition-colors whitespace-nowrap">About</Link>
          <Link href="/#pricing" className="hover:text-white transition-colors whitespace-nowrap">Pricing</Link>
          <a href="https://starlink.com/residential?referral=RC-1561184-52230-53" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors whitespace-nowrap">Order Starlink</a>
          <a href="#book-call" className="px-4 xl:px-6 py-3 bg-white text-slate-950 hover:bg-slate-200 transition-colors font-bold uppercase tracking-widest text-xs whitespace-nowrap">Book Call</a>
          <a href="https://silverlinkservices.com" className="px-4 xl:px-6 py-3 bg-primary-600 text-white hover:bg-primary-500 transition-colors font-bold uppercase tracking-widest text-xs whitespace-nowrap">Need Installation?</a>
        </div>

        {/* Mobile Nav Toggle & Call Button */}
        <div className="flex lg:hidden items-center gap-3">
          <a href="#book-call" className="text-slate-400 p-2 hover:bg-slate-800 hover:text-white transition-colors border-2 border-slate-800 bg-slate-900" aria-label="Book a call">
            <Phone className="w-5 h-5" />
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-slate-400 p-2 hover:bg-slate-800 hover:text-white transition-colors border-2 border-slate-800 bg-slate-900"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 right-0 bg-slate-950 border-b-4 border-primary-500 transition-all duration-300 ease-in-out origin-top overflow-hidden shadow-2xl ${
          isMobileMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 border-b-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-6 text-xs font-bold uppercase tracking-widest text-slate-400">
          <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors block border-b border-slate-800 pb-4">About</Link>
          <Link href="/#pricing" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors block border-b border-slate-800 pb-4">Pricing</Link>
          <a href="https://starlink.com/residential?referral=RC-1561184-52230-53" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors block border-b border-slate-800 pb-4">Order Starlink</a>
          <a href="https://silverlinkservices.com" onClick={() => setIsMobileMenuOpen(false)} className="text-primary-500 hover:text-primary-400 transition-colors block border-b border-slate-800 pb-4">Need Installation?</a>
        </div>
      </div>
    </nav>
  );
}
