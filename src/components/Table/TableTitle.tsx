import React from "react";
import styles from "./Table.module.css";

export const TableTitle = () => {
  return (
    <thead>
      <tr>
        <td className={styles.roster}>{"Roster"}</td>
      </tr>
    </thead>
  );
};
