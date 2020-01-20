import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HelloWorld from './HelloWorld';
import PropsValidation from './PropsValidation';
import Events from './Events';
import Translate from './Translate';

ReactDOM.render(
  <>
    <HelloWorld txt="Hello World with ReactJS" />
    <PropsValidation name="Foo Bar" age="teste" />
    <Events />
    <Translate />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
