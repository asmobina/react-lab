"use client";
import { useState } from "react";
import styles from "./index.module.css";

const IMGSRC = [
  {
    name: "model 1",
    src: "./images/1.png",
  },
  {
    name: "model 2",
    src: "./images/2.png",
  },
  {
    name: "model 3",
    src: "./images/3.png",
  },
  {
    name: "model 4",
    src: "./images/4.png",
  },
  {
    name: "model 5",
    src: "./images/5.png",
  },
];

function SlideShow() {
  const [bigImg, SetBigImg] = useState(IMGSRC[0]);
  function clickHandler(item) {
    SetBigImg(item);
  }
  function nextSlideHandler() {
    let result = IMGSRC.findIndex((item) => {
      return item == bigImg;
    });

    result = result + 1;

    if (result >= IMGSRC.length) {
      result = 0;
    }

    SetBigImg(IMGSRC[result]);
  }
  function previosSlideHandler() {
    let result = IMGSRC.findIndex((item) => {
      return item == bigImg;
    });

    result = result - 1;

    if (result < 0) {
      result = IMGSRC.length-1;
    }

    SetBigImg(IMGSRC[result]);
  }
  return (
    <div className={styles.center}>
      <p className={styles.title}>Slide Show</p>
      <div className={styles.big}>
        <button
          onClick={previosSlideHandler}
          className={`${styles.btnNext} ${styles.btn}`}
        >
          prev
        </button>
        <img src={bigImg.src} className={styles.viweBigImg}></img>
        <button
          onClick={nextSlideHandler}
          className={`${styles.btnPrev} ${styles.btn}`}
        >
          next
        </button>
      </div>
      <div className={styles.smallImg}>
        {IMGSRC.map((item, index) => (
          <img
            src={item.src}
            className={styles.viweImg}
            onClick={() => clickHandler(item)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default SlideShow;
