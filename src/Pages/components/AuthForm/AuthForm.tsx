import React from "react";
import styles from "./AuthForm.module.css";
import { Input } from "../../../components/Input/Input";
import { Button } from "../../../components/Button/Button";
import { AuthSwitch } from "../../../components/AuthSwitch/AuthSwitch";
import { AuthFormProps } from "../../../types/AuthFormProps";
import { Checkbox } from "../../../components/Checkbox/Checkbox";
import { useForm } from "react-hook-form";

export const AuthForm = ({
  title,
  inputs,
  buttonType,
  switchText,
  switchLinkText,
  switchTo,
  image,
}: AuthFormProps) => {
  const [checked, setChecked] = React.useState(false);

  const handleChangeCheck = () => {
    setChecked((prev) => !prev);
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const password = watch("password");

  const disabled = title === "Sign Up" ? !checked || !isValid : !isValid;

  return (
    <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <div className={styles.formContent}>
          <h1>{title}</h1>
          {inputs.map((input) => (
            <Input
              password={password}
              register={register}
              key={input.name}
              label={input.label}
              name={input.name}
              type={input.type}
              errMessage={errors[input.name]?.message as string}
            />
          ))}
          {title === "Sign Up" && (
            <Checkbox
              checked={checked}
              onChange={handleChangeCheck}
              text={"I accept the agreement"}
            />
          )}
          <Button type={buttonType} text={title} disabled={disabled} />
          <AuthSwitch
            question={switchText}
            linkText={switchLinkText}
            to={switchTo}
          />
        </div>
      </div>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
    </form>
  );
};
