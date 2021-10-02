import React from 'react';
import { Link } from 'react-router-dom';

import Stories from './Stories/Stories';
import HolderTitle from './HolderTitle';
import Loader from '../Loader';
import ErrorMessage from './ErrorMessage';

const StoryHolder = ({ topTitle, isStories, stories, isLoading, error }) => {

    return (
        <div className="w-full flex py-6 justify-center items-center">
            <div className="w-11/12">
                <HolderTitle title={ topTitle } />
                {
                    isLoading ? <Loader /> :
                        error ? <ErrorMessage message={ error } /> : <Stories stories={ stories } />
                }
            </div>
            <div className="w-1/12 pl-6 justify-end flex items-center">
                <hr className=" w-12" />
                <Link to={ isStories ? '/stories' : '/jobs' } >
                    <div className="cursor-pointer hover:border-blue-700 border-2 p-2 rounded-full">
                        <svg className="w-3" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><title /><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" /></svg>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default StoryHolder;
