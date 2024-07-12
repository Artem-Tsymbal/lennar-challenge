import React from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./index.module.scss";
import SubmitButton from "../../../../shared/SubmitButton";

const FormComponent: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <div className={styles.outerContainer}>
      <input
        type="email"
        placeholder="Enter your email"
        className={styles.input}
      />
      <SubmitButton variant={isMobile ? "mobile" : "desktop"}>
        Start free trial
      </SubmitButton>
    </div>
  );
};

export default FormComponent;
