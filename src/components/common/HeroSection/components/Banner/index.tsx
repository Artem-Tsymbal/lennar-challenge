import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__badge}>WE&apos;RE HIRING</div>
      <Link href="/careers" passHref legacyBehavior>
        <a className={styles.banner__link}>
          Visit our careers page
          <Image
            src="/chevronRightIcon.png"
            alt="Chevron Right"
            className={styles.banner__icon}
            width={10}
            height={6}
          />
        </a>
      </Link>
    </div>
  );
};

export default Banner;
