import styled from '@emotion/styled';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import ChatWindow from '../components/ChatWindow';

const TalkWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content:center;
  align-items:flex-start;
  border: 1px solid #fff;
  height: 500px;
  position: fixed;
  padding: 1rem;
  top: 50%;
  right: 0;
  width: 512px;
  height: 568px;
  transform:translate(-10%,-50%);
  
  justify-content: center;

  textarea {
    position: absolute;
    padding: 2rem;
    bottom: 20px;
    width: 100%;
    height: 120px;
    box-sizing: border-box;
  }
  
`;

const InputWrapper = styled.div`
  position: absolute;
  width: 90%;
  height: 120px;
  bottom: 20px;
`;

const TalkTitle = styled.h1`
  font-size: 24px;
`;

const ButtonWrapper = styled.div`
  position:absolute;
  display:flex;
  justify-content:space-between;
  align-items:space-between;
  bottom: -12px;
  right: 0;
  gap:20px;
  button {
    
    font-weight: bold;
    padding: 0.2rem;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    
  }
`

const TalkMember = ({ memberTitle,memberId }) => {
  const textRef = useRef();
  const [chat, setChat] = useState([]);
  const history = useHistory()

  useEffect(() => {
    onClearInput();
  }, [chat]);

  const onSubmit = (e) => {
    e.preventDefault();
    setChat((prev) => [...prev, textRef.current.value]);
  };
  const onClearInput = useCallback(() => {
    textRef.current.focus();
    textRef.current.value = '';
  },[]);

  console.log(chat);

  return (
    <TalkWrapper>
      <TalkTitle>You are talking to '{memberTitle}' now..</TalkTitle>
      <ChatWindow chat={chat} />
      <InputWrapper>
        <form onSubmit={onSubmit}>
          <textarea ref={textRef} />
          <ButtonWrapper>
          <button type="submit">report</button>
          <button onClick={()=> history.push(`/members/${memberId}`)}>Close</button>
          </ButtonWrapper>
        </form>
      </InputWrapper>
      
    </TalkWrapper>
  );
};

export default TalkMember;
