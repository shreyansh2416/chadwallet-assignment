import Link from 'next/link';

export default function LandingPage() {
  // Mock data for the marquee (will rotate seamlessly)
  const tokens = [
    { symbol: 'SOL', price: '$143.20', change: '+2.4%' },
    { symbol: 'BONK', price: '$0.000021', change: '+14.2%' },
    { symbol: 'WIF', price: '$2.85', change: '-1.2%' },
    { symbol: 'POPCAT', price: '$0.45', change: '+8.7%' },
    { symbol: 'BOME', price: '$0.012', change: '+5.1%' },
    { symbol: 'JUP', price: '$0.98', change: '+1.1%' },
    { symbol: 'CHAD', price: '$0.05', change: '+42.0%' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white flex flex-col relative overflow-hidden">
      {/* GPU-Accelerated CSS Marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}} />

      {/* TOP MARQUEE (Requirement 4) */}
      <div className="w-full bg-[#13141b] border-b border-gray-800 py-3 overflow-hidden whitespace-nowrap flex">
        <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]">
          {[...tokens, ...tokens].map((t, i) => (
            <Link href="/trade" key={i} className="flex items-center gap-2 mx-8 hover:opacity-75 transition-opacity cursor-pointer">
              <span className="font-bold">{t.symbol}</span>
              <span className="text-gray-400 font-mono">{t.price}</span>
              <span className={t.change.startsWith('+') ? 'text-green-400 font-mono' : 'text-red-400 font-mono'}>{t.change}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* HERO SECTION */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center z-10">
        
        {/* BRANDING (Requirement 1) */}
        <div className="mb-8 p-8 bg-white/5 rounded-3xl border border-gray-800 shadow-2xl flex flex-col items-center backdrop-blur-sm">
          {/* Your uploaded Logo! If it's a dark line drawing, the bg-white helps it pop */}
          <div className="bg-white p-4 rounded-full mb-6">
             <img src="/light.png" alt="ChadWallet" className="h-24 w-24 object-contain" />
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#676FFF] to-[#ab67ff]">
            CHADWALLET
          </h1>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-3xl">
          The Social-First Crypto Trading Terminal.
        </h2>
        
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          Sign in instantly with Apple or Google. Trade any asset on-chain with zero friction. Join the arena.
        </p>

        {/* CALL TO ACTIONS */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          {/* Routes to the Privy Auth / Trading Terminal */}
          <Link href="/trade" className="px-8 py-4 bg-[#676FFF] hover:bg-[#5a61eb] text-white font-bold rounded-full transition-all text-lg shadow-[0_0_20px_rgba(103,111,255,0.4)]">
            Launch Terminal
          </Link>
          
          <div className="flex gap-4">
            {/* MOBILE APP LINKS (Requirement 1b) */}
            <a href="https://apps.apple.com/us/app/chadwallet/id6757367474" target="_blank" rel="noreferrer" className="px-6 py-4 bg-[#13141b] border border-gray-700 hover:border-gray-500 rounded-full font-semibold transition-all">
              🍎 App Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=xyz.chadwallet.www" target="_blank" rel="noreferrer" className="px-6 py-4 bg-[#13141b] border border-gray-700 hover:border-gray-500 rounded-full font-semibold transition-all">
              🤖 Google Play
            </a>
          </div>
        </div>
      </main>

      {/* BOTTOM MARQUEE (Requirement 4) */}
      <div className="w-full bg-[#13141b] border-t border-gray-800 py-3 overflow-hidden whitespace-nowrap flex absolute bottom-0">
        <div className="flex w-[200%] animate-marquee hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
          {[...tokens, ...tokens].map((t, i) => (
             <Link href="/trade" key={i} className="flex items-center gap-2 mx-8 hover:opacity-75 transition-opacity cursor-pointer">
             <span className="font-bold">{t.symbol}</span>
             <span className="text-gray-400 font-mono">{t.price}</span>
             <span className={t.change.startsWith('+') ? 'text-green-400 font-mono' : 'text-red-400 font-mono'}>{t.change}</span>
           </Link>
          ))}
        </div>
      </div>
    </div>
  );
}