import React from 'react';

const NavMenu = () => {
    const path = window.location.pathname;
    const active = 'bg-blue-700 text-white font-bold';
    const nonActive = 'hover:bg-blue-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium';

    return (
        <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
                <a href="/" class={ path === '/' ? `${active} ${nonActive}` : `${nonActive}` } aria-current="page">Home</a>
                <a href="/stories" class={ path === '/stories' ? `${active} ${nonActive}` : `${nonActive}` }>Stories</a>
                <a href="/jobs" class={ path === '/jobs' ? `${active} ${nonActive}` : `${nonActive}` }>Jobs</a>
            </div>
        </div>
    );
};

export default NavMenu;
