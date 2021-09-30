import React from 'react';
import Routes from './routes/index';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="w-full">
      <NavBar />
      <Routes />
    </div>
  );
};

export default App;
