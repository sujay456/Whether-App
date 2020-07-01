import React from 'react';
import classe from './searchBar.module.css';
import imge from '../../assests/images/s.png';

const SearchBar =(props)=>{

    return(
        <div className={classe.SearchContainer}>
            
            <input  type="text" placeholder="Enter City..." />
            <img src={imge} width="20px" />
        </div>

    );
}

export default SearchBar;
