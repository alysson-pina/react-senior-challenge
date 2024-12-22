import { useEffect, useState } from "react";

export const useIsLargeScreen = () => {
  const isLargeScreen = () => {
    const screenWidth = window.innerWidth;

    return screenWidth >= 768;
  };

  const [isLarge, setIsLarge] = useState(isLargeScreen());

  useEffect(() => {
    function handleResize() {
      setIsLarge(isLargeScreen());
    }

    window.addEventListener('resize', handleResize);
  }, []);

  return isLarge;
};
