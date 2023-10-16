import React from 'react';
import styles from "./trending.module.css";
import { PiCaretRightBold, PiCaretLeftBold } from "react-icons/pi";
import { AiTwotoneStar } from "react-icons/ai";
import Image, { StaticImageData } from 'next/image';
import cityImageOne from "../../../public/city/istockphoto-1226494475-612x612.jpg";
import cityImageTwo from "../../../public/city/istockphoto-1440258328-612x612.jpg";
import cityImageThree from "../../../public/city/photo-1477959858617-67f85cf4f1df.avif";

type CityCardProp = {
  src:StaticImageData,
  city: string,
  desc: string,
  price: string,
  rating: number,
  key: number
}

const CityCard = ({src, city, desc, price, rating}:CityCardProp) => {
  return(
    <div className={styles.cityCardContainer}>
      <Image
      src={src}
      alt="city"
      width={90}
      height={100}
      className={styles.cityImage}
      loading="lazy"
      />

      <div className={styles.writingContainer}>

        <div className={styles.titleRatingContainer}>
          <h3 className={styles.title}>{city}</h3>
          <div className={styles.ratingContainer}>
            <AiTwotoneStar color="gold" size="17px"/>
            {rating}/5
          </div>
        </div>

        <p className={styles.desc}>
          {desc}
        </p>

        <p className={styles.price}>
          {price}
        </p>
      </div>
    </div>
  )
}

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