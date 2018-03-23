import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './index.css';
import stores from './stores';

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('root')
);

registerServiceWorker();
