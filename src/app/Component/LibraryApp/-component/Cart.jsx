"use client";
import BOOKS from "./data";
import styles from "../index.module.css";
function Cart() {
  return (
    <div className={styles.all}>
      {BOOKS.map((item) => {
        return (
          <div style={{ position: "relative" }}>
            <img
              src={`./images/${item.imgSrc}`}
              key={item.id}
              className={styles.imgCover}
            />
            <div className={styles.info}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <p className={styles.infoTitle}>{item.title}</p>
                <p className={styles.detail}>{`اثر ${item.author}`}</p>
                <p className={styles.detail}>{item.published_date}</p>
                <p className={styles.detail}>{`زبان : ${item.language}`}</p>
                <p className={styles.detail}>{`ژانر : ${item.genre}`}</p>
              </div>
              <div className={styles.addBasket}>
                <h4 className={styles.add}>اضافه به سبد خرید</h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Cart;
