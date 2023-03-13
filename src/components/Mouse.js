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
      <button className="hoverable">Linke 1</button>
      <button className="hoverable">Click me!</button>

      <div
        className="cursor"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      ></div>
    </>
  );
}
