"use client";
import React, { useState, useEffect } from 'react';

export default function VouchTerminal() {
  const [amount, setAmount] = useState("");
  const [sellerInfo, setSellerInfo] = useState("");
  const [description, setDescription] = useState("");
  const [isGenerated, setIsGenerated] = useState(false);
  const [paystackHook, setPaystackHook] = useState(null);

  useEffect(() => {
    import('react-paystack').then((module) => {
      setPaystackHook(() => module.usePaystackPayment);
    });
  }, []);

  const formatAmount = (val) => {
    const number = val.replace(/\D/g, "");
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const config = {
    reference: (new Date()).getTime().toString(),
    email: "uzodinmarejoicekelechi@gmail.com",
    amount: amount ? parseInt(amount.replace(/\D/g, "")) * 100 : 0, 
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_test_32d9688069bf62e4fc4f01d5c1066b9b4d311126",
  };

  const initializePayment = paystackHook ? paystackHook(config) : null;

  const handleGenerateClick = () => {
    if (initializePayment) {
      initializePayment(() => setIsGenerated(true), () => alert("Payment cancelled."));
    }
  };

  if (isGenerated) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] p-6 flex items-center justify-center font-sans">
        <div className="max-w-sm w-full bg-white rounded-[32px] shadow-2xl p-8 text-center border border-slate-100">
           <h2 className="text-[#1E3A8A] text-xl font-black mb-4">Vouch Secured!</h2>
           <p className="text-sm text-slate-500 mb-6">Your payment for {description} is held in escrow.</p>
           <button onClick={() => setIsGenerated(false)} className="text-blue-600 font-bold uppercase text-[10px]">Create New Vouch</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 flex flex-col items-center font-sans">
      <div className="max-w-sm w-full pt-12 text-center">
        <h1 className="text-4xl font-black text-[#1E3A8A]">Vouch</h1>
        <div className="mt-8 space-y-4">
          <input type="text" value={amount} onChange={(e) => setAmount(formatAmount(e.target.value))} placeholder="Amount" className="w-full p-4 rounded-2xl border outline-none" />
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Item Description" className="w-full p-4 rounded-2xl border outline-none" />
          <input type="text" value={sellerInfo} onChange={(e) => setSellerInfo(e.target.value)} placeholder="Seller @handle" className="w-full p-4 rounded-2xl border outline-none" />
          <button onClick={handleGenerateClick} disabled={!paystackHook} className="w-full bg-[#1E3A8A] text-white p-5 rounded-2xl font-bold">
            {paystackHook ? "Generate Secure Vouch" : "Loading System..."}
          </button>
        </div>
      </div>
    </div>
  );
}