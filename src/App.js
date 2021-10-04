import React from 'react';
import Routes from './routes/index';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="w-full">
      <NavBar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
