import styled from '@emotion/styled';
import React from 'react';

const Template = styled.div`
  width: 512px;
  margin-left:auto;
  margin-right:auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow:hidden;
`
const Title = styled.h1`
  background: #22b8cf;
  color:white;
  height:4rem;
  font-size:1.5rem;
  display:flex;
  align-items:center;
  justify-content:center;
`
const Content = styled.div`
  background: #fff;
`

const TodoTemplate = ({children}) => {
  return (
    <Template>
  <Title>일정관리</Title>      
  <Content>{children}</Content>
    </Template>
  );
};

export default TodoTemplate;