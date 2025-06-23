import React from "react";
import styles from "../CardDetailsPlayer/CardDetailsPlayer.module.css";
import { CardDetailsHeader } from "../CardDetailsHeader/CardDetailsHeader";
import greg from "../../assets/Image/Greg.png";

interface CardDetailsPlayerProps {
  type: string;
  text: string;
  number: number;
  position: string;
  teamName: string;
  height: number;
  weight: number;
  age: number;
}

export const CardDetailsPlayer: React.FC<CardDetailsPlayerProps> = ({
  type,
  text,
  position,
  number,
  teamName,
  height,
  weight,
  age,
}) => {
  return (
    <div className={styles.container}>
      <CardDetailsHeader type={type} text={text} />
      <div className={styles.contentContainer}>
        <div className={styles.photoCont}>
          <img src={greg} alt={"Greg"} className={styles.photo} />
        </div>
        <div className={styles.descriptionContainer}>
          <p>{text}</p>
          <p>
            {"#"}
            {number}
          </p>
          <div className={styles.textContainer}>
            <div className={styles.textContainerLeft}>
              <p>Position</p>
              <p>{position}</p>
            </div>
            <div className={styles.textContainerRight}>
              <p>Team</p>
              <p>{teamName}</p>
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.textContainerLeft}>
              <p>Height</p>
              <p>
                {height} {"cm"}
              </p>
            </div>
            <div className={styles.textContainerRight}>
              <p>Weight</p>
              <p>
                {weight} {"kg"}
              </p>
            </div>
          </div>
          <div className={styles.textContainerRight}>
            <p>Age</p>
            <p>{age}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
