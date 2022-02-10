import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext({});

const GlobalContextProvider = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [cursorPosition, setCursorPosition] = useState("");
  function updateInnerWidth() {
    setInnerWidth(window.innerWidth);
  }
  useEffect(() => {
    const onMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", updateInnerWidth);
    return () => window.removeEventListener("resize", updateInnerWidth);
  });
  return (
    <GlobalContext.Provider
      value={{ innerWidth, cursorPosition, setCursorPosition }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
