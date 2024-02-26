import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import User from '../../components/user/user';
import Account from '../../components/account/account';
import Footer from '../../components/footer/footer';

const ProfileUser = () => {

     const isConnected = useSelector((state) => state.auth.isConnected);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isConnected) {
            const userData = async () => {
                try {
                    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                    });
                    if (response.ok) {
                        const data = await response.json();
                        dispatch({
                            type: 'GET_USERPROFILE',
                            payload: {
                                firstname: data.body.firstName,
                                lastname: data.body.lastName,
                                username: data.body.userName
                            },
                        });
                    } else {
                        console.log("error while retrieving profile");
                    }
                } catch (error) {
                    console.error(error);
                };
            };
            userData();
        }
    }, [dispatch, token, isConnected]);











    return (
        <div className='user-page'>
            
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