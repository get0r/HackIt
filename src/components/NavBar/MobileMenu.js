import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = (props) => {
    const path = window.location.pathname;
    const active = 'text-blue-700 font-bold';
    const nonActive = 'hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-sm font-medium';

    return (
        <div class="sm:hidden mx-auto" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" class={ path === '/' ? `${active} ${nonActive}` : `${nonActive}` } aria-current="page">Home</Link>
                <Link to="/stories" class={ path === '/stories' ? `${active} ${nonActive}` : `${nonActive}` }>Stories</Link>
                <Link to="/jobs" class={ path === '/jobs' ? `${active} ${nonActive}` : `${nonActive}` }>Jobs</Link>
            </div>
        </div>
    );
};

export default MobileMenu;
