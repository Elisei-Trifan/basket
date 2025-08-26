import React from "react";
import SignInImg from "../assets/Image/SignIn.png";
import { AuthForm } from "./components/AuthForm/AuthForm";
import { useInputsSignIn } from "./hooks/useInputsSignIn";

export const SignIn = () => {
  const inputs = useInputsSignIn();

  return (
    <AuthForm
      title={"Sign In"}
      inputs={inputs}
      buttonType={"sign"}
      switchText={"Not a member yet?"}
      switchLinkText={"Sign Up"}
      switchTo={"/signUp"}
      image={SignInImg}
    />
  );
};
