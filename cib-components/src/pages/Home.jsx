import React, { Component } from 'react';
import Navbar from '../components/layout/ Navbar';
import './Home.css';
import Logo from '../assets/logomain.png';
import Button from '../common/Button';






const Home = () => {
    return ( 
<>

        <header className='header'>
            <img src={Logo} alt='logo'/>
            <Navbar page="About Us" />
            <Navbar page=" Investor Relations " />
            <Navbar page="Responsible Banking" />
            <Navbar page="Newsroom" />
            <Navbar page="Learning Center" />
            <Navbar page="Careers" />
            <Navbar page="Others" />

        </header>


        <section className='hero'>

            <div className='col'>
                <h1 className='fb'>CIB</h1>
                <p className='f'>Delivering value to our clients, our <br></br>
                community and our shareholders</p>

                <Button />

            </div>

        </section>


        <section className='words'>
            

        </section>






</>


     );
}
 
export default Home;