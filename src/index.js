import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor, store} from './store';

ReactDOM.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);
