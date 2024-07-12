import React, { useState } from "react";
import Link from "next/link";
import BurgerMenu from "../../common/BurgerMenu";
import MobileMenu from "../../common/MobileMenu";
import SubmitButton from "../../shared/SubmitButton";
import styles from "./index.module.scss";

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
        <div className={styles.headerContainer}>
          <div className={styles.navContainer}>
            <img src="/logo.png" alt="Logo" className={styles.headerLogo} />
            <nav className={styles.headerNav}>
              <ul className={styles.headerNavList}>
                <li>
                  <Link href="#product" legacyBehavior>
                    <a className={styles.headerNavLink}>Product</a>
                  </Link>
                </li>
                <li>
                  <Link href="#features" legacyBehavior>
                    <a className={styles.headerNavLink}>Features</a>
                  </Link>
                </li>
                <li>
                  <Link href="#marketplace" legacyBehavior>
                    <a className={styles.headerNavLink}>Marketplace</a>
                  </Link>
                </li>
                <li>
                  <Link href="#company" legacyBehavior>
                    <a className={styles.headerNavLink}>Company</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.headerActions}>
            <Link href="#login" legacyBehavior>
              <a className={styles.headerLogin}>Log in</a>
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
