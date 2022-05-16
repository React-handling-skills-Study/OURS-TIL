import React, { useEffect, useReducer, useState } from 'react'
import ProductContext from './product-context';


const initialState = {
  id: '',
  price: 0,
  title: '',
  description: '',
};

const productReducer = (state, action) => {
  if (action.type === 'ID_INPUT') {
    return {
      id: action.value,
      price: state.price,
      title: state.title,
      description: state.description,
    };
  }
  if (action.type === 'PRICE_INPUT') {
    return {
      id: state.id,
      price: action.value,
      title: state.title,
      description: state.description,
    };
  }
  if (action.type === 'TITLE_INPUT') {
    return {
      id: state.id,
      price: state.price,
      title: action.value,
      description: state.description,
    };
  }
  if (action.type === 'DESCRIPTION_INPUT') {
    return {
      id: state.id,
      price: state.price,
      title: state.title,
      description: action.value,
    };
  }
  if (action.type === 'INITIALIZE_INPUT') {
    return {
      id: action.value,
      price: action.value,
      title: action.value,
      description: action.value,
    };
  }
  return {
    id: '',
    price: '',
    title: '',
    description: '',
  };
};

const ProductProvider = (props) => {





  const [productInformation, dispatchProductInfomation] = useReducer(
    productReducer,
    initialState
  );
  const [storedProduct, setStoredProduct] = useState([]);
  useEffect(() => {
    const storedLocalProducts =
      JSON.parse(localStorage.getItem('product')) || [];
    setStoredProduct(storedLocalProducts);
  }, []);



  useEffect(() => {
    if (storedProduct?.length === 0) {
      return;
    }
    localStorage.setItem('product', JSON.stringify(storedProduct));
  }, [storedProduct]);

  const idChangeHandler = (ref) => {
    dispatchProductInfomation({ type: 'ID_INPUT', value: ref.current.value });
  };
  
  const priceChangeHandler = (ref) => {
    dispatchProductInfomation({
      type: 'PRICE_INPUT',
      value: ref.current.value,
    });
  };
  
  const titleChangeHandler = (ref) => {
    dispatchProductInfomation({
      type: 'TITLE_INPUT',
      value: ref.current.value,
    });
  };
  
  const descriptionChangeHandler = (ref) => {
    dispatchProductInfomation({
      type: 'DESCRIPTION_INPUT',
      value: ref.current.value,
    });
  };
  const removeProductHandler = (id) => {
    setStoredProduct((prev) => prev.filter((product) => product.id !== id));
  };
  

  const productContext = {
    items: storedProduct,
    setStoredProduct,
    idChangeHandler,
    priceChangeHandler,
    titleChangeHandler,
    descriptionChangeHandler,
    removeProductHandler,
    productInformation
  }

  return (
    <ProductContext.Provider value={productContext}>
      {props.children}
    </ProductContext.Provider>
  )
};


export default ProductProvider;






