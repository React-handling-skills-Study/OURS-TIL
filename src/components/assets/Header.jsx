import styled from '@emotion/styled';
import React from 'react';



const HeaderContainer = styled.header`
padding: 1rem;
  h1{
    border-bottom: 2px solid;
    font-size: 32px;
    color:white;
    
  }

`

const Header = () => {
  return (
    <HeaderContainer>
        <h1>회원가입</h1>
      </HeaderContainer>
  );
};

export default Header;