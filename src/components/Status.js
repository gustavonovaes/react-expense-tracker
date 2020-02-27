import React from 'react';
import styled from 'styled-components'

import useGlobalState from '../hooks/useGlobalState';

function Status() {
  const { transactions } = useGlobalState();

  const incomes = transactions.filter(t => t.amount > 0);
  const expenses = transactions.filter(t => t.amount < 0);

  const totalIncomes = incomes.reduce((t, v) => t + v.amount, 0).toFixed(2);
  const totalExpenses = Math.abs(expenses.reduce((t, v) => t + v.amount, 0)).toFixed(2);

  return (
    <Container>
      <div>
        <p>Income</p>
        <p className="money plus">+R$ {totalIncomes}</p>
      </div>

      <div>
        <p>Expense</p>
        <p className="money minus">-R$ {totalExpenses}</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-color: var(--background-color-highlight);
  box-shadow: var(--box-shadow);

  display: flex;
  justify-content: space-between;

  margin: var(--double-gap) 0;

  > div {
    flex: 1;
    text-align: center;
    padding: var(--double-gap) 0;


    &:first-of-type {
      border-right: 1px solid var(--border-color);
    }
  }

  .money {
    font-size: 1.25em;
    letter-spacing: .05em;
  }

  .plus {
    color: var(--color-income);
  }

  .minus { 
    color: var(--color-expense);
  }
`;

export default Status;
