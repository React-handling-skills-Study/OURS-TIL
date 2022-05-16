import styled from '@emotion/styled/';
import React, { useCallback, useState } from 'react';
import {MdAdd} from 'react-icons/md'

const Form = styled.form`
display:flex;
background:#495057;

input{
  background: transparent;
  outline: none;
  border:none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: #fff;
  flex: 1;
  &::placeholder{
    color: #dee2e6;
    
  }
}
  
  button{
    outline:none;
    border:none;
    background: #868e96;
    padding-left:1rem;
    padding-right: 1rem;
    font-size: 1.5rem;
    display: flex;
    align-items:center;
    cursor: pointer;
    transition: .2s background ease-in;
    &:hover{
      background: #adb5bd;
    }
  }
`
const TodoInsert = ({onInsert}) => {
  const [value,setValue] = useState('');

  const onChange = e => {
    setValue(e.target.value)
  }
  const onSubmit = e => {
    if(value.trim().length < 5){
      e.preventDefault();
      return;
    }
    console.log(value.trim().split('  ').join(''));
    e.preventDefault();
    onInsert(value)
    setValue('');
  }
  return (
    <Form onSubmit={onSubmit}>
      <input type="text" placeholder='할 일을 작성하세요.' value={value} onChange={onChange} />
      <button><MdAdd/></button>
    </Form>
  );
};

export default TodoInsert;