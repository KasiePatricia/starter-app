import { useLayoutEffect } from 'react';

export const useBodyScrollLock = (isLocked: boolean) => {
  useLayoutEffect(() => {
    if (isLocked) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
    
    // Return an empty cleanup function when isLocked is false
    return () => {};
  }, [isLocked]);
};