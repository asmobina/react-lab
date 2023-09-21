"use client";
import Styles from "../index.module.css";

function DateFilter() {
  return (
    <div className={`${Styles.filterDetail} ${Styles.filterInfo}`}>
      <p className={Styles.filterTitle}>تاریخ انتشار</p>
      <div>
        <ul style={{ listStyle: "none", paddingRight: "10px" }}>
          <li>
            <input type="checkbox" />
            since 385
          </li>
          <li>
            <input type="checkbox" />
            since 725
          </li>
          <li>
            <input type="checkbox" />
            since 1010
          </li>
          <li>
            <input type="checkbox" />
            since 1050
          </li>
          <li>
            <input type="checkbox" />
            since 1175
          </li>
          <li>
            <input type="checkbox" />
            since 1185
          </li>
          <li>
            <input type="checkbox" />
            since 1200
          </li>
          <li>
            <input type="checkbox" />
            since 1250
          </li>
          <li>
            <input type="checkbox" />
            since 1310
          </li>
          <li>
            <input type="checkbox" />
            since 1590
          </li>
          <li>
            <input type="checkbox" />
            since 1600
          </li>
          <li>
            <input type="checkbox" />
            since 2000
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DateFilter;
