import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.scss';

import { App } from './App.jsx'
import { Provider } from 'react-redux';
import store from './store';

const root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  // Provider подключает redux
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  // </React.StrictMode>,
)
