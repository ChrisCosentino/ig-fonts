import React, { useContext, useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import TextContext from '../context/text/textContext';

const Font = ({ element }) => {
  const [copied, setCopied] = useState(false);
  const textContext = useContext(TextContext);

  useEffect(() => {
    setTimeout(function () {
      console.log('hi');
    }, 5000);
    setCopied(false);
  }, [copied]);

  const getText = () => {
    const letters = textContext.text.split('');
    let uni = '';
    letters.forEach((el) => {
      uni += element.list[el.charCodeAt(0)];
    });
    return uni;
  };

  return (
    <div className='font-container'>
      <div className='font-name'>{element.name}</div>

      <div className='font-text'>{getText()}</div>

      <CopyToClipboard
        text={getText()}
        onCopy={() => {
          setCopied(true);
        }}>
        {copied ? (
          <button className='btn copied'>Copied</button>
        ) : (
          <button className='btn'>Copy</button>
        )}
      </CopyToClipboard>
    </div>
  );
};

export default Font;
