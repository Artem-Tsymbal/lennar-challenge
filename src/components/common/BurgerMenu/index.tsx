import React from "react";
import styles from "./index.module.scss";

interface BurgerMenuProps {
  onClick: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClick }) => {
  return (
    <button
      className={styles["burger-menu"]}
      onClick={onClick}
      aria-label="Open menu"
    >
      <div className={styles["burger-menu__line"]}></div>
      <div className={styles["burger-menu__line"]}></div>
      <div className={styles["burger-menu__line"]}></div>
    </button>
  );
};

export default BurgerMenu;
