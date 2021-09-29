import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';

const NavBar = () => {
    return (
        <nav className="rounded-xl font-mono items-center justify-between flex bg-gray-800 bg-opacity-90 px-12 py-4 my-4 mx-auto shadow-2xl w-11/12">
            <Logo />
            <NavMenu />
        </nav>
    );
};

export default NavBar;
