import React from 'react';
import classe from './very.module.css';
const Verysmall=(props)=>{
    return (
        <div className={classe.Very} >
            <p>{props.header}</p>
            <p> {props.detail} </p>
        </div>
    );
}

export default Verysmall;