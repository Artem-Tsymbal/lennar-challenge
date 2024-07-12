import React from "react";
import styles from "./index.module.scss";

interface SubmitButtonProps {
  children: React.ReactNode;
  variant: "mobile" | "desktop";
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, variant }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};

export default SubmitButton;
