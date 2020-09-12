import React, { useContext } from 'react';
import json from '../alphabets.json';
import Font from './Font';

import TextContext from '../context/text/textContext';

const Sidebar = () => {
  const textContext = useContext(TextContext);

  const handleChange = (e) => {
    textContext.setText(e.target.value);
  };

  return (
    <div className='sidebar'>
      <div className='edit-container'>
        <div className='subtitle'>EDIT TEXT</div>
        <textarea
          onChange={handleChange}
          className='text-edit'
          rows='4'
          placeholder='Enter text here...'
        />
      </div>
      <div className='meta'>Click to preview</div>
      <div className='fonts-container'>
        {json.alphabets.map((element, index) => (
          <Font element={element} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
