import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
`

const BusinessArea = () => {
  return (
    <Wrapper>
      Our company's business areas are:
    </Wrapper>
  );
};

export default BusinessArea;