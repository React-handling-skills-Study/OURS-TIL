import React from 'react'
import './App.css'
import Form from './components/Form'
import './style.scss'
import Modal from 'react-modal'
import { useState } from 'react'
import UserList from './components/UserList'

Modal.setAppElement('#root')
function App() {
  const [modalIsOpen, setModalIsOpen] =
    useState(false)

  return (
    <div className="App">
      <Form setModalIsOpen={setModalIsOpen} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() =>
          setModalIsOpen(false)
        }
        style={{
          overlay: {
            backgroundColor: 'grey',
          },
          content: {
            color: 'purple',
          },
        }}
      >
        <h2>회원 목록!</h2>
        <div>
          <li>Name</li>
          <li>ID</li>
          <li>Email</li>
        </div>
      </Modal>
    </div>
  )
}

export default App
