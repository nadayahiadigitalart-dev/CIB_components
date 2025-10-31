import React, { Component } from 'react';

import './Header.css';

// import Button from '../common/Button';
import Button from '../../common/Button';
// import cibImage from '../../assets/cib.jpg';
import cibImage from '../../assets/cib.jpg';





const Header = () => {
    return ( 

      <section className='h'>
        <img src={cibImage} alt="CIB Background" className="hero-img" />

            

            <div className='col'>
                <h1 className='fb'>CIB</h1>
                <p className='ff'>Delivering value to our clients, our <br></br>
                community and our shareholders</p>

                <Button bu="Discover more" />

            </div>

        </section>




     );
}
 
export default Header;