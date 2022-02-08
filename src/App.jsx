import styles from "./App.module.scss";
import { Home } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalContextProvider from "./utils/context/GlobalContext.jsx";

const App = () => {
  return (
    <Router basename="/culture-tools">
      <GlobalContextProvider>
        <div className={styles.container}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </GlobalContextProvider>
    </Router>
  );
};

export default App;
