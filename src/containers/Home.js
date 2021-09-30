import React, { useEffect } from 'react';
import StoryHolder from '../components/StoryHolder/StoryHolder';
import { connect } from 'react-redux';
import { loadTopStories } from '../redux/Stories/actions';
import { loadTopJobs } from '../redux/Jobs/actions';

const Home = ({ topStories, topJobs, storiesLoading, jobsLoading, storiesError, jobsError, dispatch }) => {
    useEffect(() => {
        if (topStories.length === 0) {
            console.log('Now Dispatching top stories', topStories.length);
            dispatch(loadTopStories());
        }
        if (topJobs.length === 0)
            dispatch(loadTopJobs())
    }, [dispatch]);

    return (
        <section className="w-11/12 px-2 py-4 my-4 mx-auto">
            <StoryHolder
                topTitle="Top Stories"
                isStories
                stories={ topStories }
                isLoading={ storiesLoading }
                error={ storiesError } />
            <StoryHolder
                topTitle="Top Jobs"
                stories={ topJobs }
                isLoading={ jobsLoading }
                error={ jobsError } />
        </section>
    );
};

const mapStateToProps = state => {
    return {
        topStories: state.stories.topStories.detail,
        topJobs: state.jobs.topJobs.detail,
        storiesLoading: state.stories.topStories.loading,
        jobsLoading: state.jobs.topJobs.loading,
        storiesError: state.stories.topStories.error,
        jobsError: state.jobs.topJobs.error,
    };
};


export default connect(mapStateToProps, null)(Home);

