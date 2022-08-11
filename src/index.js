import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import './index.css';
import Application from './Application';
import store from './process/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Application />
    </Provider>
  </React.StrictMode>
);
