import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import Stories from '../components/StoryHolder/Stories/Stories';
import { connect } from 'react-redux';
import { loadStory } from '../redux/Stories/actions';
import InfiniteLoader from '../components/InfiniteLoader';

const AllStories = ({ allStories, allJobs, isStoryLoading, isJobLoading, dispatch }) => {

    const isStories = window.location.pathname === '/stories' ? true : false;

    const [isVisible, setIsVisible] = useState(false);

    const isElementOnScreen = target => {
        var rect = target.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

        return (rect.top > viewHeight) ? false : true;
    };

    const loadOnVisibility = isStories => {
        if (isElementOnScreen(document.getElementById('infiniteLoader'))) {
            setIsVisible(true)
            if (isStories) {
                dispatch(loadStory());
            }
            else {
                //dispatch(loadJob());
            }
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
        if (isStories) {
            if (!isStoryLoading) {
                loadOnVisibility(true);
            }
        } else {
            if (!isJobLoading) {
                loadOnVisibility(false)
            }
        }
    }, [isVisible, allStories]);

    return (
        <InfiniteLoader allStories={ isStories ? allStories : allJobs } />
    );
};

const mapStateToProps = state => {
    return {
        allStories: state.stories.allStories.detail,
        allJobs: state.jobs.allJobs.detail,
        isStoryLoading: state.stories.allStories.loading,
        isJobLoading: state.jobs.allJobs.loading,
    };
};

export default connect(mapStateToProps, null)(AllStories);
