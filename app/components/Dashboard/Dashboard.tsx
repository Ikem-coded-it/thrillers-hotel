import React from 'react';
import styles from "./dashboard.module.css";
import SearchbarPic from './SearchbarPic';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <SearchbarPic/>
    </div>
  )
}

export default Dashboard