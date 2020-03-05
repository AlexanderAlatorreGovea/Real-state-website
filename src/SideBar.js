import React from 'react';
import './sass/SideBar.scss';
import { Link } from 'react-router-dom';

const SideBar = (props) => {
    return (
        <div>
            <div id="sidenav__navigation"
            className={`sidenav ${props.showModal ? 'open' : 'close'}`}>
                <a href="javascript:void(0)" 
                    onClick={props.onClose}
                class="closebtn" >&times;</a>
                <div className="menu-list__container">
                    <Link className="menu-list" to={{ pathname: '/' }}>Home</Link>
                    <Link className="menu-list" to={{ pathname: '/Listings' }}>Listings</Link>
                    <Link className="menu-list" to={{ pathname: '/aboutus' }}>About</Link>
                    <Link className="menu-list" to={{ pathname: '/SignIn' }}>Sign In</Link>
                </div>
            </div>
            <span style={{fontSize: '60px', cursor: 'pointer'}} >&#9776;</span>
        </div>
    );
};

export default SideBar;

