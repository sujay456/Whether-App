import React from 'react';
import classe from './searchBar.module.css';
import imge from '../../assests/images/s.png';

const SearchBar =(props)=>{

    return(
        <div className={classe.SearchContainer}>
            
            <form onSubmit={props.apiCall}>
                <input  type="text" placeholder="Enter City..."  value={props.city} onChange={props.valueChange}  />
                <img src={imge} width="20px" alt="search" />
            </form>
            
        </div>

    );
}

export default SearchBar;
