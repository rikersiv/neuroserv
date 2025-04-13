import React from "react";
import Header from "@/Layout/Header";
import Footer from "@/Layout/Footer";
import styles from "./index.module.css";

function Aezonia() {
  return (
    <div>
      <Header iswhite={false} />
      <div className={styles.aexoniaContainer}>
        
      </div>
      <Footer />
    </div>
  );
}
export default Aezonia;