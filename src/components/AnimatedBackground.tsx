
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {/* Animated circles - made larger and more visible */}
        <div className="absolute top-20 left-20 w-48 h-48 bg-red-500/40 rounded-full animate-pulse shadow-lg shadow-red-500/30"></div>
        <div className="absolute top-40 right-32 w-36 h-36 bg-purple-600/40 rounded-full animate-bounce shadow-lg shadow-purple-600/30"></div>
        <div className="absolute bottom-32 left-1/4 w-56 h-56 bg-red-400/30 rounded-full animate-ping shadow-xl shadow-red-400/20"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/35 rounded-full animate-pulse shadow-lg shadow-purple-500/25"></div>
        <div className="absolute top-1/2 left-1/2 w-52 h-52 bg-red-600/25 rounded-full animate-bounce shadow-xl shadow-red-600/20"></div>
        
        {/* Additional medium circles for more depth */}
        <div className="absolute top-10 left-1/2 w-24 h-24 bg-violet-500/30 rounded-full animate-pulse shadow-md shadow-violet-500/20"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-pink-500/25 rounded-full animate-ping shadow-lg shadow-pink-500/15"></div>
        <div className="absolute top-1/3 right-10 w-20 h-20 bg-red-300/35 rounded-full animate-bounce shadow-md shadow-red-300/20"></div>
        
        {/* Floating particles - made more visible */}
        <div className="absolute top-1/3 left-10 w-3 h-3 bg-red-500 rounded-full animate-ping shadow-sm shadow-red-500/50"></div>
        <div className="absolute top-2/3 right-16 w-2 h-2 bg-purple-600 rounded-full animate-pulse shadow-sm shadow-purple-600/50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-red-400 rounded-full animate-bounce shadow-sm shadow-red-400/50"></div>
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-500 rounded-full animate-ping shadow-sm shadow-purple-500/50"></div>
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse shadow-sm shadow-violet-400/50"></div>
        <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-pink-500 rounded-full animate-bounce shadow-sm shadow-pink-500/50"></div>
      </div>
      
      {/* Gradient overlay - slightly lighter to help contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-black"></div>
    </div>
  );
};

export default AnimatedBackground;
