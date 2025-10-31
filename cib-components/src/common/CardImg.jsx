import React, { Component } from 'react';
import './CardImg.css';


const CardImg = (props) => {
    return ( 
        <>
        
        <div className='col_card'>
           <img src={props.imgg} alt="img"  />
           <h3 className='t' >{props.t}</h3>
           <p className='fff'>{props.p}</p>
           <br></br>
           <br></br>
           <a >{props.l}</a>

        </div>
        
        
        
        
        </>


     );
}
 
export default CardImg;