import React from 'react';
import Nav from '../../components/navigation/nav';
import User from '../../components/user/user';
import Account from '../../components/account/account';
import Footer from '../../components/footer/footer';

const ProfileUser = () => {
    return (
        <div className='user-page'>
            <Nav />
            <main className="bg-dark">
                <User firstname='Tony' lastname='Jarvis' />
                <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance" />
                <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance" />
                <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance" />
            </main>
            <Footer />
        </div>
    );
};

export default ProfileUser;