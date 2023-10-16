import React from 'react';
import styles from "./logout.module.css";
import { IoIosArrowDropright } from "react-icons/io";

const Logout = () => {
  return (
    <div className={styles.logoutContainer}>
      <div className={styles.logoutText}>
        <IoIosArrowDropright size="20px"/>
        Logout
      </div>
    </div>
  )
}

export default Logout