import React from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  text?: string;
  disabled?: boolean;
  error?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  text,
  disabled,
  error,
  checked,
  onChange,
}) => {
  return (
    <>
      <label className={styles.container}>
        <input
          type="checkbox"
          checked={checked}
          className={styles.input}
          onChange={onChange}
          disabled={disabled}
        />
        <span className={error ? styles.checkboxErr : styles.checkbox}></span>
        <span className={error ? styles.textErr : styles.text}> {text} </span>
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};
