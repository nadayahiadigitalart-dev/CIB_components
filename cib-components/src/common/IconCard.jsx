import React, { Component } from 'react';
import './IconCard.css';


const IconCard = (props) => {
    return ( 

        <div className='row_cards'>
           <img src={props.img} alt="Icon" className="i" />
           <p className='font'>{props.a}</p>
        </div>


     );
}
 
export default IconCard;