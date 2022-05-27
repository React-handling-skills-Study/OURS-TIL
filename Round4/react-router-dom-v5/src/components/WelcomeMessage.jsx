import styled from '@emotion/styled';
import { getLuminance } from '@mui/material';
import React, { useEffect } from 'react';
import uuid from 'react-uuid';
import DeleteIcon from '@mui/icons-material/Delete';
import usePagination from '@mui/material/usePagination/usePagination';
import { useParams } from 'react-router-dom';
import useHttp from '../hooks/use-http';
import { deleteWelcomeMessage } from '../lib/api';
const MessageList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Message = styled.li`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    span {
      display: block;
      font-size: 14px;
      color: #aac;
    }
  }
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    z-index: 10;
  }
  svg:hover {
    fill: black;
    z-index: 1;
  }
`;

const WelcomeMessage = ({setWelcomeMessageList,welcomeMessageList, loadedWelcomeMessage }) => {
  const { status, error, data, sendRequest } = useHttp(deleteWelcomeMessage);
  const params = useParams();
  const { newmemberId } = params;

  const deleteMessageHandler = (messageId) => {
    if (window.confirm('are you sure?')) {
      sendRequest({ newmemberId, messageId });
      setWelcomeMessageList((prev) => prev.filter(item => item.id !== messageId))
    }
  };
  return (
    <MessageList>
      {loadedWelcomeMessage.map((message) => (
        <Message key={uuid()}>
          <p>{message.message} </p>
          <p>
            <span>{message.author}</span>
            <button
              onClick={(e) => deleteMessageHandler(message.id)}
              messageid={message.id}
            >
              <span>
                <DeleteIcon sx={{ fontSize: '18px', paddingTop: '4px' }} />
              </span>
            </button>
          </p>
        </Message>
      ))}
    </MessageList>
  );
};

export default WelcomeMessage;
