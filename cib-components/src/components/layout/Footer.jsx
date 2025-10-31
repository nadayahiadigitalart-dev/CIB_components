import React, { Component } from 'react';
import Footerlink from '../../common/Footerlink';
import './Footer.css';

import k from '../../assets/cib logo.png';
import v from '../../assets/social media group.png';
import jj from '../../assets/download app.png';

const Footer = () => {
    return ( 

        <>
        <div className='col_fo'>
<div className='row_items'>
            <img src={k} alt=''  />

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

            <img src={jj} alt='imgg'  />



</div>

<div className='v'>

<div className='r'>

            <Footerlink link="CBE Approvals"/>
            <Footerlink link="Cookie Policy"/>
            <Footerlink link="Privacy Policy"/>
            <Footerlink link="User Agreements"/>



</div>
<img src={v} alt='v' />
</div>







        </div>
        
        
        
        
        
        
        </>




     );
}
 
export default Footer;