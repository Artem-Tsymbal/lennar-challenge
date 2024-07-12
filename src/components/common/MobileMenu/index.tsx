import React from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import SubmitButton from "@/components/shared/SubmitButton";
import Image from "next/image";

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
          <Image
            src="/logoIcon.png"
            alt="Logo"
            className={styles.mobileMenuLogo}
            width={35}
            height={32}
          />
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
          <SubmitButton variant={"mobile"}>Start free trial</SubmitButton>
          <p className={styles.mobileMenuLoginContainer}>
            Existing customer?{" "}
            <Link href="#login" className={styles.mobileMenuLogin}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
