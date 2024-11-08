import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/global.css';
import { ItemsProvider } from './Components/Context/ItemsContext';


ReactDOM.render(
  <ItemsProvider>
    <App />
  </ItemsProvider>,
  document.getElementById('root')
);
