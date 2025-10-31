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
import Button from '../common/Button';
import ko from '../assets/ko.png';
import ko1 from '../assets/ko1.png';
import ko3 from '../assets/ko3.png';
import Footer from '../components/layout/Footer';
import NewsCard from '../common/NewsCard';

import im from '../assets/im.png';
import c from '../assets/c.png';

import cc from '../assets/Icon [Layer_1].png';
import ccc from '../assets/layer2.png';
import cccc from '../assets/layer3.png';















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

            <Button bu="View more" />


        </section>

        <section className='news'>
            <Title title="News"/>
            <NewsCard c={c} pp="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI 
Capital to Successfully Closes the Seventh Securitization Bond Issuance for 
Halan Consumer Finance, Worth EGP 3.4 Billion" bp="Commercial International Bank (CIB) Has Partnered 
with CI Capital to Successfully Closes the Seventh 
Securitization Bond Issuance for Halan Consumer 
Finance, Worth EGP 3.4 Billion" pb="CIB, Egypt's leading and largest private sector bank, has successfully partnered 
with CI Capital to complete the seventh issuance for Halan Consumer Finance, 
valued at EGP 3.4 billion."/>

  <NewsCard c={c} pp="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI 
Capital to Successfully Closes the Seventh Securitization Bond Issuance for 
Halan Consumer Finance, Worth EGP 3.4 Billion" bp="Commercial International Bank (CIB) Has Partnered 
with CI Capital to Successfully Closes the Seventh 
Securitization Bond Issuance for Halan Consumer 
Finance, Worth EGP 3.4 Billion" pb="CIB, Egypt's leading and largest private sector bank, has successfully partnered 
with CI Capital to complete the seventh issuance for Halan Consumer Finance, 
valued at EGP 3.4 billion."/>

  <NewsCard c={c} pp="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI 
Capital to Successfully Closes the Seventh Securitization Bond Issuance for 
Halan Consumer Finance, Worth EGP 3.4 Billion" bp="Commercial International Bank (CIB) Has Partnered 
with CI Capital to Successfully Closes the Seventh 
Securitization Bond Issuance for Halan Consumer 
Finance, Worth EGP 3.4 Billion" pb="CIB, Egypt's leading and largest private sector bank, has successfully partnered 
with CI Capital to complete the seventh issuance for Halan Consumer Finance, 
valued at EGP 3.4 billion."/>

  <NewsCard c={c} pp="08/10/2025 - Commercial International Bank (CIB) Has Partnered with CI 
Capital to Successfully Closes the Seventh Securitization Bond Issuance for 
Halan Consumer Finance, Worth EGP 3.4 Billion" bp="Commercial International Bank (CIB) Has Partnered 
with CI Capital to Successfully Closes the Seventh 
Securitization Bond Issuance for Halan Consumer 
Finance, Worth EGP 3.4 Billion" pb="CIB, Egypt's leading and largest private sector bank, has successfully partnered 
with CI Capital to complete the seventh issuance for Halan Consumer Finance, 
valued at EGP 3.4 billion."/>


<Button bu="View more"/>
           
         
        </section>


        <img className='im' src={im} />

        <section className='coll'>
            <SmallTitle small_T=" We care"/>
            <Title title="Our dedicated team is committed to meeting your needs"/>

            <div className='row_n'>
                <NewsCard c={cc} bp="Online" pb="Chat with 'Zaki' our digital 
assistant to guide you through our 
products and services, or reach 
out on social media."/>

<NewsCard c={ccc} bp="On the phone" pb="For support, including 
emergencies such as cards 
closure or immediate critical 
feedback." />
<NewsCard c={cccc} bp="In branch" pb="Our trained team of tellers and 
relationship managers are here to 
help you get the service you need."/>


            </div>



        </section>




        </div>

        <div className='bg_f'>
        <Footer />

        </div>







</>


     );
}
 
export default Home;