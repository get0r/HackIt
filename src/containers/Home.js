import React, { useEffect } from 'react';
import StoryHolder from '../components/StoryHolder/StoryHolder';
import NavBar from '../components/NavBar/NavBar';
import { connect } from 'react-redux';
import { loadTopStories } from '../redux/Stories/actions';
import { loadTopJobs } from '../redux/Jobs/actions';

const Home = ({ topStories, topJobs, storiesLoading, jobsLoading, dispatch }) => {
    useEffect(() => {
        dispatch(loadTopStories());
        dispatch(loadTopJobs())
    }, [dispatch]);

    return (
        <div className="w-full">
            <NavBar />
            <section className="w-11/12 px-2 py-4 my-4 mx-auto">
                <StoryHolder topTitle="Top Stories" stories={ topStories } isLoading={ storiesLoading } />
                <StoryHolder topTitle="Top Jobs" stories={ topJobs } isLoading={ jobsLoading } />
            </section>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        topStories: state.stories.topStories.detail,
        topJobs: state.jobs.topJobs.detail,
        storiesLoading: state.stories.topStories.loading,
        jobsLoading: state.jobs.topJobs.loading,
    };
};


export default connect(mapStateToProps, null)(Home);

