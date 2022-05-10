import styled from '@emotion/styled';

import React from 'react';

const Template = styled.div`
  width: 512px;
  margin: 6rem auto 0;
  border-radius: 2px;
  overflow: hidden;

`
const Title = styled.div`
  background-color: #00483a;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`
const Content = styled.div`
 
 background-color: white;
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