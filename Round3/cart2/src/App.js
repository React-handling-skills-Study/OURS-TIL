import { useReducer, useRef, useState } from 'react';
import styled from '@emotion/styled';
import DummyData from './DummyData';

// STYLE

const TopNav = styled.header`
  position: relative;
  button {
    position: absolute;
    right: 100px;
    font-size: 50px;
  }
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

//COMPONENT
const initialState = {
  id: '',
  price: 0,
  description: '',
  title: '',
};

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

function App() {
  const [productInfomation, dispatchProductInfomation] = useReducer(
    productReducer,
    initialState
  );
  const idInput = useRef(null);
  const priceInput = useRef(null);
  const titleInput = useRef(null);
  const descriptionInput = useRef(null);
  const [products, setProducts] = useState(DummyData);

  const idChangeHandler = () => {
    dispatchProductInfomation({
      type: 'ID_INPUT',
      value: idInput.current.value,
    }); // current.value 이유 생각해보기
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

  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지
    setProducts((prev) => [productInfomation, ...prev]); // 새로운 상품이 최상단에 위치하도록 배열 구성
    idInput.current.value = '';
    priceInput.current.value = '';
    titleInput.current.value = '';
    descriptionInput.current.value = '';
  };
  return (
    <div className="App">
      <TopNav>
        <button class="material-symbols-outlined">shopping_cart</button>
      </TopNav>

      <form onSubmit={onSubmit}>
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
      </form>

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
  );
}

export default App;
