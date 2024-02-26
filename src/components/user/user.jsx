import React from 'react';
import { useSelector } from "react-redux";

import '../../styles/components/user.css';

const User = () => {

    const firstname = useSelector((state) => state.auth.user.firstname);
    const lastname = useSelector((state) => state.auth.user.lastname);

    return (
        <div>
            <div className="header">
                <h2>
                    Welcome back
                    <br />
                    {firstname} {lastname}!
                </h2>
                <button className="edit-button">Edit name</button>
            </div>
        </div>
    );
};

export default User;