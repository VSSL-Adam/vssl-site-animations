import { useState, useEffect } from "react";

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setCursorPos({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Adding the "hoverable" class to any element causes the mouse cursor to change */}
      {/* <button className="hoverable">Sample Button</button>       */}
      <div
        className="cursor"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      ></div>
    </>
  );
}
