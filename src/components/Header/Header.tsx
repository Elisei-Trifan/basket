import React from 'react'
import Logo from '../Logo/Logo'
import Profile from '../../assets/icons/profile_rounded.svg'
import styles from './Header.module.css'

interface HeaderProps {
  fullName: string
}

const Header: React.FC<HeaderProps> = ({ fullName }) => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.profileContainer}>
        <p className={styles.profile}>{fullName}</p>
        <img className={styles.icon} src={Profile} alt="profile" />
      </div>
    </div>
  )
}

export default Header
