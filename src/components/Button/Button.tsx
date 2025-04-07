import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'

interface ButtonProps {
  type: 'sign' | 'add' | 'cancel'
  text: string
  disabled?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ type, text, disabled, onClick }) => {
  const buttonClass = classNames(styles.btn, styles[type])
  return (
    <button disabled={disabled} className={buttonClass} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
