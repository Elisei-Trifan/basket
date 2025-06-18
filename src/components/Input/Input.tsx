import React from "react";
import styles from "./Input.module.css";
import { CloseEyeIcon } from "../../assets/icons/CloseEyeIcon";
import { EyeIcon } from "../../assets/icons/EyeIcon";

interface InputProps {
  type: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  errMessage?: string;
  disabled?: boolean;
}

export const Input: React.FC<InputProps> = ({
  type,
  value,
  placeholder,
  name,
  onChange,
  label,
  errMessage,
  disabled,
}) => {
  const [showPass, setShowPass] = React.useState(false);

  const toggleShowPass = () => {
    setShowPass((prev) => !prev);
  };

  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputWrap}>
        <input
          id={name}
          className={`${styles.input} ${errMessage ? styles.inputError : ""} `}
          type={type === "password" && showPass ? "text" : type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        />
        {type === "password" &&
          (showPass ? (
            <EyeIcon onClick={toggleShowPass} className={styles.icon} />
          ) : (
            <CloseEyeIcon onClick={toggleShowPass} className={styles.icon} />
          ))}
      </div>

      {errMessage && <span className={styles.errMessage}> {errMessage} </span>}
    </div>
  );
};
