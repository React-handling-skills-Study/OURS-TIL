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
  background-color:#ffdfea;
  label{
    color: black;
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
  // label="Father's Input"

  // button={{
  //   submit:"Father's submit",
  //   cancel:"Father's cancel"
  // }}

  // input={{
  //   id:"father-input",
  //   type: 'text',
  //   defaultValue: "father's Input",
  //   placeholder: 'please wrtie any words...'
  // }}

  // func={onInputSubmit}

/////////////////////////////////////////////////////////

  // button={{
  //   submit:"+",
  //   cancel:"-"
  // }}

  // input={{
  //   id:"mothers-input",
  //   min: 0,
  //   max: 10,
  //   type: 'number',
  //   value:count,
  //   placeholder: 'please wrtie any words...'
  // }}

  // func={onClick}

  return (
    <InputOuter>
    <InputInner>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} />  {/* input 객체 통으로 입력 */}
      <button onClick={props.func}>{props.button.submit}</button>
      <button>{props.button.cancel}</button>
    </InputInner>
    </InputOuter>
  );
};

export default Input;