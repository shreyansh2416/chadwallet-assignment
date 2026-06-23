"use client";
import { useState, useEffect } from "react";

export default function SwapWidget() {
  const [solAmount, setSolAmount] = useState<string>("1");
  const [tokenAmount, setTokenAmount] = useState<string>("0");
  const [loading, setLoading] = useState(false);

  // We have replaced the external fetch with a fast, safe local calculation
  useEffect(() => {
    if (!solAmount || isNaN(Number(solAmount))) {
      setTokenAmount("0.00");
      return;
    }
    
    setLoading(true);
    // Simulate a brief network delay
    const timer = setTimeout(() => {
      // Mock the exchange rate (1 SOL = roughly 6,800,000 BONK)
      const calculatedAmount = (Number(solAmount) * 6800000).toLocaleString();
      setTokenAmount(calculatedAmount);
      setLoading(false);
    }, 400); 

    return () => clearTimeout(timer);
  }, [solAmount]);

  return (
    <div className="bg-[#13141b] border border-gray-800 rounded-xl p-6 flex flex-col h-full w-full">
      <h2 className="text-xl font-bold mb-6 text-white flex justify-between items-center">
        <span>SWAP</span>
        <span className="text-xs text-gray-400 font-mono border border-gray-700 px-2 py-1 rounded">Powered by Jupiter</span>
      </h2>

      <div className="flex flex-col gap-4 flex-1">
        {/* The Input Box (You Pay) */}
        <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
          <label className="text-sm text-gray-500 mb-2 block font-mono">You Pay</label>
          <div className="flex justify-between items-center">
            <input 
              type="number" 
              value={solAmount}
              onChange={(e) => setSolAmount(e.target.value)}
              className="bg-transparent text-2xl font-bold text-white outline-none w-1/2"
            />
            <span className="font-bold text-[#ab67ff] tracking-widest">SOL</span>
          </div>
        </div>

        {/* The Arrow */}
        <div className="flex justify-center -my-2 z-10">
          <div className="bg-[#13141b] border border-gray-800 h-8 w-8 flex items-center justify-center rounded-full text-gray-400">
            ↓
          </div>
        </div>

        {/* The Output Box (You Receive) */}
        <div className="bg-black/40 p-4 rounded-lg border border-gray-800">
          <label className="text-sm text-gray-500 mb-2 block font-mono">You Receive (Est.)</label>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-white overflow-hidden text-ellipsis">
              {loading ? "..." : tokenAmount}
            </span>
            <span className="font-bold text-green-400 tracking-widest ml-2">BONK</span>
          </div>
        </div>

        <div className="flex-1"></div> {/* Pushes button to bottom */}

        {/* The Big Buy Button */}
        <button className="w-full mt-4 bg-[#676FFF] hover:bg-[#5a61eb] text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_15px_rgba(103,111,255,0.2)]">
          Review Order
        </button>
      </div>
    </div>
  );
}