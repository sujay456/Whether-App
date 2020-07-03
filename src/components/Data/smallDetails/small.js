import React from 'react';
import classe from './small.module.css';
import Verysmall from './verysmall/verysmall';

const small=(props)=>{
    return (
        <div className={classe.Small} >
            <Verysmall header="Max" detail={props.data.main.temp_max} />
            <Verysmall header="Humidity" detail={props.data.main.humidity} />
            <Verysmall header="Wind" detail={props.data.wind.speed} />
            <Verysmall header="Min" detail={props.data.main.temp_min} />
            <Verysmall header="Pressure" detail={props.data.main.pressure} />
            <Verysmall header="Visibility" detail={props.data.visibility} />

        </div>
    );
}

export default small;