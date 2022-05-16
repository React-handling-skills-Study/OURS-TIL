import styled from '@emotion/styled';
import React, { useState } from 'react';




const Form = styled.form`
display:flex;
flex-direction:column;
align-items:flex-end;
gap:3px;
label{
  font-size:14px;
  input{
    padding: .2rem;
    margin:.3rem 0 .3rem .3rem;
    
    border-radius:10px;
    border: 0;
  }
}

`
const ButtonWrapper = styled.div`

display:flex;
justify-content:center;
align-items:center;
gap:3px;
button{
  cursor: pointer;
  border-radius:10px;
  padding: .2rem;
  background-color:transparent;
  box-sizing:border-box;
}
button:first-of-type{
  background-color:#b9ffff;
  font-weight:bold;
  &:hover{
    border: 1px solid #b9ffff;
    background-color:#fff;
    color: red;
  }
}
button:last-of-type{
  background-color:#b14;
  color:white;
  &:hover{
    background-color:white;
    color:#b14;
    border:#b14;
  }
}
`

const Modal = ({id,price,description,title,onModalHandler,updateProductHandler}) => {


  const [newText,setNewText] = useState({
    title,
    price,
    description
  })
  const changeNewTextHandler = ({target}) => {
    setNewText({
      ...newText,
      [target.name]: target.value})
  }
  
  return (
        <Form onSubmit={()=>updateProductHandler(id,newText)}>
        <label htmlFor="title">이름변경<input name='title'  type="text" onChange={changeNewTextHandler} value={newText.title} /></label>
        <label htmlFor="price">가격변경<input name='price'  type="text" onChange={changeNewTextHandler} value={newText.price} /></label>
        <label htmlFor="description">상세정보 변경<input name='description' type="text" onChange={changeNewTextHandler} value={newText.description} /></label>
          <ButtonWrapper>
        <button type='submit'>완료</button>
        <button type='button' onClick={onModalHandler}>취소</button>
        </ButtonWrapper>
        </Form>
  );
};

export default Modal;