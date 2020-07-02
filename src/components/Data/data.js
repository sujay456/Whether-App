import React from 'react';
// import Aux from '../../hoc/auxilary';
import Name from './Name/name';
import classe from './data.module.css';
const Data =(props)=>{

    return (
        <div className={classe.Data} >
            <Name data={props.data} />
        </div>  
    );

}

export default Data;