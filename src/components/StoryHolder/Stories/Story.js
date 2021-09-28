import React from 'react'

const Story = (props) => {
    return (
        <div className="rounded-xl shadow-2xl">
            <img alt="" class="rounded-t-xl w-full h-36 object-cover" src="https://source.unsplash.com/random" />
            <div class="flex flex-col p-7">
                <h2 class="text-xl font-bold mt-1">LORE ghsjgd dsghdsjghds dsghdsjghskdg dsjghdsjkgb</h2>
                <p class="text-base text-gray-600 mt-1">Date</p>
                <div class="flex flex-row mt-5 items-center justify-start">
                    <img alt="" class="rounded-2xl mr-2 w-6" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    <p class="font-bold text-sm mr-2">Sami</p>
                    <p class="text-gray-400 text-sm self-end justify-self-end">score</p>
                </div>
            </div>
        </div>
    );
};

export default Story;
