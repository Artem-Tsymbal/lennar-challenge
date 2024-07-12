import React, { useState } from "react";
import Link from "next/link";
import BurgerMenu from "../../common/BurgerMenu";
import MobileMenu from "../../common/MobileMenu";
import SubmitButton from "../../shared/SubmitButton";
import styles from "./index.module.scss";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMobileMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles["header__container"]}>
          <div className={styles["header__nav-container"]}>
            <Image
              src="/logoIcon.png"
              alt="Logo"
              className={styles["header__logo"]}
              width={35}
              height={32}
            />
            <nav className={styles["header__nav"]}>
              <ul className={styles["header__nav-list"]}>
                <li>
                  <Link href="#product" legacyBehavior>
                    <a className={styles["header__nav-link"]}>Product</a>
                  </Link>
                </li>
                <li>
                  <Link href="#features" legacyBehavior>
                    <a className={styles["header__nav-link"]}>Features</a>
                  </Link>
                </li>
                <li>
                  <Link href="#marketplace" legacyBehavior>
                    <a className={styles["header__nav-link"]}>Marketplace</a>
                  </Link>
                </li>
                <li>
                  <Link href="#company" legacyBehavior>
                    <a className={styles["header__nav-link"]}>Company</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles["header__actions"]}>
            <Link href="#login" legacyBehavior>
              <a className={styles["header__login"]}>Log in</a>
            </Link>
            <SubmitButton variant={"desktop"}>Start free trial</SubmitButton>
          </div>
          <BurgerMenu onClick={handleBurgerClick} />
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Header;
