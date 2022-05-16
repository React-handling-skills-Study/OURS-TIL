import styled from '@emotion/styled';
import React from 'react';


const InputOuter = styled.div`
  top:10px;
  position:relative;
  display:flex;
  padding: 0.2rem;
  left:50%;
  
`
const InputInner = styled.form`
  min-width: 200px;
  right: 10px;
  display:flex;
  flex-direction:column;
  justify-content:flex-end;
  align-items:flex-end;
  border:2px solid #b1aaaa;
  padding: 1rem;
  gap:10px;
  background-color:#b14f14;
  label{
    color: #b1aaff;
  }
  button{
    padding: .2rem;
  }
  input{
    text-align:center;
    min-width: 200px;
    padding: .2rem 1rem;
  }

`

const Input = (props) => {
  return (
    <InputOuter>
    <InputInner>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} />
      <button onClick={props.func}>{props.button.submit}</button>
      <button type={props.button.type} onClick={props.func2}>{props.button.cancel}</button>
    </InputInner>
    </InputOuter>
  );
};

export default Input;