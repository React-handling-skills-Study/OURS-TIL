import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Global,css} from '@emotion/react'

const reset = css `

*{
  margin: 0;
  padding: 0;
  text-decoration: none;
}

body{
  background-color: black;
}

`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <App />
  </React.StrictMode>
);

