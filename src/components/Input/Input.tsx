import React, { memo } from "react";
import styles from "./Input.module.css";
import { CloseEyeIcon } from "../../assets/icons/CloseEyeIcon";
import { EyeIcon } from "../../assets/icons/EyeIcon";
import { useForm } from "react-hook-form";

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  label?: string;
  errMessage?: string;
  disabled?: boolean;
  register: ReturnType<typeof useForm>["register"];
  password?: string;
}

export const Input: React.FC<InputProps> = memo(
  ({
    type,
    placeholder,
    name,
    label,
    errMessage,
    disabled,
    register,
    password,
  }) => {
    const [showPass, setShowPass] = React.useState(false);

    const toggleShowPass = () => {
      setShowPass((prev) => !prev);
    };

    function required() {
      if (label === "Enter your password again") {
        return "your password again";
      } else {
        return label![0].toLowerCase() + label!.slice(1);
      }
    }

    const minLength = name === "password" ? 5 : 2;

    return (
      <div className={styles.inputContainer}>
        {label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <div className={styles.inputWrap}>
          <input
            {...register(name, {
              required: `Enter ${required()}`,
              minLength: {
                value: minLength,
                message: `Не менее ${minLength} символов`,
              },
              validate:
                name === "passwordAgain"
                  ? (value) => value === password || "Пароли не совпадают"
                  : undefined,
            })}
            id={name}
            className={`${styles.input} ${errMessage ? styles.inputError : ""} `}
            type={type === "password" && showPass ? "text" : type}
            placeholder={placeholder}
            disabled={disabled}
          />
          {type === "password" &&
            (showPass ? (
              <EyeIcon onClick={toggleShowPass} className={styles.icon} />
            ) : (
              <CloseEyeIcon onClick={toggleShowPass} className={styles.icon} />
            ))}
        </div>

        {errMessage && (
          <span className={styles.errMessage}> {errMessage} </span>
        )}
      </div>
    );
  },
);
