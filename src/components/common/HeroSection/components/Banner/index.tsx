import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.badge}>WE&apos;RE HIRING</div>
      <Link href="/careers" passHref legacyBehavior>
        <a className={styles.link}>
          Visit our careers page
          <Image
            src="/chevronRightIcon.png"
            alt="Chevron Right"
            className={styles.icon}
            width={10}
            height={6}
          />
        </a>
      </Link>
    </div>
  );
};

export default Banner;
