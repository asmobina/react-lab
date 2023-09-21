"use client";
import Styles from "../index.module.css";

function GenerFilter() {
  return (
    <div className={Styles.filterInfo}>
      <p className={Styles.filterTitle}>ژانر</p>
      <div>
        <ul style={{ listStyle: "none", paddingRight: "10px" }}>
          <li>
            <input type="checkbox" />
            تاریخ
          </li>
          <li>
            <input type="checkbox" />
            فلسفه
          </li>
          <li>
            <input type="checkbox" />
            شعر
          </li>
          <li>
            <input type="checkbox" />
            عاشقانه
          </li>
          <li>
            <input type="checkbox" />
            درام
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GenerFilter;
