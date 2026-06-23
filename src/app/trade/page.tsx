"use client";

import React from 'react';
import Link from 'next/link';
import SwapWidget from "@/components/SwapWidget";

export default function TradePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white flex flex-col font-sans">
      {/* Top Application Header Bar */}
      <header className="w-full bg-[#13141b] border-b border-gray-800 px-6 py-4 flex justify-between items-center z-20">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-gray-400 group-hover:text-white transition-colors">←</span>
            <span className="font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#676FFF] to-[#ab67ff]">
              CHADWALLET
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-4 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              SOLANA MAINNET
            </span>
          </div>
        </div>
        
        {/* Real-time Ticker Meta Metrics */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-mono">
          <div>
            <span className="text-gray-500">SOL/USDC: </span>
            <span className="text-green-400 font-bold">$143.20</span>
          </div>
          <div>
            <span className="text-gray-500">24h Volume: </span>
            <span className="text-gray-300">$1.2B</span>
          </div>
        </div>
      </header>

      {/* Main Terminal Workspace Layout */}
      <main className="flex-1 p-4 md:p-6 grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-73px)] overflow-hidden">
        
        {/* Left/Center Section: Market Analysis Area */}
        <div className="lg:col-span-3 flex flex-col gap-4 h-full">
          <div className="flex-1 bg-[#13141b] border border-gray-800 rounded-xl relative overflow-hidden flex flex-col">
            
            <div className="px-4 py-3 border-b border-gray-800 flex justify-between items-center bg-[#161822]">
              <div className="flex items-center gap-3">
                <span className="font-bold font-mono text-sm">SOL / BONK</span>
                <span className="text-xs font-mono text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded">+14.2%</span>
              </div>
              <div className="flex gap-2 text-xs font-mono text-gray-400">
                <button className="px-2 py-0.5 bg-gray-800 rounded text-white">1M</button>
                <button className="px-2 py-0.5 hover:text-white">5M</button>
                <button className="px-2 py-0.5 hover:text-white">1H</button>
                <button className="px-2 py-0.5 hover:text-white">1D</button>
              </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <div className="w-full h-full bg-black/20 rounded-lg border border-dashed border-gray-800 flex flex-col items-center justify-center text-center p-6">
                <div className="text-[#676FFF] text-4xl mb-3">📈</div>
                <h3 className="text-sm font-semibold text-gray-300 font-mono mb-1">TRADINGVIEW ENGINE CONTAINER</h3>
                <p className="text-xs text-gray-500 max-w-sm">
                  Allocated viewport zone for real-time charting canvas.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Section: Transaction Routing Interface */}
        <div className="lg:col-span-1 h-full flex flex-col">
          <SwapWidget />
        </div>

      </main>
    </div>
  );
}