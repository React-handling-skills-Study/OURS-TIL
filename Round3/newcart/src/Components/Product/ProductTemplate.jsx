import React from 'react';
import ProductList from './ProductList';

const ProductTemplate = ({
  storedProduct,
  removeProductHandler,
  setStoredProduct
}) => {
  return (
    <>
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
    </>
  );
};

export default ProductTemplate;
