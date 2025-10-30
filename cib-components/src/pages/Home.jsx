import React, { Component } from 'react';
import Navbar from '../components/layout/ Navbar';
import './Home.css';

const Home = () => {
    return ( 
<>

        <header className='header'>
            <img src='cib-components/src/assets/logomain.png' alt='logo'/ >
            <Navbar page="About Us" />
            <Navbar page=" Investor Relations " />
            <Navbar page="Responsible Banking" />
            <Navbar page="Newsroom" />
            <Navbar page="Learning Center" />
            <Navbar page="Careers" />
            <Navbar page="Others" />

        </header>


        <section className='hero'>

            <img className='absolute'>
            


            </img>



        </section>






</>


     );
}
 
export default Home;