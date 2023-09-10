"use client";

import { useState } from "react";
import styles from "./index.module.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  function addHandler(){
    setCounter(counter+1)
  }
  function minesHandler(){
    setCounter(counter-1)
  }
  function OddHandler(){
    if(counter %2 !=0){
        setCounter(counter+1)
    }
  }
  function resetHandler(){
    setCounter(0)
  }
  return (
    <div className={styles.counterCenter}>
      <h1>Counter App</h1>
      <div>
        <p className={styles.counterNum}>{counter}</p>
        <button className={`${styles.same} ${styles.addBack}`} onClick={addHandler}>Add</button>
        <button className={`${styles.same} ${styles.minesBack}`} onClick={minesHandler}>Mines</button>
        <button className={`${styles.same} ${styles.adaOddBack}`} onClick={OddHandler}>Add when odd</button>
        <button className={`${styles.same} ${styles.resetBack}`} onClick={resetHandler}>Resset</button>
      </div>
    </div>
  );
}

export default Counter;
