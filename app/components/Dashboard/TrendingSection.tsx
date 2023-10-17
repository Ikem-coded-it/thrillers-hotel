'use client'

import React from 'react';
import styles from "./trending.module.css";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";
import cityImageOne from "../../../public/city/istockphoto-1226494475-612x612.jpg";
import cityImageTwo from "../../../public/city/istockphoto-1440258328-612x612.jpg";
import cityImageThree from "../../../public/city/photo-1480714378408-67cf0d13bc1b.jpg";
import CityCard from './TrendingCard';


const TrendingSection = () => {

  return (
    <section className={styles.trendingContainer}>
      <div className={styles.trendingBtnContainer}>
        <h2>
          Trending destinations
        </h2>

        <div className={styles.btnContainer}>
          <button className={styles.leftBtn}>
            <PiCaretLeftBold size="10px"/>
          </button>
          <button className={styles.rightBtn}>
            <PiCaretRightBold size="10px"/>
          </button>
        </div>
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {
            cities.map(({city, desc, price, src, rating}, index) => {
              return(
                <CityCard
                key={index}
                city={city}
                desc={desc}
                price={price}
                src={src}
                rating={rating}
                />
              )
            })
          }
        </div>
      </div>

      <div className={styles.navContainer}>
        <div className={styles.navDot}></div>
        <div className={styles.navDot}></div>
        <div className={styles.navDot}></div>
      </div>
    </section>
  )
}

export default TrendingSection

const cities = [
  {
    city: "Montmatre, France",
    desc: "Visiting the best tourist areas chosen by the audience",
    price: "$450,000,00",
    rating: 4,
    src: cityImageOne
  },
  {
    city: "Istanbul, Turkey",
    desc: "One of our best-selling tours to Turkey and visiting its regions...",
    price: "$600,000,00",
    rating: 5,
    src: cityImageTwo
  },
  {
    city: "London, UK",
    desc: "London is one of the most beautiful places to visit that...",
    price: "$360,000,00",
    rating: 3,
    src: cityImageThree
  },
]