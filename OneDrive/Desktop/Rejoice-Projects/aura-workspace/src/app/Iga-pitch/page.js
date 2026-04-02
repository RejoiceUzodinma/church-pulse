"use client";
import React from 'react';

export default function RevenueLinkPitch() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Hero Section */}
      <nav className="p-6 flex justify-between items-center border-b border-slate-100">
        <div className="font-black text-xl tracking-tighter text-[#1E3A8A]">REVENUE LINK</div>
        <a href="/Iga-portal" className="bg-[#1E3A8A] text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition-all">
          View Demo Dashboard
        </a>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 text-slate-800">
          Transparency in <span className="text-blue-600">LGA Revenue</span> Collection.
        </h1>
        <p className="text-xl text-slate-500 mb-10 leading-relaxed">
          Eliminating "leakage" and ghost agents by digitizing market revenue. 
          Every kobo collected is tracked, verified, and linked to community development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          <div className="p-6 border border-slate-100 rounded-2xl shadow-sm">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="font-bold text-lg mb-2 text-slate-800">Secure Verification</h3>
            <p className="text-sm text-slate-500">Official agents use secure digital IDs to prevent illegal taxing and harassment of traders.</p>
          </div>
          <div className="p-6 border border-slate-100 rounded-2xl shadow-sm bg-blue-50">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="font-bold text-lg mb-2 text-slate-800">Real-Time Data</h3>
            <p className="text-sm text-slate-500">LGA Chairmen see revenue peaks and troughs instantly via a live dashboard.</p>
          </div>
          <div className="p-6 border border-slate-100 rounded-2xl shadow-sm">
            <div className="text-3xl mb-4">🏗️</div>
            <h3 className="font-bold text-lg mb-2 text-slate-800">Infrastructure Link</h3>
            <p className="text-sm text-slate-500">Revenue is automatically allocated to visible local projects like road grading and market stalls.</p>
          </div>
        </div>
      </main>
    </div>
  );
}