import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      Ikem-coded-it {new Date().getFullYear()} <a target="_blank" href="https://github.com/Ikem-coded-it/thrillers-hotel"><AiFillGithub size="20px"/></a>
    </section>
  )
}

export default Footer