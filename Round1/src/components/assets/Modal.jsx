import styled from '@emotion/styled';
import React, { useState } from 'react';


const ModalOuter = styled.div`
  position:fixed;
  width:100%;
  height:100vw;
  background-color:rgba(0,0,0,0.2);
  z-index:99;
  button{

  }
`
const ModalInner = styled.div`
position:absolute;
  top:5%;
  left:35%;
  width:30%;
  height:30%;
  background-color:rgba(255,255,255,0.8);
  color:black;
`

const Modal = ({onCloseModal,userlist}) => {
  const [newUser] = useState(userlist.slice(userlist.length-1,userlist.length));
  
  
  return (
    <ModalOuter>
    <ModalInner>
     <h1>{newUser[0].username}님 가입을 축하드립니다.</h1>
     <h2>고객님의 아이디는 {newUser[0].id} 입니다.</h2>
     <button onClick={onCloseModal}>확인</button>
     </ModalInner>
  </ModalOuter>
  );
};

export default Modal;