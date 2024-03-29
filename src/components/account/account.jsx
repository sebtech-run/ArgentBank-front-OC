import React from 'react';

import '../../styles/components/account.css';

const Account = ({title, amount, description}) => {
    return (
        <div>
            <section className='account'>
                <div className="account-content-wrapper">
                    <h3 className="account-title">
                        { title }
                    </h3>
                    <p className="account-amount">
                        { amount }
                    </p>
                    <p className="account-amount-description">
                        { description }
                    </p>
                </div>
                <div className="account-content-wrapper">
                    <button className="transaction-button">View transactions</button>
                </div>



            </section>

            
        </div>
    );
};

export default Account;