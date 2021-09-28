import React from 'react';
import NavBar from './components/NavBar/NavBar';
import StoryHolder from './containers/StoryHolder/StoryHolder';

const App = () => {
  return (
    <div className="w-full">
      <NavBar />
      <div className="w-11/12 px-12 py-4 my-4 mx-auto">
        <StoryHolder />
      </div>
    </div>
  );
};

export default App;
