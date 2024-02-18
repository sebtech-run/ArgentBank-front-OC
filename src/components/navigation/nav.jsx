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
        
            <NavLink to="/login" className="not-connected">
                <i className="fa fa-user-circle"></i>
               <p>Sign In</p> 
            </NavLink>
      
        </div>
         <div className='connected'>
                    <NavLink to='/user'>
                        <i className='fa-solid fa-2x fa-circle-user' />
                        { /* A changer lors de la récupération des comptes via API*/}
                        <p> Tony  </p>
                    </NavLink>
                    <NavLink to='/'>
                        <i className='fa-solid fa-arrow-right-from-bracket' />
                        <p> Sign out </p>
                    </NavLink>
                </div>
    </nav>
);
}

export default Nav;