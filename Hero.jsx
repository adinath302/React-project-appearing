import React from "react";
import { getimageurl } from "../../utils";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Adinath</h1>
        <p className={styles.description}>I'm a Frontend Developer </p>
        <a
          className={styles.contactbtn}
          href="mailto:adinathgaware23072003@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <img
        src={getimageurl("hero/heroImage.png")}
        alt="hero image of me"
        className={styles.heroimg}
      />
      <div className={styles.topblur} />
      <div className={styles.bottomblur} />
    </section>
  );
}

export default Hero;
