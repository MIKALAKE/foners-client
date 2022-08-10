import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import Application from './Application';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>
);
