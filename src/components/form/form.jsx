import React from 'react';
// import { NavLink } from 'react-router-dom';

import "../../styles/components/form.css";

const Form = () => {
    return (
        <div>
      <main className='main bg-dark'>
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
           <h1 className='sign-in-title'>Sign In</h1>
         <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label
            ><input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label for="remember-me"
              >Remember me</label
            >
          </div>
          
          {/* <NavLink href="./user" className="sign-in-button">Sign In</NavLink> */}
         
           <button class="sign-in-button">Sign In</button> 
         
        </form>
        </section>
       </main>
        </div>
    );
};

export default Form;