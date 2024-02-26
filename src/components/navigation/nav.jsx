import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../app/actions/auth-actions';



import Logo from "../../assets/argentBankLogo.png";

import '../../styles/components/nav.css';


const Nav = () => {
    
    const isConnected = useSelector((state) => state.auth.isConnected)
     const firstname = useSelector((state) => state.auth.user.firstname)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    }
 
  return (
    <nav className="main-nav">
         <h1 className="sr-only">Argent Bank</h1>
        <NavLink className="main-nav-logo" to="/">
            <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
            />
            
        </NavLink>
        {isConnected ? (
                    <div className='connected'>
                        <NavLink to='/user'>
                            <i className='fa-solid fa-2x fa-circle-user' />
                            <p>{ firstname }</p>
                        </NavLink>
                        <NavLink to='/' onClick={logoutHandler}>
                            <i className='fa-solid fa-arrow-right-from-bracket' />
                            <p> Sign out </p>
                        </NavLink>
                    </div>
                    ) : (
                    <div className='not-connected'>
                        <NavLink to='/login' >
                            <i className="fa-solid fa-circle-user"></i>
                            <p>Sign In</p>
                        </NavLink>
                    </div>
                )}
    </nav>
);
}

export default Nav;