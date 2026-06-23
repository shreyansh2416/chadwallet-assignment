'use client';

import { createChart, ColorType, CandlestickSeries } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

export default function ChartWidget() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: { background: { type: ColorType.Solid, color: 'transparent' }, textColor: '#9ca3af' },
      grid: { vertLines: { color: '#1f2937' }, horzLines: { color: '#1f2937' } },
      width: chartContainerRef.current.clientWidth,
      height: 400,
    });

    // Use addSeries with CandlestickSeries for V5 compatibility
    const series = chart.addSeries(CandlestickSeries, {
      upColor: '#4ade80', downColor: '#f87171', borderVisible: false, wickUpColor: '#4ade80', wickDownColor: '#f87171',
    });

    fetch('https://api.binance.com/api/v3/klines?symbol=SOLUSDT&interval=1m&limit=100')
      .then((res) => res.json())
      .then((data) => {
        const d = data.map((k: any) => ({ time: k[0] / 1000, open: parseFloat(k[1]), high: parseFloat(k[2]), low: parseFloat(k[3]), close: parseFloat(k[4]) }));
        series.setData(d);
      });

    const ws = new WebSocket('wss://stream.binance.com:9443/ws/solusdt@kline_1m');
    ws.onmessage = (e) => {
      const msg = JSON.parse(e.data);
      series.update({ time: msg.k.t / 1000, open: parseFloat(msg.k.o), high: parseFloat(msg.k.h), low: parseFloat(msg.k.l), close: parseFloat(msg.k.c) });
    };

    return () => { ws.close(); chart.remove(); };
  }, []);

  return <div ref={chartContainerRef} className="w-full h-[400px]" />;
}