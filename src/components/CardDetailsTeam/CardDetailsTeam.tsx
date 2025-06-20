import React from "react";
import styles from "./CardDetailsTeam.module.css";
import { CreateIcon } from "../../assets/icons/CreateIcon";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import { DenverTeam } from "../../assets/Image/DenverTeam";

export const CardDetailsTeam = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.containerText}>
          <span className={styles.text}>Teams</span>
          {" / "}
          <span className={styles.text}>Denver Nuggets</span>
        </div>
        <div className={styles.iconsContainer}>
          <CreateIcon className={styles.createIcon} />
          <DeleteIcon className={styles.deleteIcon} />
        </div>
      </div>
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
