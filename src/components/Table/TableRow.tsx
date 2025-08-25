import React from "react";
import styles from "./Table.module.css";
import { NewPlayerDto } from "../../api";
import { getAge } from "../../utils/getAge";

export const TableRow = ({ row }: { row: NewPlayerDto }) => {
  const age = getAge(row.birthday);
  return (
    <tbody>
      <tr>
        <td>{row.number}</td>
        <td>
          <div className={styles.roundCont}>
            <div className={styles.round}></div>
            <div className={styles.descCont}>
              <span>{row.name}</span>
              <span>{row.position}</span>
            </div>
          </div>
        </td>
        <td>{row.height}</td>
        <td>{row.weight}</td>
        <td>{age}</td>
      </tr>
    </tbody>
  );
};
