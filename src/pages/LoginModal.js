import React, { useState } from "react";
import styles from "@/styles/LoginModal.module.css";
import { motion } from "framer-motion";
import Head from "next/head";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginModal = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const buttonVariants = {
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.modalOverlay}>
        <motion.div
          className={styles.modal}
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <h2 className={styles.title}>Login V1</h2>
          <form>
            <motion.div
              className={styles.formGroup}
              variants={formVariants}
              transition={{ delay: 0.2 }}
            >
              <label className={styles.label} htmlFor="username">
                Username:
              </label>
              <input type="text" id="username" className={styles.input} />
            </motion.div>
            <motion.div
              className={styles.formGroup}
              variants={formVariants}
              transition={{ delay: 0.4 }}
            >
              <label className={styles.label} htmlFor="password">
                Password:
              </label>
              <div className={styles.passwordInputContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className={styles.input}
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  className={styles.eyeIcon}
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <AiOutlineEye
                  className={styles.eyeIcon}
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            </motion.div>
            <motion.button
              type="submit"
              className={styles.submitButton}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Login
            </motion.button>
            <motion.button
              className={styles.closeButton}
              onClick={onClose}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Close
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default LoginModal;
