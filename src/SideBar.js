import React from 'react';
import './sass/SideBar.scss';
import { Link, NavLink } from 'react-router-dom';

const SideBar = (props) => {
    return (
        <div>
            <div id="sidenav__navigation"
            className={`sidenav ${props.showModal ? 'open' : 'close'}`}>
                <a href="javascript:void(0)" 
                    onClick={props.onClose}
                class="closebtn" >&times;</a>
                <div className="menu-list__container">
                    <NavLink className="menu-list" exact={true} activeStyle={{ color: 'white'}} to={{ pathname: '/' }}>Home</NavLink>
                    <NavLink className="menu-list" exact={true} activeStyle={{ color: 'white' }}  to={{ pathname: '/Listings' }}>Listings</NavLink>
                    <NavLink className="menu-list" exact={true} activeStyle={{ color: 'white' }}  to={{ pathname: '/aboutus' }}>About</NavLink>
                    <NavLink className="menu-list" exact={true} activeStyle={{ color: 'white' }}  to={{ pathname: '/SignIn' }}>Sign In</NavLink>
                </div>
            </div>
            <span style={{fontSize: '60px', cursor: 'pointer'}} >&#9776;</span>
        </div>
    );
};

export default SideBar;

 