import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducers
import { reducer } from './reducers'

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
