import styled from '@emotion/styled';
import React from 'react';

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  button {
    background-color: #b14;
    border: 0;
    border-radius: 10px;
    padding: 0.3rem 0.5rem;
    color: white;
    font-size: 14px;
    font-weight: bold;
    box-sizing:border-box;
    cursor: pointer;
    &:hover {
      background-color: aliceblue;
      color:#b32;
      box-sizing:border-box
    }
  }
`;

const button = ({children,onClickSubmitForm}) => {
  return (
    <ButtonWrapper>
    <button onClick={onClickSubmitForm}>
      {children}
    </button>
    </ButtonWrapper>
  );
};

export default button;