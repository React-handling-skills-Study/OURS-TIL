import styled from '@emotion/styled';
import React, { useState } from 'react';

const Form = styled.div`
padding: 3rem;
border: 3px solid white;
background-color:#c8c8c8;
border-radius:5px;
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  z-index:9;
  textarea{
    border-radius:5px;
    box-sizing:border-box;
    padding: 1rem;
    width: 412px;
    &:focus{
      outline: 2px solid #008080;
    }
  }
`

const Title = styled.div`
  padding: 0.5rem 0;
  font-size: 24px;
  color: #ff1;
  box-sizing:border-box;
`

const ButtonWrapper = styled.div`
  position:absolute;
  display:flex;
  align-items:center;
  justify-content:center;
  right: 45px;
`

const Button = styled.button`
  padding: 0.2rem;
  cursor: pointer;
  background-color:transparent;
  border: 0;

`


const DiaryUpdateModal = ({onUpdateDiary,daily,onModal}) => {
  const {id} = daily;
  const [newContent,setNewContent] = useState("")
  
  const changeNewValue = ({target}) =>{
    setNewContent(target.value);
  }

  return (
    <Form >
      <Title>일기 수정하기</Title>
      <textarea cols="30" rows="10" value={newContent} onChange={changeNewValue}></textarea>
      <ButtonWrapper>
      <Button onClick={()=>onUpdateDiary(id,newContent)} >확인</Button>
      <Button onClick={onModal} >취소</Button>
      </ButtonWrapper>
    </Form>
  );
};

export default DiaryUpdateModal;