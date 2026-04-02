"use client";
import React, { useState } from 'react';

export default function RevenueLinkMVP() {
  
  const [isScanning, setIsScanning] = useState(false);
  const [traders, setTraders] = useState([
    { id: 1, name: "M. Okoro", stall: "A-102 (Food)", market: "Balogun Market", status: "VERIFIED PAID", hasId: true },
    { id: 2, name: "A. Abubakar", stall: "B-44 (Textile)", market: "Wuse Market", status: "UNAUTHORIZED", hasId: false },
  ]);

  
  const handleScan = () => {
    setIsScanning(true);
    
    setTimeout(() => {
      alert("✅ SUCCESS: Official Agent Verified (ID: LGA-774-99)");
      setIsScanning(false);
      
      setTraders(prev => prev.map(trader => 
        trader.name === "A. Abubakar" 
          ? { ...trader, status: "VERIFIED PAID", hasId: true } 
          : trader
      ));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f6] font-sans text-slate-900 pb-20">
      {/* --- HEADER --- */}
      <nav className="bg-[#1E3A8A] text-white p-6 shadow-lg mb-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="font-black tracking-tighter text-xl">REVENUE LINK <span className="font-light opacity-50">| LGA PORTAL</span></div>
          <div className="text-[10px] bg-emerald-500 px-3 py-1 rounded-full font-bold">SYSTEM ACTIVE</div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4">
        {/* --- TOP STATS CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-6 rounded-2xl border-l-8 border-emerald-500 shadow-sm">
            <p className="text-slate-400 text-xs font-bold uppercase mb-1">Total Market Revenue (Today)</p>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">₦1,240,500</h2>
            <p className="text-emerald-600 text-[11px] font-bold mt-2">↑ 12% increase from yesterday</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border-l-8 border-[#1E3A8A] shadow-sm">
            <p className="text-slate-400 text-xs font-bold uppercase mb-1">Infrastructure Fund</p>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">₦372,150</h2>
            <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
              <div className="bg-[#1E3A8A] h-full w-[65%] rounded-full"></div>
            </div>
            <p className="text-slate-500 text-[10px] mt-2 font-medium text-center italic">Goal: Market Road Grading</p>
          </div>
        </div>

        {/* --- SEARCH & SCAN --- */}
        <div className="space-y-3 mb-8">
          <input 
            type="text" 
            placeholder="Search Trader ID or Stall No..." 
            className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-[#1E3A8A] outline-none transition-all shadow-sm"
          />
          <button 
            onClick={handleScan}
            disabled={isScanning}
            className={`w-full py-5 rounded-xl font-black text-sm tracking-widest uppercase transition-all shadow-md ${
              isScanning ? 'bg-amber-500 text-white animate-pulse' : 'bg-slate-800 text-white hover:bg-black'
            }`}
          >
            {isScanning ? "⌛ SCANNING SECURE ID..." : "🔍 SCAN AGENT / VERIFY RECEIPT"}
          </button>
        </div>

        {/* --- TRADERS TABLE --- */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white text-[10px] uppercase tracking-[2px]">
                <th className="p-5 font-bold">Trader Info</th>
                <th className="p-5 font-bold text-center">Compliance</th>
                <th className="p-5 font-bold text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {traders.map((trader) => (
                <tr key={trader.id} className="hover:bg-slate-50 transition-colors">
                  <td className="p-5">
                    <span className="font-black text-slate-800 block text-base">{trader.name}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase">Stall: {trader.stall} | {trader.market}</span>
                  </td>
                  <td className="p-5 text-center">
                    {trader.hasId ? (
                      <div className="inline-block bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <img 
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=40x40&data=VERIFIED-${trader.name.replace(/\s/g, '')}`} 
                          alt="QR" 
                          className="w-10 h-10"
                        />
                        <span className="text-[8px] font-black text-emerald-600 block mt-1 tracking-tighter uppercase">SECURE ID</span>
                      </div>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-300 italic">No Digital ID</span>
                    )}
                  </td>
                  <td className="p-5 text-right">
                    <span className={`inline-block px-3 py-1.5 rounded-full text-[10px] font-black tracking-tight ${
                      trader.status === "VERIFIED PAID" 
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-100" 
                        : "bg-orange-50 text-orange-700 border border-orange-100"
                    }`}>
                      {trader.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- FOOTER BANNER --- */}
        <div className="mt-8 bg-gradient-to-r from-[#1E3A8A] to-blue-600 text-white p-6 rounded-2xl shadow-xl text-center">
          <p className="text-sm font-bold opacity-90">Verified Traders In Network: <span className="text-xl font-black">482</span></p>
          <p className="text-[10px] uppercase tracking-widest mt-2 font-black opacity-70">Linked to Small Business Micro-Credit Scheme</p>
        </div>
      </div>
    </div>
  );
}