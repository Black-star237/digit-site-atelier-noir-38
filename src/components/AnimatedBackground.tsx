
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Animated circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-purple-600/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-red-400/10 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-purple-500/15 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-red-600/10 rounded-full animate-bounce"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/3 left-10 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-16 w-1 h-1 bg-purple-600 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-ping"></div>
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
    </div>
  );
};

export default AnimatedBackground;
