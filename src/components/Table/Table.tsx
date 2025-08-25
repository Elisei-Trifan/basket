import React from "react";
import styles from "./Table.module.css";
import { TableRow } from "./TableRow";
import { TableTitle } from "./TableTitle";
import { TableHead } from "./TableHead";

export const Table = () => {
  const rows = [
    {
      name: "Bol Bol",
      number: 21,
      position: "CenterForward",
      team: 56,
      birthday: new Date("2021-08-22"),
      height: 220,
      weight: 90,
      avatarUrl: null,
    },
  ];

  return (
    <>
      <table className={styles.table}>
        <TableTitle />
        <TableHead />
        {rows.map((row) => (
          <TableRow row={row} />
        ))}
      </table>
    </>
  );
};
