import React from 'react';

import TextState from './context/text/TextState';

import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import Navbar from './components/Navbar';

import './styles.css';

const App = () => {
  return (
    <TextState>
      <div className='container'>
        <Navbar />
        <div className='content-container'>
          <Sidebar />
          <Preview />
        </div>
      </div>
    </TextState>
  );
};

export default App;
