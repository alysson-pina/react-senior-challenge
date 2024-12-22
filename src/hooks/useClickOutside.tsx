import { useEffect, RefObject } from "react";

const useClickOutside = (ref: RefObject<HTMLElement | undefined>, callback: () => void) => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (ref?.current && !ref.current.contains(target)) {
      callback();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export {
  useClickOutside
};
