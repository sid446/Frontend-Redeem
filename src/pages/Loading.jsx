import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#A9C4D3] relative overflow-hidden">
      {/* Loading Spinner */}
      <div className="z-10 w-16 h-16 border-4 border-[#F7D773] border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingPage;
