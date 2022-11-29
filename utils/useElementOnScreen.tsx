import React, { useEffect, useRef, useState } from 'react';

export const useElementOnScreen = (ref, options = { threshold: 1 }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const callBack = ([entry]) => {
    setIsIntersecting(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};

export default useElementOnScreen;
