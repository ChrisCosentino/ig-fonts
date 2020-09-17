import React, { useReducer } from 'react';

import TextContext from './textContext';
import TextReducer from './textReducer';

import { SET_TEXT, SET_SELECTED } from '../types';

const TextState = (props) => {
  const initialState = {
    text: 'Type your own text to see changes...',
    selected: 'Type your own text to see changes...',
  };

  const [state, dispatch] = useReducer(TextReducer, initialState);

  const setText = (text) => {
    dispatch({
      type: SET_TEXT,
      payload: text,
    });
  };

  const setSelected = (text) => {
    dispatch({
      type: SET_SELECTED,
      payload: text,
    });
  };

  return (
    <TextContext.Provider
      value={{
        text: state.text,
        setText,
        selected: state.selected,
        setSelected,
      }}>
      {props.children}
    </TextContext.Provider>
  );
};

export default TextState;
