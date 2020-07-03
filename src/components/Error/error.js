import React from 'react';
import classe from './error.module.css';

const Error =(props)=>{

    return (
        <div className={classe.Error} >

            <p>
            <i class="far fa-frown"></i>
            
                Sorry, the specified city was not found..</p>
        </div>
    );
}

export default Error;