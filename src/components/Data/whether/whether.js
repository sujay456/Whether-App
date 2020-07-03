import React from 'react';
import classe from './whether.module.css';
import Small from '../smallDetails/small';

const Whether=(props)=>{

    return(
        <div className={classe.Whether} >
            <div>
                
                <p>
                <i class="fas fa-cloud"></i>{props.data.main.temp}°C</p>
                <small>{props.data.weather[0].main}</small>
            </div>
            <Small data={props.data}/>
        </div>
    );

}

export default Whether;