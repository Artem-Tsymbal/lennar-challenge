import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";

const Terms: React.FC = () => {
  return (
    <p className={styles.terms}>
      Start your free 14-day trial, no credit card necessary. By providing your
      email, you agree to our
      <Link href="/terms" legacyBehavior>
        <a className={styles.termsLink}>terms of service</a>
      </Link>
      .
    </p>
  );
};

export default Terms;
