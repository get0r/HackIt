import React from 'react';
import StoryHolder from '../components/StoryHolder/StoryHolder';
import NavBar from '../components/NavBar/NavBar';

const Home = () => {
    return (
        <div className="w-full">
            <NavBar />
            <section className="w-11/12 px-12 py-4 my-4 mx-auto">
                <StoryHolder topTitle="Top Stories" />
                <StoryHolder topTitle="Top Jobs" />
            </section>
        </div>
    )
}

export default Home;

