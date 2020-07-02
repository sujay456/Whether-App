import React from 'react';
import classe from './name.module.css';

const month=['JAN','Feb','MARCH','APRIL','MAY','JUNE','JULY','AUG','SEPT','OCT','NOV','DEC'];
const day=[' MONDAY','TUESDAY','WEDNESDAY','THRUSDAY','FRIDAY','SATURDAY','SUNDAY'];
const Name=(props)=>{

    var date=new Date();
    return (
        <div className={classe.Name} >
            <h1>{props.data.name}, {props.data.sys.country}  </h1>
            <p>{ day[date.getDay()]} { date.getDate() } { month[date.getMonth()]} </p>
        </div>
    );
}

export default Name;