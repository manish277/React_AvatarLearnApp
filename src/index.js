import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Demo from './Demo'
import Avtar from './Avtar'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Avtar/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
