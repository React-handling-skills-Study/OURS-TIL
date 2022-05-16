import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { css,Global } from '@emotion/react';

const reset = css`
body{
  background-color: #9143F5;
  color: #F9F871;
  margin:0;
  padding:0;
}
li{
  list-style:none;
}
a{
  text-decoration:none;
  color:inherit;
}
`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={reset}/>
    <App />
  </React.StrictMode>
);

