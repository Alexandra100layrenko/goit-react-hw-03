import { useState } from 'react';
import s from './SearchBox.module.css'


const SearchBox = ({ filter, onChange }) => {

  return (
    <form className={s.searchBlock}>
      <label>
        <span>Find contacts by name</span>
        <input 
          type='text' 
          className={s.search} 
          name='search' 
          value={filter}
          onChange={onChange}/>
      </label>
    </form>
  )
}

export default SearchBox;
