import React from 'react';

import TextState from './context/text/TextState';

import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import Navbar from './components/Navbar';

import './styles.css';
import Footer from './components/Footer';
import Ads from './components/Ads';

const App = () => {
  return (
    <TextState>
      <div className='container'>
        <Navbar />
        <div className='content-container'>
          <Sidebar />
          <Preview />
        </div>
        <Ads />
        <Footer />
      </div>
    </TextState>
  );
};

export default App;
