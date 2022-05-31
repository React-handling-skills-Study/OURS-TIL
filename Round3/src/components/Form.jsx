import { useRef } from 'react'
import styled from 'styled-components'

const InputBox = styled.div`
  background-color: #1c505c;
  color: #fff;
  font-weight: bold;
  text-align: right;
  padding: 1rem;
`
const Forms = styled.form`
  display: flex;
  flex-direction: column;
  width: 230px;
  margin: 0 auto;
  border: 2px solid;
  padding: 0.7rem;
  border-radius: 0.5rem;
  div {
    margin-bottom: 10px;
    input {
      margin-left: 10px;
    }
  }
  button {
    font-weight: bold;
  }
`

function Form({
  idChangeHandler,
  priceChangeHandler,
  titleChangeHandler,
  descriptionChangeHandler,
  onSubmit,
}) {
  const idInput = useRef(null)
  const priceInput = useRef(null)
  const titleInput = useRef(null)
  const descriptionInput = useRef(null)

  return (
    <InputBox>
      <Forms onSubmit={onSubmit}>
        <div>
          <label htmlFor="">
            일련번호:
            <input
              type="text"
              ref={idInput}
              onChange={() => idChangeHandler(idInput.current.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            {' '}
            가격:
            <input
              type="text"
              ref={priceInput}
              onChange={() =>
                priceChangeHandler(priceInput.current.value)
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            {' '}
            제품명:
            <input
              type="text"
              ref={titleInput}
              onChange={() =>
                titleChangeHandler(titleInput.current.value)
              }
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
            제품상세:
            <input
              type="text"
              ref={descriptionInput}
              onChange={() =>
                descriptionChangeHandler(
                  descriptionInput.current.value,
                )
              }
            />
          </label>
        </div>
        <button>제품 생성</button>
      </Forms>
    </InputBox>
  )
}

export default Form
