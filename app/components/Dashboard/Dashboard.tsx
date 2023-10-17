import React from 'react';
import styles from "./dashboard.module.css";
import SearchbarPic from './SearchbarPic';
import TrendingSection from './TrendingSection';
import BestOffers from './BestOffers';
import Footer from './Footer';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <SearchbarPic/>
      <TrendingSection/>
      <BestOffers/>
      <Footer/>
    </div>
  )
}

export default Dashboard