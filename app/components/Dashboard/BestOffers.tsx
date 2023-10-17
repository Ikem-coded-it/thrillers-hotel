import React from 'react';
import styles from "./bestOffers.module.css";
import room1 from "../../../public/room/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg";
import room2 from "../../../public/room/download.jpg";
import room3 from "../../../public/room/lovepik-hotel-room-picture_500530786.jpg";
import room4 from "../../../public/room/pexels-pixabay-164595.jpg";
import room5 from "../../../public/room/photo-1631049307264-da0ec9d70304.jpg";
import Image, { StaticImageData } from 'next/image';
import { GoLocation } from "react-icons/go";

const bestOffers = [
  {
    name: "7seasons Apartments",
    location: "Kesington/London",
    price: "$65,00",
    src: room1
  },
  {
    name: "Along With The Villa",
    location: "Hangary/Budapest",
    price: "$65,00",
    src: room2
  },
  {
    name: "Resort and Recreation",
    location: "Williamstreet/Boxon",
    price: "$65,00",
    src: room3
  },
  {
    name: "Beautiful and Classy",
    location: "Citadines Opera Paris/France",
    price: "$65,00",
    src: room4
  },
  {
    name: "Beautiful Peace",
    location: "Sugar Apartments/Brazil",
    price: "$79,00",
    src: room5
  },
]

type OfferCardProp = {
  src: StaticImageData
  name: string,
  location: string,
  price: string,
  key: number
}

const OfferCard = ({src, name, location, price}: OfferCardProp) => {
  return(
    <div className={styles.offerCardContainer}>
      <Image
      src={src}
      alt="room"
      height={130}
      width={210}
      />

      <h3>{name}</h3>

      <div>
        <GoLocation size="15px" color="#94a3b8"/>
        <p>{location}</p>
      </div>

      <p><span>{price}</span> / night</p>
    </div>
  )
}

const BestOffers = () => {
  return (
    <section className={styles.bestOffersContainer}>
      <div className={styles.titleViewContainer}>
        <h2>Best Offers</h2>
        view all
      </div>

      <div className={styles.sliderContainer}>
        <div className={styles.cardsContainer}>
          {
            bestOffers.map(({src, name, location, price}, index) => {
              return(
                <OfferCard
                key={index}
                src={src}
                name={name}
                location={location}
                price={price}
                />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BestOffers