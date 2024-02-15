import React from 'react';
import Logo from "../../assets/argentBankLogo.png";


import '../../styles/components/nav.css';

const Nav= () => {
 
  

return (
    <nav className="main-nav">
        <a className="main-nav-logo" to="./index.html">
            <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
        
            <a className="main-nav-item" to="/sign-in.html">
                <i className="fa fa-user-circle"></i>
                Sign In
            </a>
      
        </div>
    </nav>
);
}

export default Nav;