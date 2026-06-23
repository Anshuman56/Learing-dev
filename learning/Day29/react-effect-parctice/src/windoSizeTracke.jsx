import { useEffect, useState } from "react";

export default function WindowSizeTracker() {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  useEffect(() => {
    function handleSize() {
      setSize({ height: window.innerHeight, width: window.innerWidth });
    }
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return (
    <div>
      <h2>Window Size</h2>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  );
}
