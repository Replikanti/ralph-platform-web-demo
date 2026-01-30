import React from 'react';

export default function BlindingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-24">
      <div className="relative flex flex-col items-center">
        <h1 className="mb-8 text-4xl font-black tracking-tighter text-gray-900 uppercase animate-pulse">
          WELCOME TO THE LIGHT
        </h1>

        <svg 
          viewBox="0 0 200 200" 
          className="w-64 h-64 drop-shadow-[0_0_50px_rgba(255,255,0,0.8)]"
        >
          <g stroke="#FBBF24" strokeWidth="8" strokeLinecap="round">
            <line x1="100" y1="10" x2="100" y2="40" />
            <line x1="100" y1="160" x2="100" y2="190" />
            <line x1="10" y1="100" x2="40" y2="100" />
            <line x1="160" y1="100" x2="190" y2="100" />
            <line x1="40" y1="40" x2="60" y2="60" />
            <line x1="140" y1="140" x2="160" y2="160" />
            <line x1="40" y1="160" x2="60" y2="140" />
            <line x1="140" y1="40" x2="160" y2="60" />
          </g>
          <circle cx="100" cy="100" r="50" fill="#FBBF24" />
          <g fill="#451A03">
            <circle cx="85" cy="90" r="5" />
            <circle cx="115" cy="90" r="5" />
            <path d="M 80 115 Q 100 135 120 115" fill="transparent" stroke="#451A03" strokeWidth="4" strokeLinecap="round" />
          </g>
        </svg>

        <p className="mt-12 text-xl font-medium text-gray-400 italic">
          (It's high noon somewhere...)
        </p>
      </div>
    </main>
  );
}