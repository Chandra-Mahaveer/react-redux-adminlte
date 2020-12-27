import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AuthLayout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default AuthLayout;