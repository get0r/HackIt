import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Stories from '../components/StoryHolder/Stories/Stories';
import { connect } from 'react-redux';
import { loadStory } from '../redux/Stories/actions';

const AllStories = ({ allStories, dispatch }) => {

    console.log('in all stories', allStories);

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
        dispatch(loadStory())
        // const loadStoriesOnVisibility = () => {
        //     if (isElementOnScreen(document.getElementById('infiniteLoader'))) {
        //         if (!isLoading) {
        //             loadMoreStories();
        //         }
        //     }
        // };

        // window.addEventListener('scroll', e => {
        //     loadStoriesOnVisibility();
        // });

        // loadStoriesOnVisibility();
    }, []);

    return (
        <section className="w-11/12 px-2 py-4 my-4 mx-auto">
            { allStories ? <Stories stories={ allStories } /> : null }
            <Loader id='infiniteLoader' />
        </section>
    );
};

const mapStateToProps = state => {
    return {
        allStories: state.stories.allStories.detail
    }
};

export default connect(mapStateToProps, null)(AllStories);
