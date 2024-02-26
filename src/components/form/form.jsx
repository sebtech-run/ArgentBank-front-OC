import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginFailed, loginSuccess } from '../../app/actions/auth-actions';
import { isValidEmail, isValidPassword } from '../../app/utils/regex';


import "../../styles/components/form.css";


const Form = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isValidEmail(email)) {
            setError("Invalid email adress");
            return;
        }
        if (!isValidPassword(password)) {
            setError("Invalid password");
            return;
        }
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password}),
            });
            if (response.ok) {
                const data = await response.json();
                const token = data.body.token;
                dispatch(loginSuccess(token));
                navigate('/user');
            } else {
                dispatch(loginFailed(error));
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
      <main className='bg-dark'>
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
           <h1 className='sign-in-title'>Sign In</h1>
            
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
                 id='username' 
                type='text'
                value={email}
               onChange={(event) => setEmail(event.target.value)}
              />
              </div>
              <div className='input-wrapper'>
                <label htmlFor='password'>Password</label>
                <input 
                 id='password' 
                  type='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="input-remember">
              <input 
                      id='remember-me' 
                      type='checkbox' 
                      checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    />
                    <label htmlFor='remember-me'>Remember me</label>
              </div>
              
             <button className="sign-in-button">
                    Sign In
             </button>
           {error && <p className='error-message'>{error}</p>}
         
             
         </form>
        </section>
       </main>
        </div>
    );
};

export default Form;