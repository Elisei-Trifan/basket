import React from "react";
import styles from "./Sidebar.module.css";
import { GroupPersonIcon } from "../../assets/icons/GroupPersonIcon";
import { InputIcon } from "../../assets/icons/InputIcon";
import { PersonIcon } from "../../assets/icons/PersonIcon";

export const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.wrapp}>
        <button className={styles.item}>
          <GroupPersonIcon className={styles.personIcon} />
          <p className={styles.text}>Teams</p>
        </button>
        <button className={styles.item}>
          <PersonIcon className={styles.personIcon} />
          <p className={styles.text}>Players</p>
        </button>
      </div>
      <button className={styles.signOut}>
        <InputIcon className={styles.inputIcon} />
        <p className={styles.signOutText}>Sign out</p>
      </button>
    </aside>
  );
};
