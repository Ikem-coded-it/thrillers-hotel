import styles from "./trending.module.css";
import Image, { StaticImageData } from "next/image";
import { AiTwotoneStar } from "react-icons/ai";

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

export default CityCard;