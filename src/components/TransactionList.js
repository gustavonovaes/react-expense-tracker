import React from 'react'
import styled from 'styled-components';

import Transaction from "./Transaction";
import useGlobalState from '../hooks/useGlobalState';

function TransactionList() {

  const { transactions } = useGlobalState();
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