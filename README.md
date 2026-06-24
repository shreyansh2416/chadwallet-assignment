# 🦁 ChadWallet - Founding Engineer Assignment

A high-performance, Web3-native trading application built for the ChadWallet technical screen. This project features a landing page with a live crypto ticker and a full trading terminal utilizing real-time WebSocket data.

**Live Production App:** [https://chadwallet-assignment-pi.vercel.app](https://chadwallet-assignment-pi.vercel.app)

---

## ✨ Features Built

### 1. The Gateway (Landing Page)
* **Dark Mode UI:** Built to match the sleek, high-contrast `fomo.family` aesthetic.
* **Live Market Ticker:** Infinite-scroll rotating banners at the top and bottom tracking real-time crypto assets.
* **Frictionless Onboarding:** Integrated **Privy** for seamless, Web2-style Apple and Google authentication.

### 2. The Trading Terminal (`/trade` - Bonus Task)
* **Real-Time Charting:** Integrated **TradingView Lightweight Charts** pulling historical candlestick data combined with live **Binance WebSockets** (SOL/USDT) for zero-latency price action.
* **Native Solana Swaps:** Embedded and customized the **Jupiter Terminal** directly into the UI for seamless token swaps.
* **Trending Feed:** Sidebar tracking top trending tokens.

---

## 🛠 Tech Stack

* **Framework:** Next.js (App Router), React, TypeScript
* **Styling:** Tailwind CSS
* **Web3 Auth:** Privy (`@privy-io/react-auth`)
* **DEX Integration:** Jupiter API / Terminal
* **Data & Charting:** TradingView Lightweight Charts, BirdEye API, Binance WebSockets
* **Deployment:** Vercel

---

## 🚀 Getting Started Locally

To run this project on your local machine:

**1. Clone the repository**
```bash
git clone [https://github.com/shreyansh2416/chadwallet-assignment.git](https://github.com/shreyansh2416/chadwallet-assignment.git)
cd chadwallet-assignment
