import React from "react";
import HeroSection from "../components/common/HeroSection";
import DefaultLayout from "../components/layouts/DefaultLayout";
import styles from "../styles/Home.module.scss";

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <section className={styles.leftSection}>
        <HeroSection />
      </section>
      <section className={styles.rightSection}>
        <img
          src="/Illustration.png"
          alt="Illustration"
          className={styles.image}
        />
      </section>
    </DefaultLayout>
  );
};

export default Home;
