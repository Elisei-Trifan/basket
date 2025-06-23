import React from "react";
import styles from "./CardDetailsTeam.module.css";
import { DenverTeam } from "../../assets/Image/DenverTeam";
import { CardDetailsHeader } from "../CardDetailsHeader/CardDetailsHeader";

export const CardDetailsTeam = () => {
  return (
    <div className={styles.container}>
      <CardDetailsHeader type={"Teams"} text={"Denver Nuggets"} />
      <div className={styles.contentContainer}>
        <DenverTeam />
        <div className={styles.descriptionContainer}>
          <p>Denver Nuggets</p>
          <div className={styles.textContainer}>
            <div className={styles.textContainerFound}>
              <p>Year for foundation</p>
              <p>1976</p>
            </div>
            <div className={styles.textContainerDivision}>
              <p>Division</p>
              <p>Northwestern</p>
            </div>
          </div>
          <div className={styles.conference}>
            <p>Conference</p>
            <p>Western</p>
          </div>
        </div>
      </div>
    </div>
  );
};
