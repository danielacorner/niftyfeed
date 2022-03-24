import React, { useState } from 'react';

import Home from '../components/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Login from '../components/Login';

const Landing = () => {
    const [token, setToken] = useState();

    if(!token) {
        return <Login setToken={setToken}/>
    }
    return (
        <>
            <Header /> 
            <Home />
            <Footer /> 
        </>
    )
}

export default Landing;
