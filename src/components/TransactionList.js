import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useSelector(state => state);

  return (
    <Container>
      <h3>History</h3>
      <ul>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  ul {
    list-style-type: none;
    margin-bottom: var(--double-gap);
  }
`;

export default TransactionList;