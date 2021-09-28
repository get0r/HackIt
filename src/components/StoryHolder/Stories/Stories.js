import React from 'react';
import Story from './Story';

const Stories = () => {
    const stories = [1, 2, 3, 4];

    const renderStories = () => {
        return stories.map(story => (
            <Story key={ story.id } story={ story } />
        ));
    };

    return (
        <div className="grid grid-cols-4 w-full gap-4">
            {
                renderStories()
            }
        </div>
    );
};

export default Stories;
