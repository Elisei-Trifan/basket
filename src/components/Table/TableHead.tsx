import React from "react";
import styles from "./Table.module.css";

export const TableHead = () => {
  return (
    <tr className={styles.row}>
      <td>{"#"}</td>
      <td>{"Player"}</td>
      <td>{"Height"}</td>
      <td>{"Weight"}</td>
      <td>{"Age"}</td>
    </tr>
  );
};
