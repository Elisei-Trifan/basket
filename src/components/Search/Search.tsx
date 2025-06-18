import React from "react";
import styles from "./Search.module.css";
import { SearchIcon } from "../../assets/icons/SearchIcon";

interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="text"
        value={value}
        placeholder="Search..."
        onChange={onChange}
      />
      <SearchIcon className={styles.icon} />
    </div>
  );
};
