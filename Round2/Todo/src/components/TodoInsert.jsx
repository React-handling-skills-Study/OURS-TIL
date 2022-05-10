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

const TodoInsert = ({onInsert, todo}) => {
  const [value, setValue] = useState('')



  const onChange = useCallback(e => {
    setValue(e.target.value);   // 삽입1. setValue 세터함수에 의해 value가 입력한 값으로 바뀜
  }, [])


  
  
  const onSubmit = useCallback(  
    e => {
                    // 삽입3. App.jsx에 있는 onInsert 함수는 todo객체를 새로 만들어서 todos 배열에 넣는 역할을 하고
      onInsert(value);  // 인수로 value를 전달하면 todo 객체의 text가 vaule가 됨
      setValue(''); //value 값 초기화

      //submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      //이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value],
  )

  
    return (                            
      <Insert onSubmit={onSubmit}>        
        <Input 
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}  
        />
          
        <Button type="submit"><MdAdd/> </Button>
      </Insert>
    
  );
  

  
  
    
  }




export default TodoInsert;