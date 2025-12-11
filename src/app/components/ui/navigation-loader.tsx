"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import LoadingScreen from "./loading-screen";

const NavigationLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initial page load
  useEffect(() => {
    // Small delay to ensure smooth animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Handle route changes
  useEffect(() => {
    setIsNavigating(false);
  }, [pathname, searchParams]);

  // Listen for navigation start
  useEffect(() => {
    const handleStart = () => {
      setIsNavigating(true);
    };

    // Listen for link clicks to detect navigation
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link) {
        const href = link.getAttribute("href");
        // Only show loading for internal navigation (not anchor links on same page)
        if (href && !href.startsWith("#") && !href.startsWith("http") && !href.startsWith("mailto:")) {
          // Check if it's navigating to a different page
          const currentPath = window.location.pathname;
          const targetPath = href.split("#")[0] || "/";

          if (targetPath !== currentPath && targetPath !== "") {
            setIsNavigating(true);
          }
        }
      }
    };

    document.addEventListener("click", handleLinkClick);

    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return <LoadingScreen isLoading={isLoading || isNavigating} />;
};

export default NavigationLoader;
