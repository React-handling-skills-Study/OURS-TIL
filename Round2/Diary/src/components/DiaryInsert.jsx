import { useState, useCallback } from 'react';

import { MdAdd } from 'react-icons/md';
import styled from '@emotion/styled';




const Insert = styled.form`
  display: flex;
  background-color: #495057;
`
const Input = styled.input`
  background-color: white;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: black;
  outline: none;
  border: none;
  &::placeholder {
    color: #00483a;
  }
  flex-grow: 1;
`
const Button = styled.button`
  
  outline: none;
  border: 1px solid black;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    background-color: #00483a;
  }
`

const DiaryInsert = ({onInsert}) => {
  const [value, setValue] = useState('')

  const onChange = useCallback(e => {
    setValue(e.target.value);   // 삽입1. setValue 세터함수에 의해 value가 입력한 값으로 바뀜
  }, [])

  const onSubmit = useCallback(  
    e => {              
      onInsert(value);  
      setValue(''); //value 값 초기화

      //submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      //이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value],
  )
  return (                            // 삽입2. onSubmit
      <Insert onSubmit={onSubmit}>        
        <Input         
          placeholder="제목을 작성하세요"
          value={value}
          onChange={onChange}  
        ></Input>
        
        <Button type="submit"><MdAdd/> </Button>
      </Insert>
    
  );
};

export default DiaryInsert;