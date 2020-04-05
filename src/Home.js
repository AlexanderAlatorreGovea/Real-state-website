import React, { Component } from 'react';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import WOW from "wowjs";

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
import pdf from './pdf/resume.pdf'

import { showAlert } from './alert/alert'; 


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

    showAlert = () => {
       return showAlert('success', 'succesfully downloaded');
    }

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    } 

    render() { 
        return (
                <div className="container" >
                    {this.state.showModal &&
                    <SideBar onClose={this.handleCloseModal}
                    showModal={this.state.showModal}/>
                    }
                <div className="sidebar" onClick={this.handleShowModal}>
                    <span style={{cursor: 'pointer'}}><button className="nav-btn" style={{cursor: 'pointer'}} ></button></span>
                </div>
            
                <div className="header">
                    <img src={Logo} alt="Nexter logo" className="header__logo animated fadeInUp" />
                    <h3 className="heading-3 animated fadeInUp">Your own home:</h3>
                    <h1 className="heading-1 animated fadeInUp">The ultimate personal freedom</h1>
                    <button className="btn header__btn"><Link className="wow fadeInUp" style={{color: 'white'}} to={{ pathname: '/Listings' }}>View our properties</Link></button>
                    <div className="header__seenon-text">Seen on</div>
                    <div className="header__seenon-logos">
                        <img src={logo_bbc} alt="Seen on logo 1" />
                        <img src={logo_forbes} alt="Seen on logo 2"/>
                        <img src={logo_techcrunch} alt="Seen on logo 3"/>
                        <img src={logo_bi} alt="Seen on logo 4" />
                    </div>
                </div> 
                <div className="realtors">
                    <h3 className="heading-3">Top 3 Realtors</h3>
                    <div className="realtors__list">
                        <img src={realtor_1} alt="Realtor 1" id="realtors__img" className="realtors__img" />
                        <div className="realtors__details">
                            <h4 className="heading-4 heading-4--light animated fadeInRight">Erik Feinman</h4>
                            <p className="realtors__sold ">245 houses sold</p>
                        </div>

                        <img src={realtor_2}  alt="Realtor 2" id="realtors__img"  className="realtors__img" />
                        <div className="realtors__details">
                            <h4 className="heading-4 heading-4--light animated fadeInRight">Kim Brown</h4>
                            <p className="realtors__sold ">212 houses sold</p>
                        </div>

                        <img src={realtor_3} alt="Realtor 3" id="realtors__img"  className="realtors__img" />
                        <div className="realtors__details">
                            <h4 className="heading-4 heading-4--light animated fadeInRight">Toby Ramsey</h4>
                            <p className="realtors__sold ">198 houses sold</p>
                        </div>
                    </div>
                </div>

                <div className="story__pictures" style={{ backgroundImage:
                    `linear-gradient(rgba(198, 153, 99, 0.3), rgba(198, 153, 99, 0.3)),  url('${back}')` }}>
                    <img src={img_story_1} alt="Couple with new house" className="story__img--1 wow fadeIn" /> 
                    <img src={img_story_2} alt="New house" className="story__img--2 wow fadeIn" />
                </div>

                <div className="story__content">
                    <h3 className="heading-3 mb-sm wow fadeInUp">Happy Customers</h3>
                    <h2 className="heading-2 heading-2--dark mb-md wow fadeInUp">&ldquo;The best decision of our lives&rdquo;</h2>
                    <p className="story__text wow fadeInUp">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
                    </p>
                    <button id="find" className="btn"><Link className="wow fadeInUp"  style={{color: 'white'}} to={{ pathname: '/Listings' }}>Find your own home</Link></button>
                </div>

                <section className="gallery">
                  <figure className="gallery__item gallery__item--1"><img src={gal_1} alt="Gallery 1" className="gallery__img wow fadeInUp" /></figure>
                  <figure className="gallery__item gallery__item--2"><img src={gal_2} alt="Gallery 2" className="gallery__img wow fadeInUp"/></figure>
                  <figure className="gallery__item gallery__item--3"><img src={gal_3} alt="Gallery 3" className="gallery__img wow fadeInUp"/></figure>
                    <figure className="gallery__item gallery__item--4"><img src={gal_4} alt="Gallery 4" className="gallery__img wow fadeInUp"/></figure>
                    <figure className="gallery__item gallery__item--5"><img src={gal_5} alt="Gallery 5" className="gallery__img wow fadeInUp"/></figure>
                    <figure className="gallery__item gallery__item--6"><img src={gal_6} alt="Gallery 6" className="gallery__img wow fadeInUp"/></figure>
                    <figure className="gallery__item gallery__item--7"><img src={gal_7} alt="Gallery 7" className="gallery__img wow fadeInUp"/></figure>
                    <figure className="gallery__item gallery__item--8"><img src={gal_8} alt="Gallery 8" className="gallery__img wow fadeInUp" /></figure>
                    <figure className="gallery__item gallery__item--9"><img src={gal_9} alt="Gallery 9" className="gallery__img wow fadeInUp"/></figure>
                    <figure className="gallery__item gallery__item--10"><img src={gal_10} alt="Gallery 10" className="gallery__img wow fadeInUp" /></figure>
                    <figure className="gallery__item gallery__item--11"><img src={gal_11} alt="Gallery 11" className="gallery__img wow fadeInUp" /></figure>
                    <figure className="gallery__item gallery__item--12"><img src={gal_12} alt="Gallery 12" className="gallery__img wow fadeInUp" /></figure>
                    <figure className="gallery__item gallery__item--13"><img src={gal_13} alt="Gallery 13" className="gallery__img wow fadeInUp" /></figure>
                    <figure className="gallery__item gallery__item--14"><img src={gal_14} alt="Gallery 14" className="gallery__img wow fadeInUp" /></figure>
                </section>

                <footer className="footer" style={{marginTop: '20%'}}>
                    <ul className="nav">
                        <li className="nav__item"><Link style={{color: 'white'}} to={{ pathname: '/Listings' }} className="nav__link wow fadeInUp">Find your dream home</Link></li>
                        <li className="nav__item"><Link  style={{color: 'white'}} to={{ pathname: '/SignIn' }} className="nav__link wow fadeInUp">Request proposal</Link></li>
                        <li className="nav__item" onClick={this.showAlert}><a style={{ color: 'white' }} href={pdf} download target="_self" className="nav__link wow fadeInUp">Download home planner</a></li>
                        <li className="nav__item"><Link style={{ color: 'white' }} to={{ pathname: '/aboutus' }} className="nav__link wow fadeInUp">Contact us</Link></li>
                        <li className="nav__item"><Link  style={{color: 'white'}} to={{ pathname: '/SignIn' }} className="nav__link wow fadeInUp">Submit your property</Link></li>
                        <li class="nav__item"><Link  style={{color: 'white'}} to={{ pathname: '/SignIn' }} class="nav__link wow fadeInUp">Come work with us!</Link></li>
                    </ul>
                    <p className="copyright">
                        &copy; Copyright 2019 by Alexander Govea.
                    </p>
                </footer>
            </div>
        );
    }
}

export default Home;

