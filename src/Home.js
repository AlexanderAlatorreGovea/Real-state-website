import React, { Component } from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

import Logo from './images/logo.png';
import '/Users/test/real-state-website/src/sass/Home.scss';
import logo_bbc from './images/logo-bbc.png';
import logo_forbes from './images/logo-forbes.png';
import logo_techcrunch from './images/logo-techcrunch.png';
import logo_bi from './images/logo-bi.png';
import realtor_1 from './images/realtor-1.jpeg';
import realtor_2 from './images/realtor-2.jpeg';
import realtor_3 from './images/realtor-3.jpeg';
import img_story_1 from './images/story-1.jpeg';
import img_story_2 from './images/story-2.jpeg';
import gal_1 from './images/gal-1.jpeg';
import gal_2 from './images/gal-2.jpeg';
import gal_3 from './images/gal-3.jpeg';
import gal_4 from './images/gal-4.jpeg';
import gal_5 from './images/gal-5.jpeg';
import gal_6 from './images/gal-6.jpeg';
import gal_7 from './images/gal-7.jpeg';
import gal_8 from './images/gal-8.jpeg';
import gal_9 from './images/gal-9.jpeg';
import gal_10 from './images/gal-10.jpeg';
import gal_11 from './images/gal-11.jpeg';
import gal_12 from './images/gal-12.jpeg';
import gal_13 from './images/gal-13.jpeg';
import gal_14 from './images/gal-14.jpeg';
import back from './images/back.jpg';
import { isUserWhitespacable } from '@babel/types';


class Home extends Component {
    constructor () {
        super() 
        this.state = {
            visible: false,
            showModal: false,
        }
    }

    toggleMenu = () => {
        this.setState({ visible: !this.state.visible})
    }

    handleShowModal = () => this.setState({showModal: true})
     
    handleCloseModal = () => this.setState({showModal: false})

