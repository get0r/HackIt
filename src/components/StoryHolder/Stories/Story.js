import React from 'react'

const Story = ({ title, time, by, score }) => {
    return (
        <div className="rounded-xl shadow-2xl">
            <img alt="" className="rounded-t-xl w-full h-36 object-cover" src="https://source.unsplash.com/random" />
            <div className="flex flex-col p-7">
                <h2 className="text-xl font-bold mt-1">{ title }</h2>
                <p className="text-base text-gray-600 mt-1">{ time }</p>
                <div className="flex flex-row mt-5 items-center justify-start">
                    <img alt="" className="rounded-2xl mr-2 w-6" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <p className="font-bold text-sm mr-2">{ by }</p>
                    <p className="text-gray-400 text-sm self-end justify-self-end">{ score } score</p>
                </div>
            </div>
        </div>
    );
};

export default Story;
