import React from 'react';
import styles from "./dashboard.module.css";
import SearchbarPic from './SearchbarPic';
import TrendingSection from './TrendingSection';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <SearchbarPic/>
      <TrendingSection/>
    </div>
  )
}

export default Dashboard