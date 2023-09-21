"use client";

import Cart from "./-component/Cart";
import Filter from "./-component/Filter";
import Header from "./-component/header";
import Styles from "./index.module.css";

function Library() {
  return (
    <>
      <Header />
      <div className={Styles.sperator}>
        <Filter/>
        <Cart />
      </div>
    </>
  );
}
export default Library;
