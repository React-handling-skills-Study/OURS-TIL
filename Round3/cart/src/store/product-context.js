import React from 'react'








const ProductContext = React.createContext({
  productInfomation: {
    id: '',
    price: 0,
    title: '',
    description: '',
  },
  items: [],
  setStoredProduct: () => {},
  idChangeHandler: (ref) => {},
  priceChangeHandler:(ref)=>{},
  titleChangeHandler:(ref)=>{},
  descriptionChangeHandler:(ref)=>{},
  removeProductHandler:(id)=>{}
})

export default ProductContext;