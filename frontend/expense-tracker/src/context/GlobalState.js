import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRANSACTIONS':
      return { ...state, transactions: action.payload };
    case 'ADD_TRANSACTION':
      return { ...state, transactions: [action.payload, ...state.transactions] };
    case 'DELETE_TRANSACTION':
      return { ...state, transactions: state.transactions.filter(txn => txn._id !== action.payload) };
    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Load transactions
  useEffect(() => {
    axios.get('http://localhost:5000/api/transactions')
      .then(res => dispatch({ type: 'SET_TRANSACTIONS', payload: res.data }))
      .catch(err => console.error(err));
  }, []);

  const addTransaction = async (txn) => {
    const res = await axios.post('http://localhost:5000/api/transactions', txn);
    dispatch({ type: 'ADD_TRANSACTION', payload: res.data });
  };

  const deleteTransaction = async (id) => {
    await axios.delete(`http://localhost:5000/api/transactions/${id}`);
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      addTransaction,
      deleteTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  );
};
