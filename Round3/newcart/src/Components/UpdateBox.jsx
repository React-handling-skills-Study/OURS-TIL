import styled from '@emotion/styled';
import { useState, useRef } from 'react';

const UpdateContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  z-index: 10;
  background-color: yellow;
  width: 100%;
`;
//////////////////////////////////////
const UpdateBox = ({
  products,
  setProducts,
  product,
  isShowUpdate,
  setIsShowUpdate,
  onClickModify,
}) => {
  const [updateContents, setUpdateContents] = useState({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description,
  });

  const onChangeInput = (e) => {
    //수정 취소했을 때 기존 product는 변경되지 않아야함
    setUpdateContents({
      ...updateContents,
      [e.target.name]: e.target.value,
    });
  };

  const onClickUpdate = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? {
              ...product,
              title: updateContents.title,
              description: updateContents.description,
              price: updateContents.price,
            }
          : product
      )
    );
    setIsShowUpdate(!isShowUpdate);
  };

  return (
    <>
      {isShowUpdate && (
        <UpdateContainer>
          <label htmlFor="">
            {' '}
            제품명
            <input
              type="text"
              name="title"
              onChange={onChangeInput}
              defaultValue={product.title}
            />
          </label>
          <label htmlFor="">
            {' '}
            가격
            <input
              type="text"
              name="price"
              onChange={onChangeInput}
              defaultValue={product.price}
            />
          </label>
          <label htmlFor="">
            {' '}
            제품상세
            <input
              type="text"
              name="description"
              onChange={onChangeInput}
              defaultValue={product.description}
            />
          </label>
          <button onClick={() => onClickUpdate(product.id)}>Update</button>
          <button onClick={onClickModify}>Cancel</button>
        </UpdateContainer>
      )}
    </>
  );
};

export default UpdateBox;
