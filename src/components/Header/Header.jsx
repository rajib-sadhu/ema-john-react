import React from 'react';
import './Header.css';
import logo from  '../../images/Logo.svg';

import {BsFillCartFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <Link to='/'>
            <img src={logo} alt="" />
            </Link>
            <div className='links'>
                <Link  to="/orders">Orders</Link>
                <Link  to="#">Order Review</Link>
                <Link  to="/inventory">Manage Inventory</Link>
                <Link  to="/Login">Login</Link>
            </div>
            <div className='header-cart'>
                <BsFillCartFill/>
            </div>
        </nav>
    );
};

export default Header;