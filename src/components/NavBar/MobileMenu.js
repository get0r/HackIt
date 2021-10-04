import React from 'react';

const MobileMenu = (props) => {
    const path = window.location.pathname;
    const active = 'text-blue-700 font-bold';
    const nonActive = 'hover:bg-blue-600 hover:text-white block px-3 py-2 rounded-md text-sm font-medium';

    return (
        <div class="sm:hidden mx-auto" id="mobile-menu">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="/" class={ path === '/' ? `${active} ${nonActive}` : `${nonActive}` } aria-current="page">Home</a>
                <a href="/stories" class={ path === '/stories' ? `${active} ${nonActive}` : `${nonActive}` }>Stories</a>
                <a href="/jobs" class={ path === '/jobs' ? `${active} ${nonActive}` : `${nonActive}` }>Jobs</a>
            </div>
        </div>
    );
};

export default MobileMenu;
