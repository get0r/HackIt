import React, { useEffect } from 'react';
import StoryHolder from '../components/StoryHolder/StoryHolder';
import NavBar from '../components/NavBar/NavBar';
import { loadTopStories } from '../redux/Stories/actions';
import { connect } from 'react-redux';

const Home = ({ topStories, dispatch }) => {
    useEffect(() => {
        dispatch(loadTopStories());
    }, [dispatch]);

    return (
        <div className="w-full">
            <NavBar />
            <section className="w-11/12 px-12 py-4 my-4 mx-auto">
                <StoryHolder topTitle="Top Stories" stories={ topStories } />
                <StoryHolder topTitle="Top Jobs" />
            </section>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        topStories: state.stories.topStories.detail,
        topJobs: state.stories.topJobs.detail,
        storiesLoading: state.stories.topStories.loading,
        jobsLoading: state.stories.topJobs.loading,
    };
};


export default connect(mapStateToProps, null)(Home);

