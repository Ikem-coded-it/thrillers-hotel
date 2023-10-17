import styles from "./searchbarPic.module.css";
import Image from 'next/image';
import furniturePic from "../../../public/search/istockphoto-1212526330-612x612.jpg";
import { FaSearch } from "react-icons/fa";
import { BiBell } from "react-icons/bi";
import { PiCaretDownBold } from "react-icons/pi";
import { GoLocation } from "react-icons/go";
import { BsCardChecklist } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

export default function SearchbarPic() {
  return(
    <div className={styles.searchbarPic}>
      <div className={styles.searchbarContainer}>
        <div className={styles.searchInputContainer}>
          <FaSearch color="#94a3b8"/>
          <input
          placeholder="search anything..."
          />
        </div>

        <div className={styles.dateNotifContainer}>

          <p>saturday, may 3, 2023</p>

          <div className={styles.notifContainer}>
            <div className={styles.notifRed}>3</div>

            <div className={styles.bellContainer}>
              <BiBell size="20px"/>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.picNavContainer}>
        <Image
        alt="furniture"
        src={furniturePic}
        height={150}
        className={styles.furniturePic}
        loading="lazy"
        />

        <div className={styles.searchFilterContainer}>
          <div className={styles.searchFilterSection}>
            <div className={styles.textIconContainer}>
              <GoLocation size="15px"/>
              Where are you going?
            </div>
            <PiCaretDownBold size="15px" color="#172554"/>
          </div>

          <div className={styles.searchFilterSection}>
            <div className={styles.textIconContainer}>
              <BsCardChecklist size="15px"/>
              Check-in Date
            </div>
            <PiCaretDownBold size="15px" color="#172554"/>
          </div>

          <div className={styles.searchFilterSection}>
            <div className={styles.textIconContainerActive}>
              <BsPerson size="15px"/>
              3 adults
            </div>
            <PiCaretDownBold size="15px" color="#172554"/>
          </div>

          <div className={styles.searchBtnContainer}>
            <button>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}