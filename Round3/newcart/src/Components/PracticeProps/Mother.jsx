import React from 'react';
import Input from './Input';

const Mother = ({onClick,count}) => {
  return (
    <>
      <Input
      label="Mother's Input label"
      button={{
        submit:"Mother's plus",
        cancel:"Mother's cancel"
      }}
      input={{
        id:"mothers-input",
        min: 0,
        max: 10,
        type: 'number',
        value: count,
        placeholder: 'please wrtie any words...'
      }}
      func={onClick}
      />
      
    </>
  );
};

export default Mother;