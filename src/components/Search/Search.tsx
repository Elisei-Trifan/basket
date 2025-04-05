import React from 'react'
import styles from './Search.module.css'
import searchIcon from '../../assets/icons/search_rounded.svg'

interface SearchProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="text"
        value={value}
        placeholder="Search..."
        onChange={onChange}
      />
      <img src={searchIcon} alt="search" className={styles.icon} />
    </div>
  )
}

export default Search
