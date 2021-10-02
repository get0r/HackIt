import React from 'react';
import logo from '../../assets/logo.png';

const Logo = () => {
    return (
        <a href="/">
            <div class="flex-shrink-0 flex items-center text-xl text-black font-semibold">
                <img class="hidden lg:block h-8 px-3 w-auto" src={ logo } alt="Logo" />
                <span>HackIt</span>
            </div>
        </a>
    );
};

export default Logo;
