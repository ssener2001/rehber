import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
var KISILER = require('./rehber/rehber.json'); // forward slashes will depend on the file location
//var KISILER= json.parse(KISILER1);
//console.log(KISILER);
 
ReactDOM.render(
  <App kisiler={KISILER} />,
  document.getElementById('root')
);
