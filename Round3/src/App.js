import Form from './components/Form'
import Product from './components/Product'
import { useState, useReducer, useEffect } from 'react'
// import DUMMY_PRODUCTS from './components/DummyData'


const initialState = {
  id: '',
  price: 0,
  title: '',
  description: '',
}

const productReducer = (state, action) => {
  if (action.type === 'ID_INPUT') {
    return {
      id: action.value,
      price: state.price,
      title: state.title,
      description: state.description,
    }
  }
  if (action.type === 'PRICE_INPUT') {
    return {
      id: state.id,
      price: action.value,
      title: state.title,
      description: state.description,
    }
  }
  if (action.type === 'TITLE_INPUT') {
    return {
      id: state.id,
      price: state.price,
      title: action.value,
      description: state.description,
    }
  }
  if (action.type === 'DESCRIPTION_INPUT') {
    return {
      id: state.id,
      price: state.price,
      title: state.title,
      description: action.value,
    }
  }
  return {
    id: '',
    price: '',
    title: '',
    description: '',
  }
}
function App() {
  const [productInfomation, dispatchProductInfomation] = useReducer(
    productReducer,
    initialState,
  )

  const [storedProduct, setStoredProduct] = useState([])

  const [isModal, setIsModal] = useState(false)

  // LocalStorage 저장, 불러오기
  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem('product')) || []
    setStoredProduct(storedProducts)
  }, [])

  useEffect(() => {
    if (storedProduct?.length === 0) return
    localStorage.setItem('product', JSON.stringify(storedProduct))
  }, [storedProduct])

  const idChangeHandler = (idValue) => {
    dispatchProductInfomation({
      type: 'ID_INPUT',
      value: idValue,
    })
  }

  const priceChangeHandler = (priceValue) => {
    dispatchProductInfomation({
      type: 'PRICE_INPUT',
      value: priceValue,
    })
  }

  const titleChangeHandler = (titleValue) => {
    dispatchProductInfomation({
      type: 'TITLE_INPUT',
      value: titleValue,
    })
  }

  const descriptionChangeHandler = (desValue) => {
    dispatchProductInfomation({
      type: 'DESCRIPTION_INPUT',
      value: desValue,
    })
  }
  const onSubmit = (e) => {
    e.preventDefault()
    setStoredProduct([productInfomation, ...storedProduct])
  }

  const onRemove = (id) => {
    setStoredProduct((prev) =>
      prev.filter((product) => product.id !== id),
    )
  }

  const onEdit = () => {
    setIsModal((prev) => !prev)
  }
  return (
    <div className="App">
      <Form
        idChangeHandler={idChangeHandler}
        priceChangeHandler={priceChangeHandler}
        titleChangeHandler={titleChangeHandler}
        descriptionChangeHandler={descriptionChangeHandler}
        onSubmit={onSubmit}
      />
      <Product
        storedProduct={storedProduct}
        setStoredProduct={setStoredProduct}
        onRemove={onRemove}
        onEdit={onEdit}
        isModal={isModal}
        setIsModal={setIsModal}
      />
    </div>
  )
}

export default App
