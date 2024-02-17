import React from 'react';
import Logo from "../../assets/argentBankLogo.png";

import { NavLink } from 'react-router-dom';


import '../../styles/components/nav.css';

const Nav= () => {
 
  

return (
    <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
            <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
        
            <NavLink to="/login" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                Sign In
            </NavLink>
      
        </div>
    </nav>
);
}

export default Nav;