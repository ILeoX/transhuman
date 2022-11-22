import React, { useEffect, useRef, useState } from 'react';

export const useElementOnScreen = (options = { threshold: 1 }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callBack = (entries: any[]) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, [options]);

  return [containerRef, isVisible];
};

export default useElementOnScreen;
