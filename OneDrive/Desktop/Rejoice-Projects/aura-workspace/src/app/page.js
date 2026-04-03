"use client";
import React, { useState } from 'react';
 import { usePaystackPayment } from 'react-paystack';

export default function VouchTerminal() {
  // --- 1. STATE MANAGEMENT ---
  const [amount, setAmount] = useState("");
  const [sellerInfo, setSellerInfo] = useState("");
  const [description, setDescription] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);

  // --- 2. FORMATTING LOGIC ---
  const formatAmount = (val) => {
    const number = val.replace(/\D/g, "");
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // --- 3. PAYSTACK CONFIGURATION ---
  // Note: This must come BEFORE initializePayment
  const config = {
    reference: (new Date()).getTime().toString(),
    email: "uzodinmarejoicekelechi@gmail.com",
    amount: amount ? parseInt(amount.replace(/\D/g, "")) * 100 : 0, 
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_32d9688069bf62e4fc4f01d5c1066b9b4d311126",
  };

  
  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    console.log("Payment Successful!", reference);
    setIsGenerated(true); 
  };

  const onClose = () => {
    alert("Wait! You haven't secured your vouch yet.");
  };

  
  const handleCopy = () => {
    const shareLink = `https://vouch.rejoiceaura.com/pay/${sellerInfo.replace('@', '')}`;
    navigator.clipboard.writeText(shareLink);
    alert("✅ Vouch link copied! Paste it in your chat with the seller.");
  };

  const resetForm = () => {
    setAmount("");
    setSellerInfo("");
    setDescription("");
    setIsGenerated(false);
  };

  
  if (isGenerated) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] p-6 flex items-center justify-center font-sans">
        <div className="max-w-sm w-full bg-white rounded-[32px] shadow-2xl overflow-hidden border border-slate-100">
          <div className="bg-[#1E3A8A] pt-12 pb-8 text-center">
            <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
              <span className="text-white text-2xl font-black">V</span>
            </div>
            <h2 className="text-white text-[10px] font-black uppercase tracking-[3px]">Secure Escrow Receipt</h2>
          </div>

          <div className="p-8 text-center">
            <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Amount Protected</p>
            <h3 className="text-4xl font-black text-[#1E3A8A] mb-8">₦{amount}</h3>

            <div className="space-y-4 border-t border-b border-slate-50 py-6 mb-8 text-left">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Seller</span>
                <span className="text-sm font-bold text-slate-800">{sellerInfo}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Item</span>
                <span className="text-sm font-bold text-slate-800">{description}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Security</span>
                <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded italic uppercase text-center">Verified by RejoiceAura</span>
              </div>
            </div>

            <button 
              onClick={handleCopy} 
              className="w-full bg-[#3B82F6] text-white font-bold py-5 rounded-2xl shadow-lg active:scale-95 transition-all text-sm uppercase tracking-widest"
            >
              Copy Link & Send
            </button>
            
            <button 
              onClick={resetForm} 
              className="mt-6 text-[10px] text-slate-400 font-bold uppercase tracking-widest hover:text-[#1E3A8A] transition-colors"
            >
              ← Create New Vouch
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- VIEW 2: THE INPUT TERMINAL ---
  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 flex flex-col items-center font-sans">
      <div className="max-w-sm w-full pt-12">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-black text-[#1E3A8A] tracking-tighter">Vouch</h1>
          <p className="text-[9px] font-black uppercase tracking-[4px] text-[#3B82F6] mt-2">RejoiceAura Escrow Standard</p>
        </header>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <label className="block text-[9px] font-black uppercase text-slate-400 mb-2 tracking-widest">Amount (NGN)</label>
            <div className="flex items-center">
              <span className="text-2xl font-bold text-slate-300 mr-2">₦</span>
              <input 
                type="text" 
                value={amount} 
                onChange={(e) => setAmount(formatAmount(e.target.value))} 
                placeholder="0" 
                className="w-full text-3xl font-black outline-none bg-transparent text-[#1E3A8A] placeholder:text-slate-100"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <label className="block text-[9px] font-black uppercase text-slate-400 mb-2 tracking-widest">What are you buying?</label>
            <input 
              type="text" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              placeholder="e.g. Designer Bag" 
              className="w-full text-lg font-bold outline-none bg-transparent text-[#1E3A8A] placeholder:text-slate-200"
            />
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <label className="block text-[9px] font-black uppercase text-slate-400 mb-2 tracking-widest">Seller Name or @Handle</label>
            <input 
              type="text" 
              value={sellerInfo} 
              onChange={(e) => setSellerInfo(e.target.value)} 
              placeholder="e.g. @shop_aura" 
              className="w-full text-lg font-bold outline-none bg-transparent text-[#1E3A8A] placeholder:text-slate-200"
            />
          </div>
        </div>

        <button
          onClick={() => initializePayment(onSuccess, onClose)} 
          disabled={!amount || !sellerInfo || !description}
          className="w-full mt-10 bg-[#1E3A8A] disabled:opacity-20 text-white py-5 rounded-2xl font-bold shadow-xl active:scale-95 transition-all uppercase tracking-widest text-sm"
        >
          Generate Secure Vouch
        </button>

        <footer className="mt-12 text-center">
          <p className="text-[10px] text-slate-400 font-medium italic">
            Secure payments held for 24hrs post-delivery.
          </p>
        </footer>
      </div>
    </div>
  );
}