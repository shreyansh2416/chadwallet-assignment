'use client';

import { useEffect, useState } from 'react';

export default function TrendingWidget() {
  const [tokens, setTokens] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const res = await fetch('/api/trending');
        const json = await res.json();
        
        // We found the exact path!
        if (json.success && json.data && json.data.tokens) {
          setTokens(json.data.tokens.slice(0, 5));
        }
      } catch (error) {
        console.error("Fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className="bg-[#13141b] border border-gray-800 rounded-xl p-6 flex flex-col h-full w-full">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">🔥 TRENDING</h2>
      {loading ? (
        <div className="text-[#676FFF] font-mono text-sm animate-pulse">Scanning...</div>
      ) : (
        <div className="flex flex-col gap-3">
          {tokens.length > 0 ? (
            tokens.map((token: any, idx: number) => (
              <div key={token.address || idx} className="flex justify-between items-center bg-black/40 p-3 rounded-lg border border-gray-800">
                <div className="flex items-center gap-3">
                  <span className="text-gray-600 font-mono text-xs w-4">#{idx + 1}</span>
                  <span className="font-bold text-white">{token.symbol || 'N/A'}</span>
                </div>
                <div className="text-sm font-mono text-green-400">
                  ${token.price ? token.price.toFixed(4) : '0.00'}
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 text-sm">No tokens found.</div>
          )}
        </div>
      )}
    </div>
  );
}