import React, { useEffect, useRef, useState } from 'react';
import { TextField,Button } from '@mui/material/';
import useHttp from '../hooks/use-http';
import AddMember from '../pages/AddMember';
import styled from '@emotion/styled';
import { addMember } from '../lib/api';
import uuid from 'react-uuid'
import { Prompt } from 'react-router-dom';
const StyledButton = styled(Button)({
  margin: '1rem 0',
  boxShadow: 'none',
  textTransform: 'none',
  color:'white',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',

  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
const Form = styled.form`
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  color: white;
  width:500px;
  margin: 3rem 0;
  padding: 3rem 0;
  height:440px;
  gap:20px;
`
const StyledTextField = styled(TextField)({
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
      borderColor: 'teal',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
    
  },
});
const DescriptionTextField = styled(TextField)({
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
      borderColor: 'teal',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    }
  }
})
const AddForm = () => {
  const {sendRequest, status, error} = useHttp(addMember);
  
  const [userList,setUserList] = useState([]);
  const [userRegister,setUserRegister] = useState({
    name:'',
    address:'',
    email:'',
    phone:'',
    branch:'',
    'entering-date':''
  })
  
  const {id} = userRegister;
  
  useEffect(()=>{
    setUserRegister({...userRegister})
    console.log(userList);
  },[userList])

  const putUserInfoHandler = (e) => {
    setUserRegister(prev => ({
      ...prev,
      [e.target.name]:e.target.value,
    }))
  }
  const onUserRegister = (e) => {
    e.preventDefault()
    setUserList(prev => [...prev,userRegister])
    sendRequest(userRegister)
  }
  const onFocusForm = () => {
    setIsEntering(true);
  }
  const onFinishEntering = () => {
    setIsEntering(false);
  }
  const [isEntering,setIsEntering] = useState(false)
  
  return (
    <>
    <Prompt when={isEntering} message={(location) => 'Are you sure want to leave this page? '} />
    <Form onFocus={onFocusForm} onSubmit={onUserRegister}>
      <StyledTextField name='name' onChange={putUserInfoHandler} value={userRegister.name} id="outlined-basic" label="Name" variant="outlined" helperText='WRITE FULLNAME' FormHelperTextProps={{ style: { color: '#fff' }}} />
      <StyledTextField name='address' onChange={putUserInfoHandler} value={userRegister.address} id="outlined-basic" label="Address" variant="outlined" helperText='Nation, Region, City' FormHelperTextProps={{ style: { color: '#fff' }}} />
      <StyledTextField name='email' onChange={putUserInfoHandler} value={userRegister.email} id="outlined-basic" label="e-mail" variant="outlined" />
      <StyledTextField name='phone' onChange={putUserInfoHandler} value={userRegister.phone} id="outlined-basic" label="Phone" variant="outlined" />
      <StyledTextField name='branch' onChange={putUserInfoHandler} value={userRegister.branch} id="outlined-basic" label="Branch" variant="outlined" />
      <StyledTextField name='entering-date' onChange={putUserInfoHandler} value={userRegister['entering-date']} id="outlined-basic" label="Entering Date" variant="outlined" />
      <DescriptionTextField
      name='description'
          id="outlined-multiline-static"
          label="Detail"
          multiline
          rows={4}
          onChange={putUserInfoHandler}
          defaultValue="Fill in detailed information"
        />
      <StyledButton onClick={onFinishEntering} type='submit' variant="outlined">Submit</StyledButton>
    </Form>
    </>
  );
};

export default AddForm;


// Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae cupiditate a provident necessitatibus soluta esse pariatur! Nam eius qui optio illum excepturi corporis odio pariatur dolore aperiam commodi cumque officiis, tempora eum molestias, consectetur dolorem praesentium aspernatur aliquam tenetur ab. Cupiditate minima hic magnam molestias ipsum voluptates dignissimos explicabo iste, veritatis impedit expedita optio, rem quia reiciendis ex aliquid autem cum ut fugit maiores! Odit a minus praesentium repudiandae, eum expedita harum doloribus possimus aliquid eius, eos voluptatum exercitationem hic omnis voluptatem dolorum! Totam vitae culpa quia voluptatum aspernatur laboriosam dolorem obcaecati. Impedit facere deleniti corporis dicta qui! Consequuntur, magni?