import React from 'react';

const NavMenu = () => {
    return (
        <div>
            <ul className="flex text-white items-center">
                <li className={ window.location.pathname === '/' ? 'text-l font-bold mx-4' : 'font-semibold mx-4 text-sm' }><a href="/">Home</a></li>
                <li className={ window.location.pathname === '/stories' ? 'text-l font-bold mx-4' : 'font-semibold mx-4 text-sm' }><a href="/stories">Stories</a></li>
                <li className={ window.location.pathname === '/jobs' ? 'text-l font-bold mx-4' : 'font-semibold mx-4 text-sm' }><a href="/jobs">Jobs</a></li>
            </ul>
        </div>
    );
};

export default NavMenu;
