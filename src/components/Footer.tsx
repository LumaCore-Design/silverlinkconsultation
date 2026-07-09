import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {

  return (
    <footer className="bg-slate-950 border-t-4 border-primary-500 py-16 md:py-24 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <Image src="/images/logo.svg" alt="Silverlink Services Logo" fill className="object-contain brightness-0 invert" />
              </div>
              <span className="text-xl font-bold tracking-widest uppercase text-white">Silverlink Consultation</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-8 font-medium">
              Expert, independent consulting and troubleshooting for your Starlink systems. We bring clarity to your connectivity issues.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/p/Silverlink-Services-61557895786051/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-slate-800 bg-slate-900 flex items-center justify-center text-slate-500 hover:text-primary-500 hover:border-primary-500 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/silverlink_services/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border-2 border-slate-800 bg-slate-900 flex items-center justify-center text-slate-500 hover:text-primary-500 hover:border-primary-500 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
          </div>






        </div>
        
        <div className="text-center text-slate-500 text-xs flex flex-col gap-6">
          <p className="max-w-4xl mx-auto leading-relaxed text-slate-600 font-medium">
            <strong className="text-slate-400 uppercase tracking-widest text-[10px]">Disclaimer:</strong> Silverlink Consultation operates as an independent resource and is not associated with, sponsored by, or endorsed by Starlink, SpaceX, or their related entities. Any references to "Starlink" and "SpaceX" are solely for descriptive purposes. For verified information and services, please visit the official Starlink and SpaceX websites at www.starlink.com and www.spacex.com. "Starlink" and "SpaceX" are registered trademarks owned by their respective companies.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 border-t border-slate-900 pt-8 font-medium text-slate-500">
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Silverlink Consultation. All rights reserved.</p>
              <span className="hidden md:block text-slate-700">|</span>
              <p>
                Designed by <a href="https://lumacoredesign.com?utm_source=silverlinkservices&utm_medium=client_footer&utm_campaign=portfolio_link" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary-400 transition-colors font-bold">LumaCore Design</a>
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="https://starlink.com/residential?referral=RC-1561184-52230-53" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors uppercase tracking-widest text-xs font-bold text-slate-400">
                Order Starlink
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
