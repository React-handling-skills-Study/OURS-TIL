import React, { useRef } from 'react';

const Input = (props) => {
  const inputref = useRef()
  return (
    <>
    <label>{props.name}</label>
     <input {...props} ref={inputref} onChange={props.onChange} />
    </>
  );
};

export default Input;