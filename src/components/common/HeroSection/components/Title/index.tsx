import React from "react";
import styles from "./index.module.scss";

const Title: React.FC = () => {
  return (
    <div className={styles["title-container"]}>
      <h1 className={styles.title}>
        A better way to{" "}
        <span className={styles["title__highlight"]}>ship web apps</span>
      </h1>
    </div>
  );
};

export default Title;
