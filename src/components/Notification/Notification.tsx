import React from 'react'
import styles from './Notification.module.css'

const Notification = () => {
  return (
    <div className={styles.cont}>
      <p className={styles.notif}>
        User with the specified username / password was not found.
      </p>
    </div>
  )
}

export default Notification
