import React from 'react';
import Input from '../UI/Input';

const Father = ({onInputSubmit,handleCancle}) => {
  return (
    <>
      <Input
      
      label="Father's Input"
      button={{
        submit:"Father's submit",
        cancel:"Father's cancel",
        type:'button'
      }}
      input={{
        id:"father-input",
        type: 'text',
        defaultValue: "father's Input",
        placeholder: 'please wrtie any words...'
      }}
      func={onInputSubmit}
      func2={handleCancle}
      />
    </>
  );
};

export default Father;