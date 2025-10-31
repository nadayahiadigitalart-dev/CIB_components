import React, { Component } from 'react';
import Navbar from '../components/layout/ Navbar';
import './Home.css';
import Logo from '../assets/logomain.png';

import Mainmenu from '../common/Mainmenu';
import Header from '../components/layout/Header';
import SmallTitle from '../common/SmallTitle';
import Title from '../common/Title';






const Home = () => {
    return ( 
<>
<div className='body'>

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


        
            <Header />

       


        <section className='words'>
            
            <Mainmenu text="Apply Online" />
            <Mainmenu text="News" />
            <Mainmenu text="Blog Articles" />
            <Mainmenu text="CIB International" />
            <Mainmenu text="Sustainable Finance" />
            <Mainmenu text="Awards" />



        </section>



        <section className='apply'>

            <SmallTitle small_T="Apply Online"/>
            <Title title="Apply online for cards and loans with ease!"/>

                


        </section>




        </div>






</>


     );
}
 
export default Home;