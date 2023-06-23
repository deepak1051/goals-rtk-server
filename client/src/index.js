import React from 'react';
import ReactDOM from 'react-dom/client';

import { store } from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import 'react-loading-skeleton/dist/skeleton.css';

import './index.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
