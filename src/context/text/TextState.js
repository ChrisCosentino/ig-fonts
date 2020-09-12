import React, { useReducer } from 'react';

import TextContext from './textContext';
import TextReducer from './textReducer';

import { SET_TEXT } from '../types';

const TextState = (props) => {
  const initialState = {
    text: 'this is a great font generator',
  };

  const [state, dispatch] = useReducer(TextReducer, initialState);

  const setText = (text) => {
    dispatch({
      type: SET_TEXT,
      payload: text,
    });
  };

  return (
    <TextContext.Provider
      value={{
        text: state.text,
        setText,
      }}>
      {props.children}
    </TextContext.Provider>
  );
};

export default TextState;
