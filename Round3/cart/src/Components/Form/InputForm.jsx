import styled from '@emotion/styled';
import React, { useRef } from 'react';


const Form = styled.form`
position:relative;
left:5%;
margin: 0 auto;
max-width:448px;
min-width:min-content;
display:flex; 
flex-direction:column;
justify-content:flex-end;
align-items:flex-end;
gap:3px;
label{
  width:80%;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  gap:50px;
  margin-left: 20px;
  text-align:left;
  font-size:14px;
  border-bottom: 1px solid #FE0FBF;
  input{
    min-width:220px;
    height:40px;
    border-radius:10px;
    padding: 0.5rem;
    box-sizing:border-box;
    border:0;
    margin:0.5rem 0.2rem;
  }
  input:focus{
    outline: 3px solid #FE0FBF;
  }
  input::placeholder{
    color:#FF8A5A;
  }
}
`;
const Button = styled.button`
cursor: pointer;
margin: .3rem 0;
width:80%;
font-size: 14px;
  font-weight:bold;
  border: 1px solid #009A7E;
  padding: .2rem;
  box-sizing:border-box;
  border-radius:0.2rem;
  &:hover{
    box-sizing:border-box;
    border: 1px solid #255ff1;
    background-color:transparent;
    color:white;
  }
`

const InputForm = ({onSubmit,idChangeHandler,priceChangeHandler,titleChangeHandler,descriptionChangeHandler}) => {
  const idInput = useRef(null);
  const priceInput = useRef(null);
  const titleInput = useRef(null);
  const descriptionInput = useRef(null);


  const clearInput = () =>{
    idInput.current.value = ''
    priceInput.current.value = ''
    titleInput.current.value = ''
    descriptionInput.current.value = ''
    idInput.current.focus()
  }
  return (
    <>
    <Form  onSubmit={(event)=>onSubmit(event,clearInput)}>
        <label htmlFor="">
          일련번호:
          <input type="text" ref={idInput} maxLength={3} onChange={()=>idChangeHandler(idInput)} placeholder="only has three word in ID Input"   />
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