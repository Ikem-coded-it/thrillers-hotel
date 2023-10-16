import React from 'react';
import styles from "./sidebar.module.css";
import MimaBooking from './MimaBooking';
import Navigation from './Navigation';
import Logout from './Logout';

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <MimaBooking />
      <Navigation />
      <Logout />
    </div>
  )
}

export default Sidebar