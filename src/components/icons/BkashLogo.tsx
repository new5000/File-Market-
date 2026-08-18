import React from 'react';

interface BkashLogoProps {
  className?: string;
  size?: number | string;
}

export const BkashLogo: React.FC<BkashLogoProps> = ({ className = 'w-6 h-6', size }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={size ? { width: size, height: size } : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="bKash"
    >
      {/* Official bKash Magenta Circle */}
      <circle cx="50" cy="50" r="50" fill="#E2136E" />
      
      {/* Origami Bird Facets (Crisp White) */}
      {/* Upper Left Wing */}
      <polygon points="43.7,48.7 21.8,20.3 51.1,23.7" fill="#FFFFFF" />
      {/* Wing Tip Fold */}
      <polygon points="21.8,20.3 20.8,25.1 33.5,36.2" fill="#FFFFFF" />
      
      {/* Head / Crest */}
      <polygon points="43.7,48.7 51.1,23.7 65.2,41.2" fill="#FFFFFF" />
      
      {/* Beak */}
      <polygon points="65.2,41.2 84.8,44.2 78.0,44.5" fill="#FFFFFF" />
      
      {/* Throat / Upper Chest */}
      <polygon points="65.2,41.2 78.0,44.5 72.6,52.8 43.7,48.7" fill="#FFFFFF" />
      
      {/* Belly / Lower Body */}
      <polygon points="43.7,48.7 72.6,52.8 47.9,65.0" fill="#FFFFFF" />
      
      {/* Tail */}
      <polygon points="43.7,48.7 47.9,65.0 34.9,79.6" fill="#FFFFFF" />
      
      {/* Origami Crease Lines for Precision Visual Depth */}
      <polyline points="43.7,48.7 51.1,23.7" stroke="#E2136E" strokeWidth="0.9" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points="43.7,48.7 65.2,41.2" stroke="#E2136E" strokeWidth="0.9" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points="43.7,48.7 72.6,52.8" stroke="#E2136E" strokeWidth="0.9" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points="43.7,48.7 47.9,65.0" stroke="#E2136E" strokeWidth="0.9" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points="65.2,41.2 72.6,52.8" stroke="#E2136E" strokeWidth="0.9" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points="78.0,44.5 72.6,52.8" stroke="#E2136E" strokeWidth="0.9" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points="21.8,20.3 43.7,48.7" stroke="#E2136E" strokeWidth="0.9" strokeLinejoin="round" strokeLinecap="round" />
      <line x1="51.5" y1="64.5" x2="70.5" y2="54.5" stroke="#E2136E" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="22.5" y1="25.5" x2="33.0" y2="36.0" stroke="#E2136E" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  );
};
