import React from "react";
import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import Head from "next/head";

const Hero = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>Welcome to Pixel</h1>
          <p className={styles.subtitle}>
            Discover amazing things with Next.js
          </p>
          <button className={styles.ctaButton}>Get Started</button>
          <button className={styles.ctaButtonSecond}>Preview</button>
        </div>

        <div>
          <Image
            className={styles.img}
            src="/images/girl2.png"
            alt="Goblin"
            width={500}
            height={500}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
