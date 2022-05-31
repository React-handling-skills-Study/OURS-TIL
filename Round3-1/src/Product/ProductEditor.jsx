import React from 'react'
import styled from '@emotion/styled'

const DivInput = styled.div`
  background-color: #323031;
  text-align: center;
  padding: 1rem;
`

const FormProduct = styled.div`
  margin: 0 auto;
  padding: 2rem;
  color: #fff;
  width: 300px;
  border: 2px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  div {
    margin-bottom: 0.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
`

const ProductEditor = () => {
  return (
    <div>
      <DivInput>
        <FormProduct>
          <div>
            <label htmlFor="">일련번호: </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">가격: </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">제품명: </label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">제품상세: </label>
            <input type="text" />
          </div>
        </FormProduct>
      </DivInput>
    </div>
  )
}

export default ProductEditor
