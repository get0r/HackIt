import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
    const path = window.location.pathname;
    const active = 'bg-blue-700 text-white font-bold';
    const nonActive = 'hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium';

    return (
        <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
                <Link to="/" class={ path === '/' ? `${active} ${nonActive}` : `${nonActive}` } aria-current="page">Home</Link>
                <Link to="/stories" class={ path === '/stories' ? `${active} ${nonActive}` : `${nonActive}` }>Stories</Link>
                <Link to="/jobs" class={ path === '/jobs' ? `${active} ${nonActive}` : `${nonActive}` }>Jobs</Link>
            </div>
        </div>
    );
};

export default NavMenu;
