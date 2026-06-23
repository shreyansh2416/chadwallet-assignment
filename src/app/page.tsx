'use client'; // This allows us to use onClick events

import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { login, ready, authenticated } = usePrivy();
  const router = useRouter();

  const handleTradeClick = () => {
    if (authenticated) {
      // If already logged in, go to the trading arena (we will build this next)
      router.push('/trade');
    } else {
      // If not logged in, pop open the Privy login modal
      login();
    }
  };

  return (
    <main className="min-h-screen bg-[#0d0e12] text-white flex flex-col overflow-x-hidden font-sans">
      
      {/* Top Ticker */}
      <div className="w-full bg-[#13141b] border-b border-gray-800 py-3 flex overflow-hidden">
        <div className="animate-marquee flex gap-12 text-sm font-mono text-green-400 font-bold tracking-widest whitespace-nowrap">
           <span>🚀 $CHAD +24.5%</span><span>🔥 $PEPE +12.1%</span><span>🐕 $DOGE +4.2%</span><span>💎 $WIF +42.0%</span>
           <span>🚀 $CHAD +24.5%</span><span>🔥 $PEPE +12.1%</span><span>🐕 $DOGE +4.2%</span><span>💎 $WIF +42.0%</span>
           <span>🚀 $CHAD +24.5%</span><span>🔥 $PEPE +12.1%</span><span>🐕 $DOGE +4.2%</span><span>💎 $WIF +42.0%</span>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center justify-center flex-1 px-4 text-center max-w-5xl mx-auto w-full z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#676FFF]/10 text-[#676FFF] text-sm font-bold mb-8 border border-[#676FFF]/20">
          <Sparkles size={16} />
          <span>THE ONLY SOCIAL-FIRST TRADING APP</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-gradient-to-br from-white via-gray-200 to-gray-600 bg-clip-text text-transparent leading-[1.1]">
          WHERE TRADERS <br/> BECOME LEGENDS.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
          From memecoins to viral tokens, trade any crypto in seconds. Zero complexity. One click to buy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            disabled={!ready}
            onClick={handleTradeClick}
            className="flex items-center justify-center gap-3 bg-[#676FFF] hover:bg-[#565cee] disabled:opacity-50 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(103,111,255,0.3)]"
          >
            {authenticated ? 'Enter Arena' : 'Start Trading'} <ArrowRight size={24} />
          </button>
          
          <button className="flex items-center justify-center gap-3 bg-[#13141b] hover:bg-[#1a1c26] text-white px-10 py-5 rounded-2xl font-bold text-lg border border-gray-800 transition-all">
            <Download size={24} /> Download App
          </button>
        </div>
      </div>
      
      {/* Bottom Ticker */}
      <div className="w-full bg-[#13141b] border-t border-gray-800 py-3 flex overflow-hidden">
        <div className="animate-marquee flex gap-12 text-sm font-mono text-gray-400 whitespace-nowrap">
           <span>💰 0x4a... bought 10M $CHAD</span><span>🚨 Whale alert: 50K SOL transferred</span><span>💰 0x8b... bought 5M $WIF</span>
           <span>💰 0x4a... bought 10M $CHAD</span><span>🚨 Whale alert: 50K SOL transferred</span><span>💰 0x8b... bought 5M $WIF</span>
           <span>💰 0x4a... bought 10M $CHAD</span><span>🚨 Whale alert: 50K SOL transferred</span><span>💰 0x8b... bought 5M $WIF</span>
        </div>
      </div>
      
    </main>
  );
}