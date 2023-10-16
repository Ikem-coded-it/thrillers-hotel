import React from 'react';
import Image from 'next/image';
import styles from "./mima.module.css";
import girlImage from "../../../public/girl.avif";
import { TbEdit } from "react-icons/tb";

const MimaBooking = () => {
  return (
    <div className={styles.mimaContainer}>
      <h1 className={styles.mimaTitle}>Mima Booking</h1>

      <div className={styles.editPicContainer}>
        <div className={styles.imageContainer}>
          <Image
          alt="girl profile"
          src={girlImage}
          width={80}
          height={80}
          className={styles.image}
          />
        </div>

        <button className={styles.editBtn}>
          <TbEdit color="#fff" size="15px"/>
        </button>
      </div>

      <h2 className={styles.girlName}>ilia jan</h2>
    </div>
  )
}

export default MimaBooking