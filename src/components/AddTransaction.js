import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { generateID } from '../utils';
import { addTransaction } from '../store';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  function updateText(e) {
    setText(e.target.value);
  }

  function updateAmount(e) {
    setAmount(e.target.value);
  }

  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      id: generateID(),
      text,
      amount: Number(amount)
    };

    dispatch(addTransaction(newTransaction));
  }

  return (
    <Container>
      <h3>Add new transaction</h3>

      <form onSubmit={onSubmit} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" value={text} onChange={updateText} autoFocus={true} placeholder="Enter text..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount
          <small>(negative - expense, positive - income)</small></label>
          <input type="number" step="any" id="amount" value={amount} onChange={updateAmount} placeholder="Enter amount..." />
        </div>

        <button type="submit" className="btn">Add transaction</button>
      </form>
    </Container>
  )
}

const Container = styled.div`
  form {
    .form-control {
      &:not(:first-child) {
        margin: var(--gap) 0;
      }
    }

    label {
      display: inline-block;

      small { 
        display: block;
        color: #707070;
      }
    }

    input {
      margin-top: var(--gap);
    }

    input[type='text'],
    input[type='number'] {
      border: 1px solid #dedede;
      border-radius: 2px;
      display: block;
      
      padding: var(--gap);
      width: 100%;
    } 
  }
`;

export default AddTransaction;