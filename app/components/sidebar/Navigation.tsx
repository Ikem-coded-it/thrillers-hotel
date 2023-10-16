'use client'

import React from 'react';
import styles from "./navigation.module.css";
import { FiHome } from "react-icons/fi"
import { GrAppsRounded } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import { RxHeart } from "react-icons/rx";
import { LuSettings } from "react-icons/lu";
import { useEffect, useState, useRef } from "react";

type ref = {
  current: any,
}


const Navigation = () => {
  const dashboardLink:ref = useRef()
  const exploreLink:ref = useRef()
  const ticketLink:ref = useRef()
  const favoritesLink:ref = useRef()
  const settingsLink:ref = useRef()

  const [activeLink, setActiveLink] = useState("dashboard")

  useEffect(() => {
    function setActiveLink() {
      if (activeLink === "dashboard") {
        const children = Array.from(dashboardLink.current.children)
        const dot: any = children[0]
        const icon: any = children[1]
        dot.style.backgroundColor = "#172554";
        icon.style.fill = "#172554"
      } else {
        const children = Array.from(dashboardLink.current.children)
        const dot: any = children[0]
        const icon: any = children[1]
        dot.style.backgroundColor = "transparent";
        icon.style.fill = "none"
      }

      if (activeLink === "explore") {
        const children = Array.from(exploreLink.current.children)
        const dot: any = children[0]
        const icon: any = children[1]
        dot.style.backgroundColor = "#172554";
        icon.style.fill = "#172554"
      } else {
        const children = Array.from(exploreLink.current.children)
        const dot: any = children[0]
        const icon: any = children[1]
        dot.style.backgroundColor = "transparent";
        icon.style.fill = "none"
      }

      if (activeLink === "ticket") {
        const children = Array.from(ticketLink.current.children)
        const dot: any = children[0]
        const icon: any = children[1]
        dot.style.backgroundColor = "#172554";
        icon.style.fill = "#172554"
      } else {
        const children = Array.from(ticketLink.current.children)
        const dot: any = children[0]
        const icon: any = children[1]
        dot.style.backgroundColor = "transparent";
        icon.style.fill = "none"
      }

      if (activeLink === "favorites") {
        const children = Array.from(favoritesLink.current.children)
        const dot: any = children[0]
        const icon: any = children[1]
        dot.style.backgroundColor = "#172554";
        icon.style.fill = "#172554"
      } else {
        const children = Array.from(favoritesLink.current.children)
        const dot: any = children[0]
        const icon: any = children[1]
        dot.style.backgroundColor = "transparent";
        icon.style.fill = "none"
      }

      if (activeLink === "settings") {
        const children = Array.from(settingsLink.current.children)
        const dot: any = children[0]
        const icon: any = children[1]
        dot.style.backgroundColor = "#172554";
        icon.style.fill = "#172554"
      } else {
        const children = Array.from(settingsLink.current.children)
        const dot: any = children[0]
        const icon: any = children[1]
        dot.style.backgroundColor = "transparent";
        icon.style.fill = "none"
      }
    }

    setActiveLink()
  }, [activeLink])

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <ul  className={styles.list}>

          <li className={styles.listItem}>
            <div
            className={styles.listItemContainer}
            onClick={() => setActiveLink("dashboard")}>

              <div className={styles.iconDotContainer} ref={dashboardLink}>
                <div className={styles.dot}></div>

                <FiHome size="20px" className={styles.transition}/>
              </div>

              Dashboard
            </div>
          </li>

          <li className={styles.listItem}>
            <div
            className={styles.listItemContainer}
            onClick={() => setActiveLink("explore")}>

              <div className={styles.iconDotContainer} ref={exploreLink}>
                <div className={styles.dot}></div>

                <GrAppsRounded size="20px" className={styles.transition}/>
              </div>

              Explore city
            </div>
          </li>

          <li className={styles.listItem}>
            <div
            className={styles.listItemContainer}
            onClick={() => setActiveLink("ticket")}>

              <div className={styles.iconDotContainer} ref={ticketLink}>
                <div className={styles.dot}></div>

                <LuMail size="20px" className={styles.transition}/>
              </div>

              Ticket
            </div>
          </li>

          <li className={styles.listItem}>
            <div
            className={styles.listItemContainer}
            onClick={() => setActiveLink("favorites")}>

              <div className={styles.iconDotContainer} ref={favoritesLink}>
                <div className={styles.dot}></div>

                <RxHeart size="20px" className={styles.transition}/>
              </div>

              Favorites
            </div>
          </li>

          <li className={styles.listItem}>
            <div
            className={styles.listItemContainer}
            onClick={() => setActiveLink("settings")}>

              <div className={styles.iconDotContainer} ref={settingsLink}>
                <div className={styles.dot}></div>

                <LuSettings className={styles.transition} size="20px"/>
              </div>

              Setting
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation