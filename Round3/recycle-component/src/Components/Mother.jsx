import React from 'react';
import Input from '../UI/Input';

const Mother = ({onClick,count,handleMinus}) => {
  return (
    <>
      <Input
      label="Mother's Input"
      button={{
        submit:"plus",
        cancel:"minus"
      }}
      input={{
        id:"mothers-input",
        min: 0,
        max: 10,
        type: 'number',
        value:count,
        placeholder: 'please wrtie any words...'
      }}
      func={onClick}
      func2={handleMinus}
      />
      
    </>
  );
};

export default Mother;