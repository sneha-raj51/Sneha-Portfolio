import React from 'react';

export default function BackgroundAtmosphere() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />

      {/* Primary Electric Violet Atmospheric Glow - Top Right */}
      <div 
        className="absolute -top-[20%] -right-[10%] w-[650px] h-[650px] rounded-full blur-[140px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, #6d28d9 45%, transparent 70%)'
        }}
      />

      {/* Secondary Deep Indigo Glow - Center Left */}
      <div 
        className="absolute top-[35%] -left-[15%] w-[600px] h-[600px] rounded-full blur-[160px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #7c3aed 0%, #4c1d95 50%, transparent 75%)'
        }}
      />

      {/* Tertiary Soft Lavender Glow - Bottom Right */}
      <div 
        className="absolute bottom-[10%] -right-[12%] w-[550px] h-[550px] rounded-full blur-[150px] opacity-15"
        style={{
          background: 'radial-gradient(circle, #c084fc 0%, #8b5cf6 40%, transparent 70%)'
        }}
      />

      {/* Subtle radial vignette overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(9, 9, 11, 0.4) 60%, rgba(9, 9, 11, 0.85) 100%)'
        }}
      />
    </div>
  );
}
