import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.BIRDEYE_SECRET_KEY || process.env.NEXT_PUBLIC_BIRDEYE_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ success: false, error: 'API key missing' }, { status: 500 });
  }

  try {
    const response = await fetch('https://public-api.birdeye.so/defi/token_trending?sort_by=rank&sort_type=asc&offset=0&limit=5', {
      headers: {
        'X-API-KEY': apiKey,
        'x-chain': 'solana'
      }
    });
    
    if (!response.ok) {
        return NextResponse.json({ success: false, error: 'Birdeye API error' }, { status: response.status });
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server fetch failed' }, { status: 500 });
  }
}