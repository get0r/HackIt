import React from 'react';
import Stories from './Stories/Stories';
import HolderTitle from './HolderTitle';
import Loader from './Stories/Loader';

const StoryHolder = ({ topTitle, stories, isLoading }) => {

    return (
        <div className="w-full flex py-6 items-center justify-center items-center">
            <div className="w-11/12">
                <HolderTitle title={ topTitle } />
                {
                    isLoading ? <Loader /> : <Stories stories={ stories } />
                }
            </div>
            <div className="w-1/12 pl-6 justify-end flex items-center">
                <hr className=" w-12" />
                <div className="cursor-pointer hover:border-gray-700 border-2 p-2 rounded-full">
                    <svg className="w-3" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title /><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" /></svg>
                </div>
            </div>
        </div>
    );
};

export default StoryHolder;
