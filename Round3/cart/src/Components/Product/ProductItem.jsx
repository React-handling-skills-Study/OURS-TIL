import styled from '@emotion/styled';
import React, { useState } from 'react';
import CartTemplate from '../../Card/CartTemplate';
import Modal from '../UI/Modal';



const Title = styled.li`
  font-size:32px;
  font-weight:bold;
`;

const Price = styled.li`
text-align:right;
  font-size:24px;
  font-weight:bold;
`
const Description = styled.li`
  padding: 1rem 0;
  font-size: 18px;
 
`;

const ButtonWrapper = styled.li`
  display:flex;
  justify-content:flex-end;
  align-items:center;
  gap: 5px;
  padding-top: 1rem;
  button{
    cursor: pointer;
    border-radius:5px;
    background-color:#fff;
    border: 1px solid #63BAAB;
    box-sizing:border-box;
    font-weight:bold;
    }
    button:last-of-type{
      color:red;
      &:hover{
        background-color:red;
        color:white;
      }
    }
    button:hover{
      color:white;
      background-color:#63BAAB;
    }
`








const ProductItem = ({id, title, price, description,removeProductHandler,setStoredProduct}) => {
  const [isShow,setIsShow] = useState(false)

  // App 컴포넌트에서 isShow State를 관리하면 전체가 모달로 뜨고, ProductItem에서 관리하면 하나만 뜸..
  //
  
  const updateProductHandler = (id,newText) => {
    console.log('hi')
    setStoredProduct((prev) =>prev?.map((product) =>product.id === id? {
              ...product,
              title: newText.title,
              description: newText.description,
              price: newText.price,
            }
          : product
      )
    );
    setIsShow(prev => !prev)
  };
  
  const onModalHandler = () => {
    setIsShow(prev => !prev)
  }
  return (
    <>
    {isShow ? <Modal id={id} title={title} price={price} description={description} onModalHandler={onModalHandler} updateProductHandler={updateProductHandler} /> :
    <>
      <Title>{title}</Title>
        <Price>$ {parseFloat(price).toFixed(2)}</Price>
        <Description>{description}</Description>
        <ButtonWrapper>
          <button>+</button>
          <button>-</button>
          <button onClick={onModalHandler}>Update</button>
          <button onClick={()=> removeProductHandler(id)}>Delete</button>
        </ButtonWrapper>
        </>
        }
    </>
  );
};

export default ProductItem;