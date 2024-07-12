import React from "react";
import HeroSection from "../components/common/HeroSection";
import DefaultLayout from "../components/layouts/DefaultLayout";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <div className={styles.home__container}>
        <section className={styles["home__left-section"]}>
          <HeroSection />
        </section>
        <section className={styles["home__right-section"]}>
          <Image
            src="/illustration.png"
            alt="Illustration"
            className={styles["home__image"]}
            layout="responsive"
            width={500}
            height={500}
          />
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Home;
