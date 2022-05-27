import styled from '@emotion/styled';
import { TextField,} from '@mui/material';

import React, { useState } from 'react';
import AddForm from '../components/AddForm';

export const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  color: white;
  width:400px;
`;
const AdminTextField = styled(TextField)({
  'label': {
    color: '#fff',
  },
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    color:'#fff',
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});
const ErrorTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color:'#fff',
  },
});


const AddMember = () => {
  const [isAccess, setAccessAdmin] = useState(false);
  const [inputValue, setInputValue] = useState();
  
  const [isIncorrect,setIsIncorrect] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if ( inputValue === '1234') {
      console.log('access!');
      setAccessAdmin(true);
    }
    else{
      console.log('denied')
      console.log(isIncorrect)
      setIsIncorrect(true);
    }
  };
  const onChangeAdminInputValue = (e) => {
    setInputValue(e.target.value);
  }
  
  return (
    <>
      <h1>Add Member</h1>
     {!isAccess && <Form onSubmit={onSubmit}>
        {!isIncorrect
        ? <AdminTextField
          id="outlined-basic"
          label="Admin"
          variant="outlined"
          sx={{ color: 'text.primary' }}
          onChange={onChangeAdminInputValue}
          value={inputValue || ''}
        />
       :<ErrorTextField
          error
          id="outlined-error-helper-text"
          label="Error"
          onChange={onChangeAdminInputValue}
          helperText="Incorrect password."
        />}
      </Form>}
      
      {isAccess && <AddForm />}
      
    </>
  );
};

export default AddMember;
