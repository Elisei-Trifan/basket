import React from "react";
import styles from "../CardDetailsHeader/CardDetailsHeader.module.css";
import { CreateIcon } from "../../assets/icons/CreateIcon";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import { HeaderType } from "../../types/HeaderType";

interface CardDetailsHeaderProps {
  type: HeaderType;
  text: string;
}

export const CardDetailsHeader: React.FC<CardDetailsHeaderProps> = ({
  type,
  text,
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.containerText}>
        <span className={styles.text}>{type}</span>
        <span> / </span>
        <span className={styles.text}>{text}</span>
      </div>
      <div className={styles.iconsContainer}>
        <CreateIcon className={styles.createIcon} />
        <DeleteIcon className={styles.deleteIcon} />
      </div>
    </div>
  );
};
