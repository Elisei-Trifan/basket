import React from "react";
import styles from "./CardDetailsTeam.module.css";
import { DenverTeam } from "../../assets/Image/DenverTeam";
import { CardDetailsHeader } from "../CardDetailsHeader/CardDetailsHeader";
import { TeamDto } from "../../api";

export const CardDetailsTeam: React.FC<TeamDto> = ({
  name,
  foundationYear,
  division,
  conference,
}) => {
  return (
    <div className={styles.container}>
      <CardDetailsHeader type={"Team"} text={name} />
      <div className={styles.contentContainer}>
        <DenverTeam />
        <div className={styles.descriptionContainer}>
          <p>Denver Nuggets</p>
          <div className={styles.textContainer}>
            <div className={styles.textContainerFound}>
              <p>Year for foundation</p>
              {foundationYear && <p>{foundationYear}</p>}
            </div>
            <div className={styles.textContainerDivision}>
              <p>Division</p>
              {division && <p>{division}</p>}
            </div>
          </div>
          <div className={styles.conference}>
            <p>Conference</p>
            {conference && <p>{conference}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
