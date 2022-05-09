import styled from '@emotion/styled';
import React from 'react';
import { useState } from 'react';

const DiaryForm = styled.form`
position:relative;
background-color:#a8a8a8;

padding: 1rem;

  textarea{
    
    width: 400px;
    min-height:312px;
    padding:1rem;
    background-color: #1f1414;
    border-radius:10px;
    color:#fff;
    font-size:18px;
  }
  button{
    position:absolute;
    padding: 0.2rem 0.1rem;
    bottom:22px;
    right:18px;
    color:white;
    background-color:transparent;
    font-size: 18px;
    transition: .4s;
    border-radius: 15px 0 5px 0;
    &:hover{
      background-color:#fff;
      color: #1f1414;
      font-weight:bold;
    }
  }
`

const DiaryInsert = ({onInsert}) => {
  const [value,setValue] = useState();

  const onChange = ({target}) =>{
    setValue(target.value);
    
  }
  const onSubmit = e =>{
    if(!value.trim() || value.length < 10){
      setValue("10글자 이상 입력해주세요.");
      e.preventDefault();
      return;
    }else{
      e.preventDefault();
      onInsert(value);
      setValue('');
    }
    
  }
  return (
    <DiaryForm onSubmit={onSubmit}>
      <textarea cols="30" rows="10" value={value} onChange={onChange}></textarea>
      <button>기록</button>
    </DiaryForm>
  );
};

export default DiaryInsert;