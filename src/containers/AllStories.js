import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Stories from '../components/StoryHolder/Stories/Stories';

const AllStories = (props) => {

    const [isLoading, setIsLoading] = useState(false);

    const isElementOnScreen = target => {
        var rect = target.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

        return (rect.top > viewHeight) ? false : true;
    };

    const loadMoreStories = () => {
        //dispatch more here with page
        console.log('loading now');
    }

    useEffect(() => {
        const loadStoriesOnVisibility = () => {
            if (isElementOnScreen(document.getElementById('infiniteLoader'))) {
                if (!isLoading) {
                    loadMoreStories();
                }
            }
        };

        window.addEventListener('scroll', e => {
            loadStoriesOnVisibility();
        });

        loadStoriesOnVisibility();
    }, []);

    return (
        <section className="w-11/12 px-2 py-4 my-4 mx-auto">
            <Stories stories={ [1, 54, 45, 6, 7, 88, 2, 3, 4, 5, 6, 7, 8, 9, 1] } />
            <Loader id='infiniteLoader' />
        </section>
    );
};

export default AllStories;
