import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Demo from './Demo'
import Avtar from './Avtar'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    (
      <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" exact component={Avtar} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
    )
    {/* <Avtar /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
