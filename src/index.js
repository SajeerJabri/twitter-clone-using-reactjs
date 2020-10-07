import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ServiceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
ServiceWorker();

