import React from 'react'
import styles from './Input.module.css'
import eye from '../../assets/icons/eye_rounded.svg'
import closeEye from '../../assets/icons/close_eye_rounded.svg'

interface InputProps {
  type: string
  value: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  label?: string
  errMessage?: string
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  placeholder,
  name,
  onChange,
  label,
  errMessage,
}) => {
  const [schowPass, setShowPass] = React.useState(false)

  const toggleShowPass = () => {
    setShowPass((prev) => !prev)
  }

  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapp}>
        <input
          id={name}
          className={`${styles.input} ${errMessage ? styles.inputError : ''} `}
          type={type === 'password' && schowPass ? 'text' : type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {type === 'password' && (
          <img
            src={schowPass ? eye : closeEye}
            alt={schowPass ? 'eye' : 'closeEye'}
            onClick={toggleShowPass}
            className={styles.icon}
          />
        )}
      </div>

      {errMessage && <span className={styles.errMessage}> {errMessage} </span>}
    </div>
  )
}

export default Input
