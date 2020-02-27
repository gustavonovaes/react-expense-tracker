import React from 'react';
import { useSelector } from 'react-redux';

function Balance() {
  const { transactions } = useSelector(state => state);

  const totalAmount = transactions.reduce((total, transaction) => {
    return total + transaction.amount;
  }, 0).toFixed(2);

  return <>
    <h4>Your Balance</h4>
    <h1>R$ {totalAmount}</h1>
  </>
}

export default Balance;