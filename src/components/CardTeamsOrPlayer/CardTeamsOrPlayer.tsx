import React from "react";
import styles from "./CardTeamsOrPlayer.module.css";
import portland from "../../assets/Image/Portland.png";
import player from "../../assets/Image/photo.png";
import { TeamDto, PlayerTeamNameDto } from "../../api";

type CardTeamsProps = TeamDto | PlayerTeamNameDto;

export const CardTeamsOrPlayer: React.FC<CardTeamsProps> = (props) => {
  if ("foundationYear" in props) {
    return (
      <div className={styles.container}>
        <div className={`${styles.containerImage} ${styles.alignItemsCenter} `}>
          <img src={portland} alt={"Portland"} />
        </div>
        <div className={styles.containerText}>
          <p>{props.name}</p>
          <p>Year for foundation: {props.foundationYear} </p>
        </div>
      </div>
    );
  } else {
    const playerProps = props as PlayerTeamNameDto;

    return (
      <div className={styles.container}>
        <div className={`${styles.containerImage} ${styles.alignItemsEnd}`}>
          <img src={player} alt={"player"} />
        </div>
        <div className={styles.containerText}>
          <div className={styles.containerText2}>
            <p>{playerProps.name}</p>
            <p>
              {"#"}
              {playerProps.position}
            </p>
          </div>

          <p>{playerProps.teamName}</p>
        </div>
      </div>
    );
  }
};
