import React from "react";
import styles from "../CardDetailsPlayer/CardDetailsPlayer.module.css";
import { CardDetailsHeader } from "../CardDetailsHeader/CardDetailsHeader";
import greg from "../../assets/Image/Greg.png";
import { PlayerTeamNameDto } from "../../api";
import { getAge } from "../../utils/getAge";

export const CardDetailsPlayer: React.FC<PlayerTeamNameDto> = ({
  position,
  number,
  teamName,
  height,
  weight,
  birthday,
  name,
}) => {
  const age = getAge(birthday);

  return (
    <div className={styles.container}>
      <CardDetailsHeader type={"Player"} text={name} />
      <div className={styles.contentContainer}>
        <div className={styles.photoCont}>
          <img src={greg} alt={"Greg"} className={styles.photo} />
        </div>
        <div className={styles.descriptionContainer}>
          <p>{name}</p>
          {number && (
            <p>
              {"#"}
              {number}
            </p>
          )}
          <div className={styles.textContainer}>
            <div className={styles.textContainerLeft}>
              <p>Position</p>
              {position && <p>{position}</p>}
            </div>
            <div className={styles.textContainerRight}>
              <p>Team</p>
              {teamName && <p>{teamName}</p>}
            </div>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.textContainerLeft}>
              <p>Height</p>
              {height && (
                <p>
                  {height} {"cm"}
                </p>
              )}
            </div>
            <div className={styles.textContainerRight}>
              <p>Weight</p>
              {weight && (
                <p>
                  {weight} {"kg"}
                </p>
              )}
            </div>
          </div>
          <div className={styles.textContainerRight}>
            <p>Age</p>
            {birthday && <p>{age}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
