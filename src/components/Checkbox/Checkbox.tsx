import React from 'react'
import styles from './Checkbox.module.css'

interface CheckboxProps {
  text: string
  disabled?: boolean
  error?: string
}

const Checkbox: React.FC<CheckboxProps> = ({ text, disabled, error }) => {
  const [checked, setChecked] = React.useState(false)

  const handleChange = () => {
    setChecked((prev) => !prev)
  }

  return (
    <>
      <label className={styles.container}>
        <input
          type="checkbox"
          checked={checked}
          className={styles.input}
          onChange={handleChange}
          disabled={disabled}
        />
        <span className={error ? styles.checkboxErr : styles.checkbox}></span>
        <span className={error ? styles.textErr : styles.text}> {text} </span>
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </>
  )
}

export default Checkbox
