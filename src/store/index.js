import { configureStore, createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    transactions: [],
  },
  reducers: {
    addTransaction(state, { payload }) {
      state.transactions.unshift(payload)
      return state;
    },

    deleteTransaction(state, { payload }) {
      const id = payload;

      const newTransactions = state.transactions.filter(transaction => {
        return transaction.id !== id;
      });

      return {
        ...state,
        transactions: newTransactions
      };
    }
  }
});

export const { addTransaction, deleteTransaction } = rootSlice.actions;

export const store = configureStore({
  reducer: rootSlice.reducer
});
