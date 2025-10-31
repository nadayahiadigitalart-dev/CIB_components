import React, { Component } from 'react';
import './Footerlink.css';


const Footerlink = (props) => {
    return ( 

        <p className='g'>
            {props.link}
        </p>
     );
}
 
export default Footerlink;