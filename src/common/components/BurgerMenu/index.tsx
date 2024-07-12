import React from "react";
import styles from "./index.module.scss";

interface BurgerMenuProps {
  onClick: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => {
  return (
    <button
      className={styles.burgerMenu}
      onClick={onClick}
      aria-label="Open menu"
    >
      <div className={styles.burgerMenuLine}></div>
      <div className={styles.burgerMenuLine}></div>
      <div className={styles.burgerMenuLine}></div>
    </button>
  );
};

export default BurgerMenu;
