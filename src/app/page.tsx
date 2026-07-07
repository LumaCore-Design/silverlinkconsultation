"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Satellite, Phone, Wifi, ShieldCheck, Tv, Zap, MapPin, ExternalLink, ChevronRight, CheckSquare, Mail, Menu, X } from "lucide-react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { InlineWidget } from "react-calendly";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };



  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row pt-20 bg-white overflow-hidden">
        <div className="flex-1 flex items-center justify-center p-8 lg:p-16 xl:p-24 z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl w-full"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 bg-slate-100 text-[10px] md:text-xs font-bold text-slate-800 mb-8 uppercase tracking-widest border border-slate-200 shadow-sm text-center leading-relaxed">
              <span className="sm:hidden">Starlink Support<br/>& Troubleshooting</span>
              <span className="hidden sm:inline">Starlink Support & Troubleshooting</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-black text-slate-950 mb-6 tracking-tight uppercase leading-tight">
              Expert<br/>
              <span className="text-primary-600">Starlink</span><br/>
              Consultation
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-slate-600 mb-10 leading-relaxed font-medium max-w-lg">
              Get immediate 1-on-1 help with your Starlink account, hardware diagnostics, and installation issues from a seasoned professional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#book-call"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-3 shadow-md"
              >
                <Phone className="w-4 h-4" />
                Book a Consulting Call
              </a>
              <a 
                href="#how-it-works"
                className="px-8 py-4 bg-transparent hover:bg-slate-50 text-slate-900 font-bold text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2 border-2 border-slate-900"
              >
                How It Works
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
              <div>
                <p className="text-4xl font-black text-slate-950 tracking-tighter">1-on-1</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Expert Support</p>
              </div>
              <div>
                <p className="text-4xl font-black text-slate-950 tracking-tighter">&lt;24h</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Response Time</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 relative min-h-[50vh] lg:min-h-0 bg-slate-100">
          <Image
            src="/images/gallery/IMG_2878.jpg"
            alt="Starlink Roof Installation"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center lg:object-[center_20%]"
            priority
          />
          {/* subtle inner shadow to frame it against the white */}
          <div className="absolute inset-0 shadow-[inset_10px_0_30px_rgba(0,0,0,0.1)] hidden lg:block pointer-events-none"></div>
        </div>
      </section>

      {/* Number One Installer Section */}
      <section className="py-20 bg-slate-900 text-white px-6 border-t-4 border-primary-500">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Expert Starlink Consultation & Support
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              When it comes to getting you connected and keeping you online, nobody does it better. We pride ourselves on providing immediate, top-tier troubleshooting when official support falls short.
            </p>
            <ul className="space-y-4">
              {['Bypass long support wait times', 'Instant answers and diagnostics', 'Tailored advice for your specific setup'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                  <CheckSquare className="w-5 h-5 text-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[500px] overflow-hidden shadow-2xl border-2 border-slate-700"
          >
            <Image 
              src="/images/gallery/IMG_3387.jpg" 
              alt="Number one Starlink installer holding up a finger"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">How It Works</h2>
            <p className="text-slate-600 text-lg">Skip the support queue and get expert help in three simple steps.</p>
          </div>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-5/12 text-center md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">1. Schedule Call</h3>
                  <p className="text-slate-600 leading-relaxed">Choose a time that works best for you using our online booking system.</p>
                </div>
                <div className="z-10 w-16 h-16 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center shadow-sm mb-6 md:mb-0">
                  <span className="text-2xl font-black text-slate-900">1</span>
                </div>
                <div className="md:w-5/12"></div>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
                <div className="md:w-5/12 text-center md:text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">2. Secure Payment</h3>
                  <p className="text-slate-600 leading-relaxed">Pay a flat $25 fee securely upfront to confirm your booking.</p>
                </div>
                <div className="z-10 w-16 h-16 bg-white border-4 border-slate-200 rounded-full flex items-center justify-center shadow-sm mb-6 md:mb-0">
                  <span className="text-2xl font-black text-slate-900">2</span>
                </div>
                <div className="md:w-5/12"></div>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center justify-between group">
                <div className="md:w-5/12 text-center md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">3. We Call You</h3>
                  <p className="text-slate-600 leading-relaxed">At your scheduled time, our expert will call you directly to troubleshoot your issues.</p>
                </div>
                <div className="z-10 w-16 h-16 bg-primary-600 border-4 border-white text-white rounded-full flex items-center justify-center shadow-md mb-6 md:mb-0">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div className="md:w-5/12"></div>
              </div>
            </div>
          </div>
            
          <div className="mt-16 text-center">
            <a href="#book-call" className="inline-block px-12 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold uppercase tracking-widest text-sm transition-colors shadow-md">
              Get Started Now
            </a>
          </div>
        </div>
      </section>



      {/* Booking Section */}
      <section id="pricing" className="py-24 px-6 relative bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Book Your Consulting Call</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Pick a time, pay the flat fee, and get your system back online.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-white border-2 border-slate-200 shadow-md h-[750px] md:h-[950px]"
              id="book-call"
            >
              <InlineWidget 
                url="https://calendly.com/silverlinkservice/30min"
                styles={{ height: '100%', minWidth: '320px', width: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
