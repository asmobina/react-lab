"use client";

import { useState } from "react";
import styles from "./index.module.css";

function StudentScore() {
  const [backColor, setbackColor] = useState("red");
  const [backNum, setbackNum] = useState(0);
  function clickHandler() {
    const randomNum = Math.floor(Math.random() * 101);
    setbackNum(randomNum);
    if (randomNum >= 0 && randomNum < 60) {
      setbackColor("red");
    } else if (randomNum >= 60 && randomNum < 80) {
      setbackColor("#ffd100");
    } else if (randomNum >= 80 && randomNum <= 100) {
      setbackColor("rgb(0 255 109)");
    }
  }
  return (
    <div className={styles.center}>
      <p className={styles.title}>student score status</p>
      <div
        className={styles.box}
        style={{ backgroundColor: backColor }}
        onClick={clickHandler}
      >
        <span className={styles.centerNum}>{backNum}</span>
      </div>
    </div>
  );
}

export default StudentScore;
