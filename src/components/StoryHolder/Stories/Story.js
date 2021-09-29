import React from 'react'
import image from '../../../assets/user.png';

const Story = ({ story }) => {
    const { title, url, time, by, score } = story;

    const handleStoryClick = e => {
        window.open(url, '_blank');
    }
    return (
        <div className="cursor-pointer hover:shadow-xl rounded-xl shadow-2xl" onClick={ handleStoryClick }>
            <img alt="" className="rounded-t-xl w-full h-36 object-cover" src={ `https://source.unsplash.com/random?sig=${Math.floor(Math.random() * 100)}` } />
            <div className="flex flex-col px-4 py-2 justify-between">
                <h2 className="text-sm font-bold mt-1">{ title }</h2>
                <p className="text-sm text-gray-600 mt-1 font-mono">{ new Date(time * 1000).toUTCString().slice(0, 11) }</p>
                <div className="flex flex-row mt-5 items-center justify-start justify-self-end">
                    <img alt="" className="rounded-2xl mr-2 w-6" src={ image } />
                    <p className="font-bold text-sm mr-2">{ by }</p>
                    <p className="text-gray-400 text-xs justify-self-end">{ score } score</p>
                </div>
            </div>
        </div>
    );
};

export default Story;
