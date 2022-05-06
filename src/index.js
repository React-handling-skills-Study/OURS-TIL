import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import {css,Global} from '@emotion/react'


const reset = css `
body{
  background-color:black;
  color:white;
}
 *{
   padding:0;
   margin:0;
 }
li{

  list-style:none;
}
`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <App />
  </React.StrictMode>
);

