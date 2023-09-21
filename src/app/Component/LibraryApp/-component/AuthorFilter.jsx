"use client";
import Styles from "../index.module.css";

function AuthorFilter() {
  return (
    <div className={`${Styles.filterDetail} ${Styles.filterInfo}`}>
      <p className={Styles.filterTitle}>نویسنده</p>
      <div>
        <ul style={{listStyle:"none",paddingRight:"10px"}}>
          <li>
            <input type="checkbox" />
            ژان گور
          </li>
          <li>
            <input type="checkbox" />
            افلاطون
          </li>
          <li>
            <input type="checkbox" />
            عطار
          </li>
          <li>
            <input type="checkbox" />
            مولوی
          </li>
          <li>
            <input type="checkbox" />
            حافظ
          </li>
          <li>
            <input type="checkbox" />
            ویلیام شکسپیر
          </li>
          <li>
            <input type="checkbox" />
            فخرالدین اسعد گرگانی
          </li>
          <li>
            <input type="checkbox" />
            سعدی
          </li>
          <li>
            <input type="checkbox" />
            شیخ محمود شبستری
          </li>
          <li>
            <input type="checkbox" />
            نظامی
          </li>
          <li>
            <input type="checkbox" />
            فردوسی
          </li>
          <li>
            <input type="checkbox" />
            هومر
          </li>
          <li>
            <input type="checkbox" />
            میگل دسروانتس
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AuthorFilter;
