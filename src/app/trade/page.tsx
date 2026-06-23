'use client';

import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import client components
const ChartWidget = dynamic(() => import('@/components/ChartWidget'), { ssr: false });
const TrendingWidget = dynamic(() => import('@/components/TrendingWidget'), { ssr: false });

export default function TradeTerminal() {
  const { ready, authenticated, user, logout } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (ready && !authenticated) {
      router.push('/');
    }
  }, [ready, authenticated, router]);

  if (!ready || !authenticated) return null;

  return (
    <div className="min-h-screen bg-[#0d0e12] text-white p-6 font-sans flex flex-col">
      <header className="flex justify-between items-center mb-6 pb-4 border-b border-gray-800">
        <h1 className="text-2xl font-black text-[#676FFF] tracking-tighter uppercase">CHADWALLET // ARENA</h1>
        <div className="flex items-center gap-4">
          <div className="text-xs font-mono bg-green-500/10 text-green-400 px-3 py-1.5 rounded border border-green-500/20">🟢 ONLINE</div>
          <button onClick={logout} className="px-4 py-1.5 bg-[#13141b] hover:bg-[#1a1c26] border border-gray-800 rounded font-bold text-sm">Disconnect</button>
        </div>
      </header>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#13141b] border border-gray-800 rounded-xl p-4 flex flex-col">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">📊 $SOL / USDT <span className="text-xs text-gray-500 font-mono">LIVE FEED</span></h2>
          <div className="flex-1 w-full relative"><ChartWidget /></div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#13141b] border border-gray-800 rounded-xl p-6 flex flex-col">
            <h2 className="text-xl font-bold mb-2">Secure Connection</h2>
            <p className="text-gray-400 mb-6 text-sm">Non-custodial Solana wallet actively linked.</p>
            <div className="bg-black p-4 rounded-lg font-mono text-xs break-all text-gray-500 border border-gray-900 mb-6">
              <span className="text-[#676FFF] font-bold block mb-1">PRIVY_HASH:</span><span className="text-white">{user?.id}</span>
            </div>
          </div>
          
          {/* This renders your Trending component */}
          <TrendingWidget />
        </div>
      </div>
    </div>
  );
}