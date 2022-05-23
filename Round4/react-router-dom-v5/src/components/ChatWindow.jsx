import styled from '@emotion/styled';
import React, { useCallback, useMemo } from 'react';




const ChatWrapper = styled.div`
  position:absolute;
  border: 1px solid white;
  background-color:#ddd;
  color:black;
  top:20%;
  width:90%;
  padding: 1rem;
  box-sizing:border-box;
  height: 250px;
  text-align:right;
  overflow-y:scroll;
  font-size: 14px;
  span{
    font-size:12px;
    color:#aaa;
  }
`

const ChatWindow = ({ chat }) => {
  
  const date = new Date();
      const options = { month: 'long'}
        const sentDate = `${new Intl.DateTimeFormat('en-US', options).format()} ${date.getDate()} (${date.getHours()}:${date.getMinutes()})`
  
  
  return (
    <ChatWrapper>
      {chat.map((chatting,i) => (
        <p key={i}>{chatting} <span>Sent {sentDate} </span></p>
      ))}
    </ChatWrapper>
  );
};

export default ChatWindow;
