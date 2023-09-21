"use client";
import Styles from "../index.module.css";

function LanguageFilter() {
  return (
    <div className={`${Styles.filterDetail} ${Styles.filterInfo}`}>
      <p className={Styles.filterTitle}>زبان</p>
      <div>
        <ul style={{ listStyle: "none", paddingRight: "10px" }}>
          <li>
            <input type="checkbox" />
            persian
          </li>
          <li>
            <input type="checkbox" />
            greek
          </li>
          <li>
            <input type="checkbox" />
            english
          </li>
          <li>
            <input type="checkbox" />
            spanish
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LanguageFilter;
