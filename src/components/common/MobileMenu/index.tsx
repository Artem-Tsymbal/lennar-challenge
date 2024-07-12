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
        className={`${styles["mobile-menu__overlay"]} ${
          isOpen ? styles["mobile-menu__overlay--open"] : ""
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`${styles["mobile-menu"]} ${
          isOpen ? styles["mobile-menu--open"] : ""
        }`}
      >
        <div className={styles["mobile-menu__header"]}>
          <Image
            src="/logoIcon.png"
            alt="Logo"
            className={styles["mobile-menu__logo"]}
            width={35}
            height={32}
          />
          <button
            className={styles["mobile-menu__close"]}
            onClick={onClose}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <nav className={styles["mobile-menu__nav"]}>
          <ul className={styles["mobile-menu__nav-list"]}>
            <li>
              <Link href="#product" legacyBehavior>
                <a className={styles["mobile-menu__nav-link"]}>Product</a>
              </Link>
            </li>
            <li>
              <Link href="#features" legacyBehavior>
                <a className={styles["mobile-menu__nav-link"]}>Features</a>
              </Link>
            </li>
            <li>
              <Link href="#marketplace" legacyBehavior>
                <a className={styles["mobile-menu__nav-link"]}>Marketplace</a>
              </Link>
            </li>
            <li>
              <Link href="#company" legacyBehavior>
                <a className={styles["mobile-menu__nav-link"]}>Company</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles["mobile-menu__actions"]}>
          <SubmitButton variant={"mobile"}>Start free trial</SubmitButton>
          <p className={styles["mobile-menu__login-container"]}>
            Existing customer?{" "}
            <Link href="#login" className={styles["mobile-menu__login"]}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
