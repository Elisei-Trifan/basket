import React from "react";
import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";
import { ProfileIcon } from "../../assets/icons/ProfileIcon";

interface HeaderProps {
  fullName: string;
}

export const Header: React.FC<HeaderProps> = ({ fullName }) => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.profileContainer}>
        <p className={styles.profile}>{fullName}</p>
        <ProfileIcon className={styles.profileIcon} />
      </div>
    </div>
  );
};
