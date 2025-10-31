import React, { Component } from 'react';

import './Header.css';

import Button from '../common/Button';


const Header = () => {
    return ( 

        <section className='hero'>

            <div className='col'>
                <h1 className='fb'>CIB</h1>
                <p className='ff'>Delivering value to our clients, our <br></br>
                community and our shareholders</p>

                <Button />

            </div>

        </section>




     );
}
 
export default Header;