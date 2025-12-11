"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  isLoading?: boolean;
}

const LoadingScreen = ({ isLoading = true }: LoadingScreenProps) => {
  const [visible, setVisible] = useState(isLoading);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setFadeOut(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 500); // Match the fade-out animation duration
      return () => clearTimeout(timer);
    } else {
      setVisible(true);
      setFadeOut(false);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
      <div className="flex flex-col items-center gap-6">
        {/* Spinning Loader */}
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
          <div className="spinner-ring"></div>
        </div>

        {/* Loading Text */}
        <div className="flex items-center gap-1">
          <span className="text-lg font-medium text-primary loading-text">Loading</span>
          <span className="loading-dots">
            <span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
