import React, { Component } from 'react';
import Navbar from '../components/layout/ Navbar';
import './Home.css';
import Logo from '../assets/logomain.png';

import Mainmenu from '../common/Mainmenu';
import Header from '../components/layout/Header';
import SmallTitle from '../common/SmallTitle';
import Title from '../common/Title';
import IconCard from '../common/IconCard';

// import Ic from '../assets/icon1.png';
import Ic from '../assets/icon1.png';
import Ic2 from '../assets/icon2.png';
import Ic3 from '../assets/icon3.png';
import CardImg from '../common/CardImg';
import ko from '../assets/ko.png';
import ko1 from '../assets/ko1.png';
import ko3 from '../assets/ko3.png';










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

            <div className='row_cards'>

                <div className='card_i'>
                <IconCard img={Ic} a="Apply for a New Account" />
            
                </div>

                 <div className='card_i'>
                <IconCard img={Ic2} a="Apply for a card" />
            
                </div>

                 <div className='card_i'>
                <IconCard img={Ic3} a="Apply for a loan or " />
            
                </div>

            </div>

                


        </section>



        <section className='col_c'>

            <Title title="Learning Center"/>
            <p className='f3'>Learn more about banking and your finances</p>

            <div className='roww'>

                <CardImg imgg={ko} t="Buying and making a home " p="Buying a home can be an emotional process, 
but it&rsquo;s important to approach it 
logically " a="Read more" />
                <CardImg imgg={ko1} t="Traveling on a budget" p="So for all of you travelers, take a vacation 
without spending a fortune with these helpful 
tips and tricks:" a="Read more" />
                <CardImg imgg={ko3} t="University life tips" p="The impact of a good education can be 
transformative."  a="Read more" />



            </div>


        </section>




        </div>






</>


     );
}
 
export default Home;