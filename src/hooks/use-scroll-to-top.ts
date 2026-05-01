import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook that scrolls the page to the top whenever the route changes.
 * Provides a robust solution with multiple fallbacks for cross-browser compatibility.
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to ensure scroll happens after DOM is ready
    const timer = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    return () => cancelAnimationFrame(timer);
  }, [pathname]);
};
