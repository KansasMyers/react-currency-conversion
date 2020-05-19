import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import CurrencyConverter from './components/CurrencyConverter';

import 'bootstrap/dist/css/bootstrap.min.css';  

ReactDOM.render(
  <React.StrictMode>
    <CurrencyConverter />
  </React.StrictMode>,
  document.getElementById('root')
);