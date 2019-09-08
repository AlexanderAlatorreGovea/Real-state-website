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


