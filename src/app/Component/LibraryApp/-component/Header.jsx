"use client";
import styles from "../index.module.css";

function Header() {
  return (
    <div className={styles.labHeader}>
      <p>LOGO</p>
      <ul className={styles.menu}>
        <li className={styles.liItem}>
          <a href="#" className={styles.menuItem}>وبلاگ</a>
        </li>
        <li className={styles.liItem}>
          <a href="#" className={styles.menuItem}>دسته بندی ها</a>
        </li>
        <li className={styles.liItem}>
          <a href="#" className={styles.menuItem}>ارتباط با ما</a>
        </li>
        <li className={styles.liItem}>
          <a href="#" className={styles.menuItem}>درباره ما</a>
        </li>
      </ul>
      <a href="#">
        <img className={styles.shopImg} src="./images/shopping-cart.webp" alt="" />
      </a>
    </div>
  );
}
export default Header;
