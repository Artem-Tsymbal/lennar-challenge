import React from "react";
import Banner from "./components/Banner";
import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Form from "./components/Form";
import Terms from "./components/Terms";
import styles from "./index.module.scss";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.banner}>
          <Banner />
        </div>
        <div className={styles.textContainer}>
          <Title />
          <Subtitle />
        </div>
        <Form />
        <Terms />
      </div>
    </section>
  );
};

export default HeroSection;
