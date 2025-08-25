import React from "react";
import styles from "../MobileSidebar/MobileSidebar.module.css";
import { GroupPersonIcon } from "../../assets/icons/GroupPersonIcon";
import { PersonIcon } from "../../assets/icons/PersonIcon";
import { InputIcon } from "../../assets/icons/InputIcon";
import { ProfileIcon } from "../../assets/icons/ProfileIcon";

export const MobileSidebar = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.profileIcon}>
          <ProfileIcon width={48} height={48} />
          <span className={styles.profileName}>John Smith</span>
        </div>
        <div className={styles.wrap}>
          <button className={styles.item}>
            <GroupPersonIcon className={styles.personIcon} />
            <p className={styles.text}>Teams</p>
          </button>
          <button className={styles.item}>
            <PersonIcon className={styles.personIcon} />
            <p className={styles.text}>Players</p>
          </button>
        </div>
      </div>
      <button className={styles.signOut}>
        <InputIcon className={styles.inputIcon} />
        <p className={styles.signOutText}>Sign out</p>
      </button>
    </aside>
  );
};
