import { useReducer, useRef, useState, useEffect, useCallback } from 'react';
import Father from './Components/PracticeProps/Father';
import Mother from './Components/PracticeProps/Mother';
import styled from '@emotion/styled';
// import InputForm from './Components/Form/InputForm';
// import DummyData from './DummyData';
import UpdateBox from './Components/UpdateBox';
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
  const [productInformation, dispatchProductInformation] = useReducer(
    productReducer,
    initialState
  );
  const [products, setProducts] = useState([]);
  const [isShowUpdate, setIsShowUpdate] = useState(false);

  const idInput = useRef(null);
  const priceInput = useRef(null);
  const titleInput = useRef(null);
  const descriptionInput = useRef(null);

  // HANDLER FOR DISPATCHING
  const idChangeHandler = () => {
    dispatchProductInformation({
      type: 'ID_INPUT',
      value: idInput.current.value,
    });
  };
  const priceChangeHandler = () => {
    dispatchProductInformation({
      type: 'PRICE_INPUT',
      value: priceInput.current.value,
    });
  };
  const titleChangeHandler = () => {
    dispatchProductInformation({
      type: 'TITLE_INPUT',
      value: titleInput.current.value,
    });
  };
  const descriptionChangeHandler = () => {
    dispatchProductInformation({
      type: 'DESCRIPTION_INPUT',
      value: descriptionInput.current.value,
    });
  };

  //GETTING DATA FROM LOCAL STORAGE
  useEffect(() => {
    const localStorageProducts =
      JSON.parse(localStorage.getItem('products')) || []; // 일단 Local storage의 내용을 받아와서..
    setProducts(localStorageProducts); // products 상태에 반영
  }, []);

  //SETTING DATA ON LOCAL STORAGE

  useEffect(() => {
    if (products.length === 0) {
      localStorage.removeItem('products');
      return;
    }
    localStorage.setItem('products', JSON.stringify(products)); // 1. products 상태를 stringify하고 setItem으로 Local storage key에 저장
  }, [products]); // 2. products값에 변화가 있을 때 마다 위 내용을 실행

  // SUBMIT
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지

    const localStorageProducts =
      JSON.parse(localStorage.getItem('products')) || [];
    setProducts([productInformation, ...localStorageProducts]); // 현재 Local storage의 상태에 setProducts로 입력되는 productInformation을 끼워넣음

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

  // INITIALIZE LOCAL STORAGE
  const initLocalStorage = () => {
    localStorage.removeItem('products');
    setProducts([]);
  };

  // REMOVE PRODUCT INFORMATION
  const onClickRemove = (id) => {
    setProducts(products.filter((x) => x.id !== id));
  };

  //ONCLICK MODIFY BUTTON
  const onClickModify = () => {
    setIsShowUpdate(!isShowUpdate);
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
            제품명
            <input type="text" ref={titleInput} onChange={titleChangeHandler} />
          </label>
          <label htmlFor="">
            {' '}
            가격
            <input type="text" ref={priceInput} onChange={priceChangeHandler} />
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
        <button onClick={initLocalStorage}>Initialize local storage</button>
        <div>
          {products?.map((product, keyValue) => (
            <ProductContainer key={keyValue}>
              <UpdateBox
                products={products}
                setProducts={setProducts}
                product={product}
                isShowUpdate={isShowUpdate}
                setIsShowUpdate={setIsShowUpdate}
                onClickModify={onClickModify}
              />

              <ProductInfo key={product.id}>
                <li>{product.title}</li>
                <li>{'$' + product.price}</li>
                <li>{product.description}</li>
              </ProductInfo>
              <ButtonContainer>
                <button>+</button>
                <button>-</button>
                <button onClick={() => onClickRemove(product.id)}>
                  delete
                </button>{' '}
                <button onClick={onClickModify}>수정</button>
              </ButtonContainer>
            </ProductContainer>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
