"use client";
import Styles from "../index.module.css";
import AuthorFilter from "./AuthorFilter";
import GenerFilter from "./Generfilter";
import LanguageFilter from "./LanguageFilter";
import DateFilter from "./dateFilter";

function Filter() {
  return (
    <div className={Styles.filterDiv}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <button className={`${Styles.addFilter} ${Styles.same}`}>
          اعمال فیلتر ها
        </button>
        <button className={`${Styles.removeFilter} ${Styles.same}`}>
          حذف فیلتر ها
        </button>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <AuthorFilter />
        <DateFilter/>
        <LanguageFilter/>
        <GenerFilter/>
      </div>
    </div>
  );
}
export default Filter;
