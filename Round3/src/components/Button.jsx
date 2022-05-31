import React from 'react'
import styled from 'styled-components'

const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  button {
    border: none;
    outline: none;
    margin-right: 0.3rem;
    border-radius: 0.5rem;
    width: 36px;
    font-weight: bold;
    transition: all 0.2s ease-in;
    border: 2px solid #ede7e3;
    font-size: 0.7rem;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      background-color: #82c0cc;
      transform: scale(1.1);
    }
  }
`

function Button({
  id,
  onRemove,
  onEdit,
  isModal,
  updateProductHandler,
}) {
  return (
    <>
      <Btn>
        <button className="minus">-</button>
        <button className="plus">+</button>
        <button onClick={onEdit}>수정</button>
        <button onClick={() => onRemove(id)}>삭제</button>
      </Btn>
    </>
  )
}

export default Button
