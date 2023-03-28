import React from 'react';
import './Header.css';
import logo from  '../../images/Logo.svg';

import {BsFillCartFill} from 'react-icons/bs';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='links'>
                <a href="#order">Order</a>
                <a href="#OrderReview">Order Review</a>
                <a href="#ManageInventory">Manage Inventory</a>
                <a href="#Login">Login</a>
            </div>
            <div className='header-cart'>
                <BsFillCartFill/>
            </div>
        </nav>
    );
};

export default Header;