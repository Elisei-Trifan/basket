import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CustomLink.module.css'

interface LinkProps {
  to: string
  text: string
  disabled?: boolean
}

const CustomLink: React.FC<LinkProps> = ({ to, text, disabled }) => {
  return (
    <Link
      className={disabled ? styles.linkDis : styles.link}
      to={to}
      onClick={(e) => disabled && e.preventDefault()}
    >
      {text}
    </Link>
  )
}

export default CustomLink
