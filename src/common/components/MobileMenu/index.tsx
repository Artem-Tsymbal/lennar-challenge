import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
        onClick={onClose}
      ></div>
      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.mobileMenuHeader}>
          <img src="/logo.png" alt="Logo" className={styles.mobileMenuLogo} />
          <button
            className={styles.mobileMenuClose}
            onClick={onClose}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <nav className={styles.mobileMenuNav}>
          <ul className={styles.mobileMenuNavList}>
            <li>
              <Link href="#product" legacyBehavior>
                <a className={styles.mobileMenuNavLink}>Product</a>
              </Link>
            </li>
            <li>
              <Link href="#features" legacyBehavior>
                <a className={styles.mobileMenuNavLink}>Features</a>
              </Link>
            </li>
            <li>
              <Link href="#marketplace" legacyBehavior>
                <a className={styles.mobileMenuNavLink}>Marketplace</a>
              </Link>
            </li>
            <li>
              <Link href="#company" legacyBehavior>
                <a className={styles.mobileMenuNavLink}>Company</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.mobileMenuActions}>
          <Link href="#signup" legacyBehavior>
            <a className={styles.mobileMenuSignup}>Start free trial</a>
          </Link>
          <Link href="#login" legacyBehavior>
            <a className={styles.mobileMenuLogin}>Existing customer? Login</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
