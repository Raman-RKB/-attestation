import React from 'react';
import { createRoot } from "react-dom/client";
import Main from './pages/main/main';
import { Provider } from 'react-redux';
import store from './Store/store';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <Main />
      </Provider>
  </React.StrictMode>
);