import React from 'react';

const HolderTitle = ({ title }) => {
    return (
        <div className="flex items-center text-gray-700 p-4 font-mono font-semibold text-xl">
            { title }<hr className="mx-4 w-10/12" />
        </div>
    );
};

export default HolderTitle;
