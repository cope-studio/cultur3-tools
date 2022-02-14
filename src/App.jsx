import styles from "./App.module.scss";
import { Home } from "./pages";
import GlobalContextProvider from "./utils/context/GlobalContext.jsx";

const App = () => {
  return (
    <GlobalContextProvider>
      <div className={styles.container}>
        <Home />
      </div>
    </GlobalContextProvider>
  );
};

export default App;
