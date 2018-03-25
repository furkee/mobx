import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './index.css';
import RootStore from './stores/RootStore';

const store = new RootStore();

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  // eslint-disable-next-line
  document.getElementById('root')
);

registerServiceWorker();
