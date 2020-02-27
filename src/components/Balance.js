import React from 'react';

import useGlobalState from '../hooks/useGlobalState';

function Balance() {
  const { transactions } = useGlobalState();

  const totalAmount = transactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0).toFixed(2);

  return <>
    <h4>Your Balance</h4>
    <h1>R$ {totalAmount}</h1>
  </>
}

export default Balance;