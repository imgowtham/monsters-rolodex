import React from 'react';
import './search-box.styles.css'

export const SearchBox = ({placeholder, handleChange}) => (

    <div className="sample ten">
        <input 
      className="search"
      type="search" 
      placeholder={placeholder}
      onChange={handleChange}
         />
     <button type="submit" className="btn btn-search">
         <i className="fa fa-search"></i>
        </button>
         <button type="reset" className="btn btn-reset fa fa-times"></button>
    </div>
);
