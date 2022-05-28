import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {Global,css} from '@emotion/react'


import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#aaa',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});



const reset = css`
body{
background-color:#0A1929;
color:#ccc;
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
