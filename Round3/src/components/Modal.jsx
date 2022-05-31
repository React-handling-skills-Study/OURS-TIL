import React, { useState } from 'react'
import styled from 'styled-components'

const Box = styled.div`
  background-color: #0b132b;
  width: 300px;
  margin: 0 auto;
  color: #fff;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  position: absolute;
`

const ProductItem = styled.div`
  background-color: #003444;
  padding: 0.7rem;
  margin-bottom: 1rem;
  border: 0.3rem solid #fff;
  border-radius: 0.5rem;
  text-align: right;
  font-weight: bold;
  div {
    margin-right: 2rem;
  }
  &:last-child {
    margin-bottom: 0;
  }
`
const Btn = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
  button {
    border: none;
    outline: none;
    border-radius: 0.5rem;
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

function Modal(id, updateProductHandler) {
  const [newInput, setNewInput] = useState({
    title: '',
    price: '',
    description: '',
  })

  const onChangeHandler = ({ target }) => {
    setNewInput({
      ...newInput,
      [target.name]: target.value,
    })
  }

  return (
    <div>
      <Box>
        <ProductItem className="product-item">
          <div>
            <p>
              <label>제품명: </label>
              <input
                name="title"
                type="text"
                onChange={onChangeHandler}
              />
            </p>
            <p>
              <label>가격: </label>
              <input
                name="price"
                type="text"
                onChange={onChangeHandler}
              />
            </p>
            <p>
              <label>제품상세: </label>
              <input
                name="description"
                type="text"
                onChange={onChangeHandler}
              />
            </p>
          </div>
          <Btn>
            <button
              onClick={() => updateProductHandler(id, newInput)}
            >
              수정완료
            </button>
          </Btn>
        </ProductItem>
      </Box>
    </div>
  )
}

export default Modal
