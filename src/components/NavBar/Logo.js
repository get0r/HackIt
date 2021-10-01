import React from 'react';
import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <a href="/">
            <div className="text-xl text-white font-semibold inline-flex items-center justify-center">
                <img className="w-6 mr-4" src={ logo } alt="logo" />
                <span>HackIt</span>
            </div>
        </a>
    );
};

export default Logo;
