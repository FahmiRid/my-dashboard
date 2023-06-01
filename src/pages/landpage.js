import React from "react";
import styles from "@/styles/Main.module.css";
import Link from 'next/link';
import Hero from './hero.js';
import Head from 'next/head';

function landpage() {
  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet" />
        </Head>
    <div>
      <header className={styles.header}>
        <h1 className={styles.logo}>Dashboard </h1>
        <nav className={styles.nav}>
          {/* Add your navigation links here */}
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section className={styles.hero}>
            <Hero />
      </section>
    </div>
    </>
  );
}

export default landpage;
