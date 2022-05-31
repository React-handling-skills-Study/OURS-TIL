import React, { useState, useRef } from 'react'
import '../style/Modal.scss'

function Modal({ onModal, updateDiary, diary }) {
  let [newContent, setNewContent] = useState('')

  const changeContent = (e) => {
    setNewContent(e.target.value)
  }

  const textInput = useRef()

  const { id, text } = diary

  const clearContent = (e) => {
    e.preventDefault()
    console.log((textInput.current.value = ''))
    textInput.current.focus()
  }

  return (
    <div className="modalContainer">
      <div className="modal">
        <header className="modal_header">
          <h2 className="modal_header-title">
            Edit Diary
          </h2>
          <button
            className="clear"
            onClick={clearContent}
          >
            Clear
          </button>
        </header>
        <main className="modal_content">
          <textarea
            ref={textInput}
            onChange={changeContent}
            defaultValue={text}
          ></textarea>
        </main>
        <footer className="modal_footer">
          <button
            className="modal-clear"
            onClick={onModal} // 함수형식으로 넣지 말고 props 형태로 넣기!!
          >
            Cancel
          </button>
          <button
            className="submit"
            onClick={() => {
              updateDiary(id, newContent)
            }}
          >
            Submit
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Modal
