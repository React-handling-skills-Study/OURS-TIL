import styled from '@emotion/styled';
import React, { useRef } from 'react';


const Form = styled.form`

max-width:448px;
display:flex; 
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
gap:3px;
label{
  margin-left: 20px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:14px;
  gap:10px;
  input{
    
  }
}
`;
const Button = styled.button`
cursor: pointer;
margin: .3rem 0;
font-size: 14px;
  font-weight:bold;
  background-color: #255ff1;
  padding: .2rem;
  box-sizing:border-box;
  &:hover{
    box-sizing:border-box;
    border: 1px solid #255ff1;
    background-color:transparent;
  }
`

const InputForm = ({onSubmit,idChangeHandler,priceChangeHandler,titleChangeHandler,descriptionChangeHandler}) => {
  const idInput = useRef(null);
  const priceInput = useRef(null);
  const titleInput = useRef(null);
  const descriptionInput = useRef(null);
  return (
    <>
    <Form  onSubmit={onSubmit}>
        <label htmlFor="">
          일련번호:
          <input type="text" ref={idInput} onChange={()=>idChangeHandler(idInput)} />
        </label>
        <label htmlFor="">
          {' '}
          가격:
          <input type="text" ref={priceInput} onChange={()=>priceChangeHandler(priceInput)} />
        </label>
        <label htmlFor="">
          {' '}
          제품명:
          <input type="text" ref={titleInput} onChange={()=>titleChangeHandler(titleInput)} />
        </label>
        <label htmlFor="">
          제품상세:
          <input type="text" ref={descriptionInput} onChange={()=>descriptionChangeHandler(descriptionInput)} />
        </label>
        <Button>제품 생성</Button>
      </Form>
    </>
  );
};

export default InputForm;