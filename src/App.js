import React from 'react';
import styled from 'styled-components';

import Balance from './components/Balance';
import Status from './components/Status';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';


function App() {
  return (
    <Container>
      <h1>Expense tracker</h1>

      <Balance />

      <Status />

      <TransactionList />

      <AddTransaction />
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: var(--double-gap);

  @media (min-width: 700px)  {
    margin: var(--double-gap) auto;
    width: 50vw;
    max-width: var(--max-width);
  }
`

export default App;
