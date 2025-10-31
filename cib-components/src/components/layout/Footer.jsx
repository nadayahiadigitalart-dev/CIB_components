import React, { Component } from 'react';
import Footerlink from '../../common/Footerlink';

const Footer = () => {
    return ( 

        <>
        <div className='col_fo'>
<div className='row_items'>
            <img src='' alt=''  />

            <div className='co'>
            <Footerlink link="FAQs"/>
            <Footerlink link="Learning Center"/>
            <Footerlink link="Fees & Charges"/>
            <Footerlink link="Terms & Conditions"/>

            </div>

              <div className='co'>
            <Footerlink link="Local"/>
            <Footerlink link="Abroad"/>
            <Footerlink link="Business"/>
            <Footerlink link="Corporate"/>

            </div>

              <div className='co'>
            <Footerlink link="Careers"/>
            <Footerlink link="Why CIB"/>
            <Footerlink link="Email us"/>
            <Footerlink link="System Status"/>

            </div>

            <img src='../assets/download app.png' alt=''  />



</div>





        </div>
        
        
        
        
        
        
        </>




     );
}
 
export default Footer;