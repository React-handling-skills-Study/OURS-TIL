import styled from '@emotion/styled/';
import React from 'react';
import DiaryInsert from '../Components/DiaryInsert';
import DiaryList from '../Components/DiaryList';

const Template = styled.div`
border-radius: 5px;
padding: 1rem;
  background-color: #a8a8a8;
  min-width: 412;
  h1{
    padding: 0 1rem;
    text-decoration: 1px solid #1f1414 underline;
    text-underline-position:  under;
    
  }
`

const DiaryTemplate = ({onInsert,diary,onRemoveDiary,onUpdateDiary,setDiary}) => {
  return (
    <Template>
      <h1>나만의 일기장</h1>
      <DiaryInsert onInsert={onInsert} />
      <DiaryList diary={diary} onRemoveDiary={onRemoveDiary} onUpdateDiary={onUpdateDiary} setDiary={setDiary}/>
    </Template>
  );
};

export default DiaryTemplate;