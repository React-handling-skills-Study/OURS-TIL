import styled from '@emotion/styled';
import React, { forwardRef } from 'react';




const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  /* 기존 Sass의 문법도 사용이 가능합니다! */
  input{
  padding: 0.5rem 1rem;
  border:0;
  border-radius: 5px;
  background-color:#b14;
  box-shadow: 2px 2px 3px #ccc;
  color:white;
  &::placeholder{
    color: white;
  }
  &:focus{
    border:0;
    background-color:#ccc;
    outline: 1px solid #b14;
    box-shadow:#b14;
  }
}  
    
`;

const FocusInput = styled.input`
  &:focus {
    border: 0;
    outline: 1px solid orangered;
  }
`;

const Form = forwardRef(({inputValue,handleInputValue,handleSubmitForm},focusInput) => {
  
  return (
    <InputWrapper>
    <FocusInput
      type="text"
      name="username"
      value={inputValue.username || ''}
      placeholder="사용자명"
      onChange={handleInputValue}
      ref={focusInput}
    />
    <input
      type="email"
      name="email"
      value={inputValue.email || ''}
      placeholder="이메일"
      onChange={handleInputValue}
    />
    <input
      type="address"
      name="id"
      value={inputValue.id || ''}
      placeholder="아이디"
      onChange={handleInputValue}
    />
    <input
      type="password"
      name="password"
      value={inputValue.password || ''}
      placeholder="비밀번호"
      onChange={handleInputValue}
      
      
    />
    <input
      type="password"
      name="passwordConfirmation"
      placeholder="비밀번호재확인"
      onChange={handleInputValue}
      value={inputValue.passwordConfirmation || ''}
      onKeyUp={handleSubmitForm}
    />
  </InputWrapper>
  );
});

export default Form;