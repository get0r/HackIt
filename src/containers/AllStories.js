import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { loadStory } from '../redux/Stories/actions';
import InfiniteLoader from '../components/InfiniteLoader';
import ErrorMessage from '../components/StoryHolder/ErrorMessage';
import { loadJob } from '../redux/Jobs/actions';

const AllStories = ({ allStories, isLoading, error, loadSingleStory }) => {

    const [isVisible, setIsVisible] = useState(false);

    const isElementOnScreen = target => {
        var rect = target.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

        return (rect.top > viewHeight) ? false : true;
    };

    const loadStoriesOnVisibility = () => {
        if (isElementOnScreen(document.getElementById('infiniteLoader'))) {
            setIsVisible(true)
            loadSingleStory();
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        const onscrollListener = () => {
            if (isElementOnScreen(document.getElementById('infiniteLoader')) && !isVisible) {
                setIsVisible(true);
            }
        }
        window.addEventListener('scroll', onscrollListener);

        return () => window.removeEventListener('scroll', onscrollListener);
    }, [])

    useEffect(() => {
        if (!isLoading) {
            loadStoriesOnVisibility();
        }
    }, [isVisible, allStories]);

    return (
        error ? <ErrorMessage message={ error } /> : <InfiniteLoader allStories={ allStories } />
    );
};

const mapStateToProps = state => {
    const isStories = window.location.pathname === '/stories' ? true : false;
    return {
        allStories: isStories ? state.stories.allStories.detail : state.jobs.allJobs.detail,
        isLoading: isStories ? state.stories.allStories.loading : state.jobs.allJobs.loading,
        error: isStories ? state.stories.allStories.error : state.jobs.allJobs.error,
    };
};

const mapDispatchToProps = dispatch => {
    const isStories = window.location.pathname === '/stories' ? true : false;

    return {
        loadSingleStory: () => isStories ? dispatch(loadStory()) : dispatch(loadJob())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllStories);
