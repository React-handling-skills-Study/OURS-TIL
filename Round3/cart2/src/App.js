import { useReducer, useRef, useState, useEffect } from 'react';
import Father from './Components/PracticeProps/Father';
import Mother from './Components/PracticeProps/Mother';
import styled from '@emotion/styled';
// import InputForm from './Components/Form/InputForm';
// import DummyData from './DummyData';

// COMPONENT STYLE
const Parents = styled.div`
  width: 50%;
  display: flex;
  position: relative;
  left: 50px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const CartButton = styled.button`
  padding: 20px;
  font-size: 20px;
`;
const ProductContainer = styled.div`
  background-color: #ffdfea;
  border-radius: 10px;
  display: flex;
  position: relative;
  width: 300px;
  height: 200px;
  font-size: 20px;
  position: relative;
  right: 0;
  left: 0;
  margin: 20px auto;
`;
const ButtonContainer = styled.div`
  height: 30%;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  right: 10px;

  button {
    width: 30px;
    height: 30px;
  }
`;
const ProductInfo = styled.ul`
  list-style: none;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  height: 50%;
`;

/// INITIAL STATE
const initialState = {
  id: '',
  price: 0,
  description: '',
  title: '',
};

// REDUCER FUNCTION
const productReducer = (state, action) => {
  if (action.type === 'ID_INPUT') {
    return {
      ...state,
      id: action.value,
    };
  }
  if (action.type === 'PRICE_INPUT') {
    return {
      ...state,
      price: action.value,
    };
  }
  if (action.type === 'TITLE_INPUT') {
    return {
      ...state,
      title: action.value,
    };
  }
  if (action.type === 'DESCRIPTION_INPUT') {
    return {
      ...state,
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
//COMPONENT
function App() {
  const [productInfomation, dispatchProductInfomation] = useReducer(
    productReducer,
    initialState
  );
  const idInput = useRef(null);
  const priceInput = useRef(null);
  const titleInput = useRef(null);
  const descriptionInput = useRef(null);
  const [products, setProducts] = useState([]);

  // HANDLER FOR DISPATCHING
  const idChangeHandler = () => {
    dispatchProductInfomation({
      type: 'ID_INPUT',
      value: idInput.current.value,
    });
  };
  const priceChangeHandler = () => {
    dispatchProductInfomation({
      type: 'PRICE_INPUT',
      value: priceInput.current.value,
    });
  };
  const titleChangeHandler = () => {
    dispatchProductInfomation({
      type: 'TITLE_INPUT',
      value: titleInput.current.value,
    });
  };
  const descriptionChangeHandler = () => {
    dispatchProductInfomation({
      type: 'DESCRIPTION_INPUT',
      value: descriptionInput.current.value,
    });
  };

  //GETTING DATA FROM LOCAL STORAGE
  useEffect(() => {
    const localStorageProducts =
      JSON.parse(localStorage.getItem('products')) || [];
    setProducts(localStorageProducts);
  }, []);

  //SETTING DATA ON LOCAL STORAGE
  useEffect(() => {
    if (products?.length === 0) {
      return;
    }
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // SUBMIT
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지

    const localStorageProducts =
      JSON.parse(localStorage.getItem('products')) || [];
    setProducts([productInfomation, ...localStorageProducts]);

    //INITIALIZE INPUTS
    idInput.current.value = '';
    priceInput.current.value = '';
    titleInput.current.value = '';
    descriptionInput.current.value = '';
  };

  //MOTEHR, FATHER, INPUT PART
  const [count, setCount] = useState(1);

  const onClick = (e) => {
    e.preventDefault();
    setCount((prev) => (prev += 1));
  };
  const onInputSubmit = (e) => {
    e.preventDefault();
    alert('submit!');
  };

  const initLocalStorage = () => {
    localStorage.removeItem('products');
  };

  // RENDERING
  return (
    <>
      <Parents>
        <Father onInputSubmit={onInputSubmit} />
        <Mother onClick={onClick} count={count} />
      </Parents>
      <div className="App">
        <Form onSubmit={onSubmit}>
          <label htmlFor="">
            일련번호
            <input type="text" ref={idInput} onChange={idChangeHandler} />
          </label>
          <label htmlFor="">
            {' '}
            가격
            <input type="text" ref={priceInput} onChange={priceChangeHandler} />
          </label>
          <label htmlFor="">
            {' '}
            제품명
            <input type="text" ref={titleInput} onChange={titleChangeHandler} />
          </label>
          <label htmlFor="">
            {' '}
            제품상세
            <input
              type="text"
              ref={descriptionInput}
              onChange={descriptionChangeHandler}
            />
          </label>
          {'  '}
          <button>제품 생성</button>
          {'  '}
          <CartButton className="material-symbols-outlined">
            shopping_cart
          </CartButton>
        </Form>
        <button onClick={initLocalStorage}>로컬 스토리지 초기화</button>
        <div>
          {products?.map((product) => (
            <ProductContainer>
              <ProductInfo key={product.id}>
                <li>{product.title}</li>
                <li>{'$' + product.price}</li>
                <li>{product.description}</li>
              </ProductInfo>
              <ButtonContainer>
                <button>+</button>
                <button>-</button>
              </ButtonContainer>
            </ProductContainer>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
