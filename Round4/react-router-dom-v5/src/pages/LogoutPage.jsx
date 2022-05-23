import styled from '@emotion/styled';
import React from 'react';



const Warpper = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  button{
    padding: 2rem;
    font-size: 16px;
    font-weight:bold;
    background-color:#f95;
    color:black;
    cursor: pointer;
    &:hover{
      color:#f95;
      border: 1px solid #f95;
      background-color:#fff;
    }
    }
`

const LogoutPage = ({onLogout}) => {


  return (
    <Warpper>
      <button onClick={onLogout}>LOG-OUT</button>
    </Warpper>
  );
};

export default LogoutPage;