import React, { useState } from 'react'
import '../style/DiaryListItem.scss'
import { FaEdit } from 'react-icons/fa'
import { CgRemoveR } from 'react-icons/cg'
import Modal from './Modal'

function DiaryListItem({
  diary,
  onRemove,
  setDiaries,
}) {
  const { id, text, created_date } = diary

  const [isModal, setIsModal] = useState(false)

  const onModal = () => {
    setIsModal((prev) => !prev)
    console.log(isModal)
  }

  const updateDiary = (id, newContent) => {
    setIsModal((prev) => !prev)
    setDiaries((prev) =>
      prev?.map((item) =>
        item.id === id
          ? { ...item, text: newContent }
          : item,
      ),
    )
  }

  return (
    <>
      {isModal && (
        <Modal
          onModal={onModal}
          updateDiary={updateDiary}
          diary={diary}
        />
      )}

      <div className="DiaryListItem">
        <div className="content">
          <div className="date">
            {new Date(
              created_date,
            ).toLocaleString()}
          </div>
          <div className="text">{text}</div>
        </div>
        <div className="icons">
          <div className="edit" onClick={onModal}>
            <FaEdit />
          </div>
          <div
            className="remove"
            onClick={() => {
              onRemove(id)
            }}
          >
            <CgRemoveR />
          </div>
        </div>
      </div>
    </>
  )
}

export default DiaryListItem
