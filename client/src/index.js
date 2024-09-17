import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SearchProvider } from './context/SearchContext';

ReactDOM.render(
  <SearchProvider>
    <App />
  </SearchProvider>,
  document.getElementById('root')
);
