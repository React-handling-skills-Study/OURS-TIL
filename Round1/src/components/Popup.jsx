import React from 'react'
import { useState } from 'react'
import UserList from './UserList'
import Modal from 'react-modal'

function Popup() {
  const [modalIsOpen, setModalIsOpen] =
    useState(false)

  return (
    <div className="Popup">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() =>
          setModalIsOpen(false)
        }
      >
        <UserList />
        <h2>Modal Title</h2>
        <p>Modal Body</p>
      </Modal>
    </div>
  )
}

export default Popup
