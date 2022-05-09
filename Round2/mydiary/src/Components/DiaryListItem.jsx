import styled from '@emotion/styled';
import React, { useState } from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from 'react-icons/md'
import DiaryUpdateModal from './DiaryUpdateModal';






const Form = styled.div`
  display:flex;
  align-items:center;
  gap:20px;

  & + &{
    border-top: 1px solid #ccc;
  }
`

const RemoveBox = styled.div`
padding: 0.2rem;
display:flex;
align-items:center;
cursor: pointer;
  svg{
    fill: #b13;
    font-size: 24px;
    
  }
`

const TextBox = styled.div`
  flex:1;
  p{
    font-size:18px;
    text-decoration:1px solid underline;
    color: #543216;
    text-underline-position:under;
  }
  
`
const Button = styled.button`
  padding: 1rem;
  border:0;
  background-color:transparent;
  color: white;
  cursor: pointer;
  &:hover{
    color:#b13;
  }
`
const DiaryListItem = ({daily,onRemoveDiary,setDiary}) => {

  const {id, text} = daily;

  const [isUpdate, setIsUpdate] = useState(false);

  const onUpdateDiary = (id,newContent) => {
    setIsUpdate(prev => !prev);
    setDiary(prev => prev?.map(item => item.id === id ? {...item,text:newContent} : item))
    
  }
  const onModal = () => {
    setIsUpdate(prev => !prev);
  }
  let today = new Date();
  return (
    <>
    {isUpdate && <DiaryUpdateModal onUpdateDiary={onUpdateDiary} daily={daily} setDiary={setDiary} onModal={onModal}/>}
    
    <Form>
      <TextBox><p>{String(today.getFullYear()).substr(2)}년 {today.getMonth() + 1}월 {today.getDate()}일 일기 </p>{text || ""}</TextBox>
      <Button onClick={onModal}>수정하기</Button>
      <RemoveBox onClick={()=>onRemoveDiary(id)}><MdRemoveCircleOutline /></RemoveBox>
      
    </Form>
    </>
  );
};

export default DiaryListItem;