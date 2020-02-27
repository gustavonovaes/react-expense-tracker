import React, { createContext, useReducer, useEffect } from 'react';
import Reducer from './Reducer';

import { loadFromLocalStorage } from '../utils';

// Initial state
const initialState = {
  transactions: []
}

// Create context
export const Context = createContext(initialState);


// Provide component
export default ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    const state = loadFromLocalStorage();
    if (Object.entries(state).length) {
      dispatch({ type: 'LOAD_STATE', payload: state });
    }
  }, [])

  const api = {
    transactions: state.transactions,

    deleteTransaction(id) {
      dispatch({ type: 'DELETE_TRANSACTION', payload: id });
    },

    addTransaction(transaction) {
      dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
    }
  };

  return <Context.Provider value={api}>
    {children}
  </Context.Provider>
};