import React from 'react';
import Stories from '../../components/Stories/Stories';
import HolderTitle from './HolderTitle';

const StoryHolder = () => {
    return (
        <div className="w-full flex">
            <div className="w-11/12">
                <HolderTitle title="Top Stories" />
                <Stories />
            </div>
            <div className="w-1/12 pl-6 items-center flex">
                <div className="w-11 cursor-pointer">
                    <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title /><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" /></svg>
                </div>
            </div>
        </div>
    );
};

export default StoryHolder;
