import { persistInLocalStorage } from '../utils';

export default function Reducer(state, { type, payload }) {
  let newState = {};
    
  switch (type) {
    case 'DELETE_TRANSACTION':
      newState = {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== payload)
      }

      persistInLocalStorage(newState);

      return newState;

    case 'ADD_TRANSACTION':
      newState = {
        ...state,
        transactions: [payload, ...state.transactions]
      }

      persistInLocalStorage(newState);

      return newState;

    case 'LOAD_STATE': {
      return {
        ...payload
      }
    }
    default:
      return state;
  }
}