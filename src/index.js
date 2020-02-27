import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Provider from './context/GlobalState';

import GlobalStyle from './styles/global';

ReactDOM.render(
  <Provider>
    <App />
    <GlobalStyle />
  </Provider>,
  document.getElementById('root')
);