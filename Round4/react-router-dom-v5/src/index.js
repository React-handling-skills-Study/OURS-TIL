import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Global,css} from '@emotion/react'

const reset = css`
body{
background-color:#114492;
color:white;
}
*{
  margin:0;
  padding:0;
}
a{
  color:white;
  text-decoration:none;
}
li{
  list-style-type:none;
}
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Global styles={reset} />
    <App />
    
    </BrowserRouter>
  </React.StrictMode>
);
