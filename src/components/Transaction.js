import React from 'react';
import styled from 'styled-components';

import useGlobalState from '../hooks/useGlobalState';

function Transaction({ id, text, amount }) {
  const isNegative = amount < 0;
  const sign = isNegative ? '-' : '+';
  const value = Math.abs(amount);

  const { deleteTransaction } = useGlobalState();

  function handleDelete() {
    deleteTransaction(id)
  }

  return (
    <Container negative={isNegative}>
      {text} <span>{sign} R$ {value}</span>
      <button onClick={handleDelete}>
        <svg className="close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z" /></svg>
        <svg className="open" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 8v16h18v-16h-18zm5 12c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-8c0-.552.448-1 1-1s1 .448 1 1v8zm4-15.375l-.409 1.958-19.591-4.099.409-1.958 5.528 1.099c.881.185 1.82-.742 2.004-1.625l5.204 1.086c-.184.882.307 2.107 1.189 2.291l5.666 1.248z" /></svg>
      </button>
    </Container>
  )
}

const Container = styled.li`
  background-color: var(--background-color-highlight);
  box-shadow: var(--box-shadow);

  display: flex;
  justify-content: space-between;
  position: relative;
  padding: var(--gap);

  border-right: var(--half-gap) solid;
  border-color: ${props => props.negative ? 'var(--color-expense)' : 'var(--color-income)'};

  &:hover {
    button {
      opacity: 0.5;
    }
  }

  button {
    background-color: transparent;

    border: 0;
    height: 100%;
    padding: var(--gap) var(--double-gap);

    position: absolute;
    top: 50%;
    left: 0;
    
    transform: translate(-100%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;

    &:hover {
      svg.close {
        display: none;
      }

      svg.open {
        display: inline-block;
      }

      opacity: 1;
    }

    svg {
      fill: var(--color-danger);
      display: none;
    }  

    svg.close {
      display: inline-block;
    }
  }
`;

export default Transaction;