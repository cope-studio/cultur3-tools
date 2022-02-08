import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext({});

const GlobalContextProvider = ({ children }) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  function updateInnerWidth() {
    setInnerWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", updateInnerWidth);
    return () => window.removeEventListener("resize", updateInnerWidth);
  });
  return (
    <GlobalContext.Provider value={{ innerWidth }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
