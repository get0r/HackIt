import React from 'react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import NavMenu from './NavMenu';

const NavBar = () => {
    return (
        <nav class="bg-white">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="relative flex items-center justify-between h-16">
                    <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                        <Logo />
                        <NavMenu />
                    </div>
                </div>
            </div>
            <MobileMenu />
        </nav>
    );
};

export default NavBar;
