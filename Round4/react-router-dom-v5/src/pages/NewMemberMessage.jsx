import styled from '@emotion/styled';
import { Button, CircularProgress, Paper, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import WelcomeMessage from '../components/WelcomeMessage';
import useHttp from '../hooks/use-http';
import { addWelcomeMessage, getWelcomeMessage } from '../lib/api';
import NothingWelcomeMessage from '../components/NothingWelcomeMessage';
import LoadingSpinner from '../UI/LoadingSpinner';
const Wrapper = styled.div`
  position:relative;
  border: 1px solid white;
  width:100%;
  p:first-of-type {
    font-size: 24px;
    color:orange;
    font-weight:bold;
  }
  p:last-of-type{
    padding: .2rem 0;
    position:absolute;
    bottom:5px;
    text-decoration:underline;
  }
  div {
    height: 100px;
  }
  a{
    position:absolute;
    right: -15px;
    border:0;
    top:1px;
    box-sizing:border-box;
     &:hover{
       border:0;
       color:#aaa;
     }
  }
`;

const StyledPaper = styled(Paper)`
  padding:1rem;
  box-sizing:border-box;
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
`
const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height:'10rem',
    padding: '1rem',
    border:'1px solid #fff',
    background:'#ddd',
    borderRadius:0
  },
  '& .MuiInputBase-root':{
  }
})
const AuthorTextField = styled(TextField)({
  '& .MuiFilledInput-input': {
    
    border:'1px solid #fff',
    background:'#ddd',
    borderRadius: '3px',
    height:'14px',
    margin:'1rem 0',
    padding: '1rem',

  },
  '& .MuiInputLabel-root':{
    color:'#000',
    fontSize:'18px',
    fontWeight:'bold'

  }
})
const AuthorTextFieldWrapper = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:flex-end;
  gap:20px;
`
const NewMemberMessage = ({ loadedNewMember,showMessage }) => {
  const {status:addMessageStatus,sendRequest:addMessageSendRequest} = useHttp(addWelcomeMessage);
  const {status,data:loadedWelcomeMessage,sendRequest} = useHttp(getWelcomeMessage);
  const params = useParams();
  const { newmemberId } = params;
  const filteredMember = loadedNewMember.find((loadedNewMember) => loadedNewMember.id === newmemberId);
  const [welcomeMessage,setWelcomeMessage] = useState({
    author:'',
    password:'',
    message:'',
  })
  const [welcomeMessageList,setWelcomeMessageList] = useState([])
  
  useEffect(()=>{
    sendRequest(newmemberId)
    
    return () => {
      sendRequest(newmemberId)
    }

    },[sendRequest,newmemberId,welcomeMessageList])
  const {author, password,message} = welcomeMessage;

  const onCreateWelcomeMessage = ({target}) => {
    console.log('putting');
    setWelcomeMessage({
      ...welcomeMessage,
      [target.name]:target.value
    })
  }
  const clearInput = () => {
    setWelcomeMessage({
      author:'',
      password:'',
      message:'',
      })  
  }
  const validateMessage = useCallback((value,number) => {
    if(value.length < number){
      alert(`this value is more than ${number} words`);
      return false
    }else{
      return true
    }
  },[author,password,message])
  const onSubmitWelcomeMessage = (e) => {
    e.preventDefault()
    
    if(validateMessage(author,2) && validateMessage(password,4) && validateMessage(message,10)){
      window.confirm(`
      Author: ${author}.
      message:${message}.
      Are you sure you want to send it?`);
      addMessageSendRequest({welcomeMessage: {message,author,password},newmemberId})   ;
      clearInput();
      setWelcomeMessageList(prev => [...prev,welcomeMessage,...loadedWelcomeMessage])
    }
  }

  return (
    <>
    <Wrapper>
      <StyledPaper elevation={0} style={{ backgroundColor: 'transparent', color: '#fff',borderRadius:0 }}>
        <p>Welcome OrangeHawks Members !</p>
        <Link onClick={showMessage} to="/newmember/orangehawks">
          <CloseIcon />
        </Link>
        <p style={{fontSize:'16px'}}><span>Please write a welcome greeting for '{filteredMember.name.substr(1)}'</span></p>
      </StyledPaper>
      </Wrapper>
      <form onSubmit={onSubmitWelcomeMessage} style={{width:'100%',margin:'1rem',position:'relative'}}>
      <AuthorTextFieldWrapper>
      <AuthorTextField name='author' value={welcomeMessage.author} onChange={onCreateWelcomeMessage} variant="filled"  label="author"  type='text'  />
      <AuthorTextField name='password' value={welcomeMessage.password} onChange={onCreateWelcomeMessage} variant="filled" label="password" type='password' />
      </AuthorTextFieldWrapper>
      <StyledTextField name='message' value={welcomeMessage.message} onChange={onCreateWelcomeMessage} varient='filled' label='message' fullWidth type='text' />
      <Button type='submit' style={{position:'absolute',right:'0',bottom:'0'}} variant="contained" endIcon={addMessageStatus === 'pending' ? <CircularProgress
            size={24}
            sx={{
              color: '#eed',
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          /> : <SendIcon />}>{addMessageStatus === 'pending' ? "Sending..." :'Send'}</Button>
      </form>

      <Paper elevation={3} style={{backgroundColor:'#1aa',width:'100%',padding:'1rem',margin:'1rem'}}>welcome {filteredMember.name.substr(1)}!
      <Paper style={{ width: '100%', height: '400px',color:'#000',padding:'2rem',boxSizing:'border-box',textAlign:'right',overflowY:'scroll',position:'realative' }} elevation={24}>
        <div style={{position:'absolute',top:'100%',left:'50%',transform:'translate(-50%,-50%)'}}>{status === 'pending' && <LoadingSpinner />}</div>
        {status === 'completed' && (!loadedWelcomeMessage || loadedWelcomeMessage.length === 0) ? <NothingWelcomeMessage /> : <WelcomeMessage setWelcomeMessageList={setWelcomeMessageList} welcomeMessageList={welcomeMessageList} loadedWelcomeMessage={loadedWelcomeMessage || []} />}
      </Paper>
      </Paper>
    </>
  );
};

export default NewMemberMessage;
