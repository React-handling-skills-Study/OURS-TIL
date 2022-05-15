import React from 'react';
import Input from './Input';

const Father = ({onInputSubmit}) => {
  return (
    <>
      <Input
      
      label="Father's Input label"
      button={{
        submit:"Father's submit",
        cancel:"Father's cancel"
      }}
      input={{
        id:"father-input",
        type: 'text',
        defaultValue: "father's Input",
        placeholder: 'please wrtie any words...'
      }}
      func={onInputSubmit}
      />
    </>
  );
};

export default Father;