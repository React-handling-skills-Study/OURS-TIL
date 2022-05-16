import styled from '@emotion/styled';
import React from 'react';
import ProductList from './ProductList';

const Wrapper = styled.div`
position:absolute;
left:20%;
  display:flex;
  justify-content:center;
  gap:100px;
  max-width:1012px;
  flex-wrap:wrap;
`

const ProductTemplate = ({
  storedProduct,
  removeProductHandler,
  setStoredProduct
}) => {
  return (
    <Wrapper>
      {storedProduct?.map((product,i) => (
        
        <ProductList
          key={i}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          removeProductHandler={removeProductHandler}
          setStoredProduct={setStoredProduct}
        />
      ))}
    </Wrapper>
  );
};

export default ProductTemplate;
