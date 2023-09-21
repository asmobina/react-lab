"use client";
import { useState } from "react";
import styles from "./index.module.css";

function SixteenBox() {
  const [colorBg, setColorBg] = useState("tomato");
  function randomColorHandler(i) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const rgbColor = `rgb(${red} , ${green},${blue})`;

  }
  function makeSquare() {
    let result = [];
    for (let i = 1; i < 17; i++) {
      result.push(
        <div
          className={styles.box}
          onClick={() => randomColorHandler({result })}
          style={{
            backgroundColor: colorBg,
          }}
          key={i}
        >
          {i}
        </div>
      );
    }
    return result;
  }
  return (
    <>
      <p className={styles.title}>16 square</p>
      {makeSquare()}
    </>
  );
}

export default SixteenBox;
