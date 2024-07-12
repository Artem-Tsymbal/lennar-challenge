import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.badge}>WE'RE HIRING</div>
      <Link href="/careers" legacyBehavior>
        <a className={styles.link}>
          Visit our careers page
          <img
            src={"./chevronRightIcon.png"}
            alt="Chevron Right"
            className={styles.icon}
          />
        </a>
      </Link>
    </div>
  );
};

export default Banner;
