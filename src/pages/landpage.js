import React, { useState } from "react";
import styles from "@/styles/Main.module.css";
import Link from 'next/link';
import Hero from './hero.js';
import Head from 'next/head';
import LoginModal from "./LoginModal.js";

function landpage() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300&display=swap" rel="stylesheet" />
        </Head>
    <div>
      <header className={styles.header}>
        <h1 className={styles.logo}>Pixel </h1>
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
            <li>
            </li>
          </ul>
        </nav>
        <button className={styles.btn} onClick={openModal} legacyBehavior>
                <a>Login</a>
              </button>
      </header>
      <section className={styles.hero}>
            <Hero />
      </section>
      {showModal && <LoginModal onClose={closeModal} />}
    </div>
    </>
  );
}

export default landpage;
