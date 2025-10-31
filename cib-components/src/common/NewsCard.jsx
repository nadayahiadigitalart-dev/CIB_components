import React, { Component } from 'react';
import './NewsCards.css';




import c from '../assets/c.png';


const NewsCard = (props) => {
    return ( 
        <>
        <div className='row_c'>


            <img src={props.c}/>
            <div className='col_p'>
            <p className='foo'>{props.pp}</p>
            <p className='fbt'>{props.bp}</p>
            <p className='foo'>{props.pb}</p>
            </div>

        </div>
        
        
        
        
        
        </>



     );
}
 
export default NewsCard;