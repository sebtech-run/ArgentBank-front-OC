import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../../app/actions/auth-actions';



import Logo from "../../assets/argentBankLogo.png";

import '../../styles/components/nav.css';


const Nav = () => {
    
    const isConnected = useSelector((state) => state.auth.token);
    const userName = useSelector((state) => state.user.username);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    }
 
    return (
        <header>
             <h1 className="sr-only">Argent Bank</h1>
       <nav>
        
        <NavLink to="/">
            <img
               className='image'
                src={Logo}
                alt="Argent Bank Logo"
            />
          </NavLink>
          
        {isConnected ? (
                    <div className='connected'>
                        <NavLink to='/user' className="nav-login">
                            <i className='fa-solid fa-circle-user' />
                            { userName }
                        </NavLink>
                        <NavLink to='/' className="nav-login" onClick={logoutHandler}>
                            <i className='fa-solid fa-arrow-right-from-bracket' />
                            Sign out 
                        </NavLink>
                    </div>
                    ) : (
                    <div className='not-connected'>
                        <NavLink to='/login' className="nav-login" >
                            <i className="fa-solid fa-circle-user"></i>
                            Sign In
                        </NavLink>
                    </div>
                )}
            </nav>
            </header>
);
}

export default Nav;