import { useState, useEffect } from "react";

export default function useWindowSize() {
  const isWindow = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isWindow ?  window.innerWidth : 1200,
    height: isWindow ? window.innerHeight : 800,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}