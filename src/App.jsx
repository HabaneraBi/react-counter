import { useState } from "react";
import ButSection from "./components/ButSection/ButSection";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className={styles.h1}>Счётчик:</h1>
      <p className={styles.p}>{count}</p>
      <ButSection setP={setCount} />
    </>
  );
}

export default App;
