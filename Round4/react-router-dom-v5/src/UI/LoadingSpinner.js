import styled from '@emotion/styled';
import React from 'react';

const Spinner = styled.div`
  display:block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid teal;
    border-color: #f14 transparent #f14 transparent;
    animation: spinner 1.2s linear infinite;
  }
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`

const LoadingSpinner = () => {
  return (
    <Spinner>
      
    </Spinner>
  );
};

export default LoadingSpinner;