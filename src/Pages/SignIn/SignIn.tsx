import React from "react";
import styles from "./SignIn.module.css";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { AuthSwitch } from "../../components/AuthSwitch/AuthSwitch";
import SignInImg from "../../assets/Image/SignIn.png";

export const SignIn = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <div className={styles.formContent}>
          <h1>Sign In</h1>
          <Input
            label="Login"
            onChange={handleChangeLogin}
            name={"login"}
            value={login}
            type={"login"}
          />
          <Input
            label="Password"
            onChange={handleChangePassword}
            name={"password"}
            value={password}
            type={"password"}
          />
          <Button type="sign" text={"Sign In"} />
          <AuthSwitch
            question={"Not a member yet?"}
            linkText={"SignUp"}
            to={"/signUp"}
          />
        </div>
      </div>
      <div className={styles.image}>
        <img src={SignInImg} alt={"SignIn"} />
      </div>
    </div>
  );
};
