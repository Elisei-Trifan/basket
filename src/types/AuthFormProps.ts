import React from "react";
import { ButtonProps } from "../components/Button/Button";

export interface AuthFormProps {
  title: string;
  inputs: {
    label: string;
    name: string;
    // value: string;
    type: string;
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }[];
  buttonType: ButtonProps["type"];
  switchText: string;
  switchLinkText: string;
  switchTo: string;
  image: string;
}
