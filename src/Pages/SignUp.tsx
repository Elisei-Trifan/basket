import React from "react";
import SignUpImg from "../assets/Image/SignUp.png";
import { AuthForm } from "./components/AuthForm/AuthForm";
import { useInputsSignUp } from "./hooks/useInputsSignUp";

export const SignUp = () => {
  const inputs = useInputsSignUp();

  return (
    <AuthForm
      title={"Sign Up"}
      inputs={inputs}
      buttonType={"sign"}
      switchText={"Already a member?"}
      switchLinkText={"Sign In"}
      switchTo={"/signIn"}
      image={SignUpImg}
    />
  );
};
