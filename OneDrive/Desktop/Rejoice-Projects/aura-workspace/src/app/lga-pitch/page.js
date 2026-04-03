"use client";
import React from 'react';

export default function LgaPitch() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="p-6 border-b border-slate-50 flex justify-between items-center">
        <h2 className="text-xl font-black text-[#1E3A8A] tracking-tighter">RevenueLink</h2>
        <div className="hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <span>Transparency</span>
          <span>Security</span>
          <span>Efficiency</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="text-[10px] font-black uppercase tracking-[5px] text-blue-600 mb-4 block">
          The Future of LGA Finance
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-[#1E3A8A] leading-tight tracking-tighter mb-6">
          Transparency in LGA <br /> 
          <span className="text-blue-500">Revenue Collection.</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Eliminating leakages and empowering Local Government Areas with real-time digital 
          revenue tracking and automated escrow settlements.
        </p>

        {/* THE TWO LINKS YOU REQUESTED */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="/lga-portal" 
            className="w-full sm:w-auto bg-[#1E3A8A] text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:bg-blue-900 transition-all text-sm uppercase tracking-widest"
          >
            Access Revenue Portal
          </a>
          
          <a 
            href="https://docs.google.com/forms/d/your-google-form-id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto border-2 border-[#1E3A8A] text-[#1E3A8A] px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all text-sm uppercase tracking-widest"
          >
            Submit Application
          </a>
        </div>
      </main>

      {/* Feature Grid */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="h-10 w-10 bg-blue-100 rounded-full mb-4 flex items-center justify-center text-blue-600 font-bold">01</div>
            <h3 className="font-bold text-[#1E3A8A] mb-2">Real-time Auditing</h3>
            <p className="text-xs text-slate-400">Every Naira tracked from collection to the treasury.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="h-10 w-10 bg-blue-100 rounded-full mb-4 flex items-center justify-center text-blue-600 font-bold">02</div>
            <h3 className="font-bold text-[#1E3A8A] mb-2">Zero Leakage</h3>
            <p className="text-xs text-slate-400">Automated digital receipts eliminate manual errors.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="h-10 w-10 bg-blue-100 rounded-full mb-4 flex items-center justify-center text-blue-600 font-bold">03</div>
            <h3 className="font-bold text-[#1E3A8A] mb-2">Direct Settlement</h3>
            <p className="text-xs text-slate-400">Instant fund allocation to verified LGA accounts.</p>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-slate-100">
        <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
          © 2026 RejoiceAura Technology • Built for Impact
        </p>
      </footer>
    </div>
  );
}