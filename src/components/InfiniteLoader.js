import React from 'react';
import Loader from './Loader';
import Stories from './StoryHolder/Stories/Stories';

const InfiniteLoader = ({ allStories }) => {
    return (
        <section className="w-11/12 px-2 py-4 my-4 mx-auto">
            { allStories ? <Stories stories={ allStories } /> : null }
            <Loader id='infiniteLoader' />
        </section>
    );
};

export default InfiniteLoader;
