import styles from "./App.module.scss";
import { useState, useEffect } from "react";
import { Home } from "./pages";
import GlobalContextProvider from "./utils/context/GlobalContext.jsx";
import { Cursor } from "./components";

const App = () => {
  const [cursorClass, setCursorClass] = useState("");
  useEffect(() => {
    function hoverHandler(e) {
      setCursorClass(styles.cursorHover);
    }
    function onMouseLeave(e) {
      setCursorClass("");
    }
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.addEventListener("mouseenter", hoverHandler);
      img.addEventListener("mouseleave", onMouseLeave);
    });
  }, []);
  return (
    <GlobalContextProvider>
      <div className={styles.container}>
        <Cursor className={cursorClass} />
        <Home />
      </div>
    </GlobalContextProvider>
  );
};

export default App;
