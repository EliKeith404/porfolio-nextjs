import { useState, useEffect } from 'react';

const useWindow = () => {
  // Initialize state with undefined width/height so server and client renders match
  const [windowProps, setWindowProps] = useState({
    width: undefined,
    height: undefined,
    scrollX: undefined,
    scrollY: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowProps((prev) => {
          return {
            ...prev,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        });
      }

      function handleScroll() {
        // Set window scroll to state
        setWindowProps((prev) => {
          return {
            ...prev,
            scrollX: window.scrollX,
            scrollY: window.scrollY,
          };
        });
      }

      // Add event listener
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll);

      // Call handler right away so state gets updated with initial window state
      handleResize();
      handleScroll();

      // Remove event listener on cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []); // Empty array ensures that effect is only run on mount

  return windowProps;
};

export default useWindow;
