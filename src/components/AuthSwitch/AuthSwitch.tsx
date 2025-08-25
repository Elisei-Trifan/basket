import React from "react";
import styles from "./AuthSwitch.module.css";
import { CustomLink } from "../Link/CustomLink";

interface IProps {
  question: string;
  linkText: string;
  to: string;
}

export const AuthSwitch = ({ question, linkText, to }: IProps) => {
  return (
    <p className={styles.text}>
      {question} <CustomLink to={to} text={linkText} />
    </p>
  );
};
