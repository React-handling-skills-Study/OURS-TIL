import styled from '@emotion/styled';
import React from 'react';


const Wrapper = styled.div`
  max-width: 560px;
  margin: 10rem auto;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
border-radius: 20px;
border: 3px solid gold;
padding: 2rem 0rem ;
`



const SignupLayout = ({children}) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

export default SignupLayout;