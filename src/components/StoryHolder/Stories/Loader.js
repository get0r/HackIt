import React from 'react';

const Loader = ({ loadingText }) => {
    return (
        <div className="flex space-x-2 p-5 rounded-full justify-center items-center">
            <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce animation-delay-75"></div>
            <div className="bg-yellow-400 p-2 w-4 h-4 rounded-full animate-bounce animation-delay-200"></div>
            <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce animation-delay-400"></div>
        </div>
    )
}

export default Loader;