    render() {
        return (
                <div className="container">
                    {this.state.showModal &&
                    <SideBar onClose={this.handleCloseModal}
                    showModal={this.state.showModal}/>
                    }
                <div class="sidebar">
                    <button class="nav-btn" onClick={this.handleShowModal}></button>
                </div>


            
                <div class="header">
                    <img src={Logo} alt="Nexter logo" class="header__logo" />
                    <h3 class="heading-3">sfassdfadsfs Your own home:</h3>
                    <h1 class="heading-1">The ultimate personal freedom</h1>
                    <button class="btn header__btn"><Link  style={{color: 'white'}} to={{ pathname: '/Listings' }}>View our properties</Link></button>
                    <div class="header__seenon-text">Seen on</div>
                    <div class="header__seenon-logos">
                        <img src={logo_bbc} alt="Seen on logo 1" />
                        <img src={logo_forbes} alt="Seen on logo 2"/>
                        <img src={logo_techcrunch} alt="Seen on logo 3"/>
                        <img src={logo_bi} alt="Seen on logo 4" />
                    </div>
                </div>


                <div class="realtors">
                    <h3 class="heading-3">Top 3 Realtors</h3>
                    <div class="realtors__list">
                        <img src={realtor_1} alt="Realtor 1" className="realtors__img" />
                        <div class="realtors__details">
                            <h4 class="heading-4 heading-4--light">Erik Feinman</h4>
                            <p class="realtors__sold">245 houses sold</p>
                        </div>

                        <img src={realtor_2}  alt="Realtor 2" className="realtors__img" />
                        <div class="realtors__details">
                            <h4 class="heading-4 heading-4--light">Kim Brown</h4>
                            <p class="realtors__sold">212 houses sold</p>
                        </div>

                        <img src={realtor_3} alt="Realtor 3" className="realtors__img" />
                        <div class="realtors__details">
                            <h4 class="heading-4 heading-4--light">Toby Ramsey</h4>
                            <p class="realtors__sold">198 houses sold</p>
                        </div>
                    </div>
                </div>





                <div class="story__pictures" style={{ backgroundImage:
                    `linear-gradient(rgba(198, 153, 99, 0.3), rgba(198, 153, 99, 0.3)),  url('${back}')` }}>
                    <img src={img_story_1} alt="Couple with new house" class="story__img--1" /> 
                    <img src={img_story_2} alt="New house" class="story__img--2" />
                </div>

                <div class="story__content">
                    <h3 class="heading-3 mb-sm">Happy Customers</h3>
                    <h2 class="heading-2 heading-2--dark mb-md">&ldquo;The best decision of our lives&rdquo;</h2>
                    <p class="story__text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
                    </p>
                    <button class="btn">Find your own home</button>
                </div>

                <section class="gallery">
                  <figure class="gallery__item gallery__item--1"><img src={gal_1} alt="Gallery image 1" class="gallery__img" /></figure>
                  <figure class="gallery__item gallery__item--2"><img src={gal_2} alt="Gallery image 2" class="gallery__img"/></figure>
                  <figure class="gallery__item gallery__item--3"><img src={gal_3} alt="Gallery image 3" class="gallery__img"/></figure>
                    <figure class="gallery__item gallery__item--4"><img src={gal_4} alt="Gallery image 4" class="gallery__img"/></figure>
                    <figure class="gallery__item gallery__item--5"><img src={gal_5} alt="Gallery image 5" class="gallery__img"/></figure>
                    <figure class="gallery__item gallery__item--6"><img src={gal_6} alt="Gallery image 6" class="gallery__img"/></figure>
                    <figure class="gallery__item gallery__item--7"><img src={gal_7} alt="Gallery image 7" class="gallery__img"/></figure>
                    <figure class="gallery__item gallery__item--8"><img src={gal_8} alt="Gallery image 8" class="gallery__img" /></figure>
                    <figure class="gallery__item gallery__item--9"><img src={gal_9} alt="Gallery image 9" class="gallery__img"/></figure>
                    <figure class="gallery__item gallery__item--10"><img src={gal_10} alt="Gallery image 10" class="gallery__img" /></figure>
                    <figure class="gallery__item gallery__item--11"><img src={gal_11} alt="Gallery image 11" class="gallery__img" /></figure>
                    <figure class="gallery__item gallery__item--12"><img src={gal_12} alt="Gallery image 12" class="gallery__img" /></figure>
                    <figure class="gallery__item gallery__item--13"><img src={gal_13} alt="Gallery image 13" class="gallery__img" /></figure>
                    <figure class="gallery__item gallery__item--14"><img src={gal_14} alt="Gallery image 14" class="gallery__img" /></figure>
                </section>

                <footer class="footer" style={{marginTop: '20%'}}>
                    <ul class="nav">
                            <li class="nav__item"><Link style={{color: 'white'}} to={{ pathname: '/Listings' }} class="nav__link">Find your dream home</Link></li>
                            <li class="nav__item"><Link  style={{color: 'white'}} to={{ pathname: '/SignIn' }} class="nav__link">Request proposal</Link></li>
                            <li class="nav__item"><Link  style={{color: 'white'}} to={{ pathname: '/SignIn' }} class="nav__link">Download home planner</Link></li>
                            <li class="nav__item"><Link  style={{color: 'white'}} to={{ pathname: '/SignIn' }} class="nav__link">Contact us</Link></li>
                            <li class="nav__item"><Link  style={{color: 'white'}} to={{ pathname: '/SignIn' }} class="nav__link">Submit your property</Link></li>
                            <li class="nav__item"><Link  style={{color: 'white'}} to={{ pathname: '/SignIn' }} class="nav__link">Come work with us!</Link></li>
                    </ul>
                    <p class="copyright">
                        &copy; Copyright 2019 by Alexander Govea.
                    </p>
                </footer>
            </div>
        );
    }
}

export default Home;

