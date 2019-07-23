import React, { Component } from 'react';
import './sass/_listings.scss';
import SideBar from './SideBar';
import Logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { directive } from '@babel/types';

class Header extends Component {
    constructor () {
        super() 
        this.state = {
            showModal: false
        }
    }

    handleShowModal = () => this.setState({showModal: true})
     
    handleCloseModal = () => this.setState({showModal: false})

    render() {
        return (
            <div id="header">
                <div className="logo"><Link  to={{ pathname: '/' }}><img src={Logo}/></Link></div>
                <nav>
                <div  style={{ cursor: 'pointer' }} onClick={this.handleShowModal}>
                <div id="nav-icon1">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>
                </nav>
                {this.state.showModal &&
                <SideBar onClose={this.handleCloseModal}
                         showModal={this.state.showModal}
                />
                }
            </div>
        );
    }
}

export default Header;


/*

<Link  to={{ pathname: '/' }}></Link>
*******Prev sidebar
 {this.state.showModal &&
                <SideBar onClose={this.handleCloseModal}
                         showModal={this.state.showModal}
                />
                }


Previous header you may want to use it you may not
    <nav>
                    <a href="#">Create Ads</a>
                    <a href="#">About Us</a>
                    <a href="#">Log in</a>
                    <a onClick={this.handleShowModal} className="register-btn" href="#">Register</a>
                </nav>
*/