import styled from '@emotion/styled';
import { useState, useRef } from 'react';
const UpdateContainer=styled.div`
  border: 2px solid blue;
  
`


const UpdateBox = ({ products, setProducts, product }) => {

  const [updateContents, setUpdateContents] = useState({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description
  });
  
  const onChangeInput = (e) => {
    setUpdateContents({
      ...updateContents,
      [e.target.name]: e.target.value})
      console.log(updateContents)
  }


  

  return (
      <UpdateContainer>
        <label htmlFor="">
          {' '}
          제품명
          <input type="text" name="title" defaultValue={product.title} onChange={onChangeInput} />
        </label>
        <label htmlFor="">
          {' '}
          가격
          <input type="text" name="price" defaultValue={product.price} onChange={onChangeInput} />
        </label>
        <label htmlFor="">
          {' '}
          제품상세
          <input type="text" name="description" defaultValue={product.description} onChange={onChangeInput} />
        </label>
        <button>update</button>
      </UpdateContainer>
    );
};

export default UpdateBox;