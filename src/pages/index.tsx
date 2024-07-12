import React from "react";
import HeroSection from "../components/common/HeroSection";
import DefaultLayout from "../components/layouts/DefaultLayout";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <section className={styles.leftSection}>
        <HeroSection />
      </section>
      <section className={styles.rightSection}>
        <Image
          src="/illustration.png"
          alt="Illustration"
          className={styles.image}
          layout="responsive"
          width={500}
          height={500}
        />
      </section>
    </DefaultLayout>
  );
};

export default Home;
