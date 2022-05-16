import styled from '@emotion/styled';
import React, { useState } from 'react';
import Modal from '../UI/Modal';
import ProductItem from './ProductItem';


const List = styled.ul`
  padding:1rem;
  margin: 1rem 0.2rem;
  
  background-color: #B59BCE;
  display:grid;
  grid-template-columns: 1.7fr 1fr;
  flex-direction:column;
  justify-content:center;
  align-items:flex-start;
  max-width:412px;
  min-height:202px;
  border-radius:10px;
  box-shadow: 2px 4px 5px #FDE9FF;
`;




const ProductList = ({id, title, price, description,removeProductHandler,setStoredProduct}) => {



  return (
    <>
       <List>
        <ProductItem key={id} id={id} title={title} price={price} description={description} removeProductHandler={removeProductHandler} setStoredProduct={setStoredProduct}/>
      </List>
    </>
  );
};

export default ProductList;
