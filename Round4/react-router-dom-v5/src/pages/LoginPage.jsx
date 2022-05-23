import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';


const Wrapper = styled.div`
  border: 1px solid ;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  h1{
    text-align:center;
    padding: 1rem 0;
    border-bottom: 1px solid #fff;
  }
`

const Form = styled.form`
  padding: 2rem;
  display:flex;
  flex-direction:column;
  justify-content:flex-start;
  
  gap:30px;
  label{
    display:flex;
    gap: 10px;
    justify-content: flex-end;
    align-items:center;
    
    width:100%;
    text-align:left;
    
    input{
    padding: .5rem;
  }
  }
  
  button{
    width: 100%;
    padding: .2rem .5rem;
    
  }
`



const LoginPage = ({onLogin}) => {
  const history = useHistory()

  const onSubmitLogin = (e) => {
    e.preventDefault();
    onLogin();
    history.push("/")
  }

  return (
    <Wrapper>
    <h1>LOG - IN </h1>
      <Form onSubmit={onSubmitLogin}>
        <label htmlFor="">ID{" "}
      <input  type="text" />
      </label>
      <label htmlFor="">PASSWORD{" "}
      <input type="password" />
      </label>
      <button>Log-In</button>
      </Form>
    </Wrapper>
  );
};

export default LoginPage;