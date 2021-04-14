import React from 'react';
import ReactDOM from 'react-dom';
// Components imports
import App from 'components/App';
// Redux Setup
import { createStore } from 'redux';
import reducers from 'reducers';
import { Provider } from 'react-redux';

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ latency: 0 })
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
