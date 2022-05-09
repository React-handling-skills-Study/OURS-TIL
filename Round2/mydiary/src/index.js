import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  Global,
  css
} from '@emotion/react'



const reset = css /* css */ `

*{
padding:0;
margin:0;
}
a{
  text-decoration:none;
  color:inherit;
}
li{
  list-style-type: none;
}

body{
  word-break:break-all;
  background-color: #222;
  color: #fff;
}

`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <React.StrictMode >
  <Global styles = {reset}/>
  <App />
  </React.StrictMode>
);