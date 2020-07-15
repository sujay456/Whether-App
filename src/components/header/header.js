import React from 'react';
import classe from './header.module.css';
import Aux from '../../hoc/auxilary';
const header=(props)=> { 

    let slideUp=null;
    let slideDown=null;

    if(props.status)
    {
        console.log("insidde");
        slideUp=classe.Slide;

        slideDown=classe.SlideDown;
    }


    return (
        <Aux>
            <div className={ [classe.Header,slideUp].join(' ') } >
                <h1>Weather App</h1>
            </div>
            <div className={ [classe.Header1,slideDown].join(' ') } >
                <p>weather App</p>
            </div>
        </Aux>
        
    );
 }

export default React.memo(header);