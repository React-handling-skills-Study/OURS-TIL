import React, {useState} from 'react'
import Modal from 'react-modal';
import styled from '@emotion/styled'

const Userlist = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  margin: 1rem;
  padding: 1rem;
  border: solid 2px #00c850;
  font-weight: 900;
  list-style: none;
`;







const PopModal = (user) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {username, id} = user;
  return (
    <div>
      <button onClick={()=> setModalIsOpen(true)}>Modal Open</button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <h1>{username}님 가입을 환영합니다!</h1>
        <button onClick={()=> setModalIsOpen(false)}>Modal Open</button>
      </Modal>
    </div>
  )
};

export default PopModal;



