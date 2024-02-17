import React from 'react';

const User = ({firstname, lastname}) => {
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