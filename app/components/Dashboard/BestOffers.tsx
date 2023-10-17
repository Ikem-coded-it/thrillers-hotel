import React from 'react';
import styles from "./bestOffers.module.css";
import room1 from "../../../public/room/photo-1566195992011-5f6b21e539aa.avif";
import room2 from "../../../public/room/photo-1582719478250-c89cae4dc85b.avif";
import room3 from "../../../public/room/photo-1611892440504-42a792e24d32.avif";
import room4 from "../../../public/room/photo-1618773928121-c32242e63f39.avif";
import room5 from "../../../public/room/premium_photo-1670360414903-19e5832f8bc4.avif";
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