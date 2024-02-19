import React from 'react';

import Nav from '../../components/navigation/nav';
import Footer from '../../components/footer/footer';
import { NavLink } from 'react-router-dom';

import '../../styles/pages/error.css';

const Error = () => {
    return (
        <div className='page-error'>
            <Nav />
            <main>
                <section className="error">
                    <h2 className="sr-only">Error 404</h2>
                    <p className="error-text">The requested page doesn't exist...</p>
                    <p className="error-text">Please return to homepage</p>
                    <NavLink to="/">
                        <button className="error-button">back to the homepage</button>
                    </NavLink>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Error;