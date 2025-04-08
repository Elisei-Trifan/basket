/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Sidebar.module.css'
import Teams from '../../assets/icons/group_person_rounded.svg'
import Players from '../../assets/icons/person_rounded.svg'
import { ReactComponent as SignOutIcon } from '../../assets/icons/input_rounded.svg'

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.wrapp}>
        <button className={styles.item}>
          <img className={styles.icon} src={Teams} alt="teams" />
          <p className={styles.text}>Teams</p>
        </button>
        <button className={styles.item}>
          <img className={styles.icon} src={Players} alt="players" />
          <p className={styles.text}>Players</p>
        </button>
      </div>
      <button className={styles.signOut}>
        {/* <img className={styles.signOutImg} src={SignOut} alt="SignOut" /> */}
        <SignOutIcon className={styles.signOutImg} />
        <p className={styles.signOutText}>Sign out</p>
      </button>
    </aside>
  )
}

export default Sidebar
