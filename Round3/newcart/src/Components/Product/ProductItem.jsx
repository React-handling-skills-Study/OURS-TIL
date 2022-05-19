import styled from '@emotion/styled';
import React, { useState } from 'react';
import Modal from '../UI/Modal';

const Title = styled.li`
  font-size: 24px;
  font-weight: bold;
`;

const Price = styled.li`
  font-size: 18px;
  font-weight: bold;
`;
const Description = styled.li`
  padding: 1rem 0;
  font-size: 14px;
  color: black;
`;
const ProductItem = ({
  id,
  title,
  price,
  description,
  removeProductHandler,
  setStoredProduct,
}) => {
  const [isShow, setIsShow] = useState(false);

  // App 컴포넌트에서 isShow State를 관리하면 전체가 모달로 뜨고, ProductItem에서 관리하면 하나만 뜸..
  //

  const updateProductHandler = (id, newText) => {
    console.log('hi');
    setStoredProduct((prev) =>
      prev?.map((product) =>
        product.id === id
          ? {
              ...product,
              title: newText.title,
              description: newText.description,
              price: newText.price,
            }
          : product
      )
    );
    setIsShow((prev) => !prev);
  };

  const onModalHandler = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <>
      {isShow ? (
        <Modal
          id={id}
          title={title}
          price={price}
          description={description}
          onModalHandler={onModalHandler}
          updateProductHandler={updateProductHandler}
        />
      ) : (
        <>
          <Title>{title}</Title>
          <Price>$ {price}</Price>
          <Description>{description}</Description>
          <li>
            <button>+</button>
            <button>-</button>
            <button onClick={onModalHandler}>수정</button>
            <button onClick={() => removeProductHandler(id)}>삭제</button>
          </li>
        </>
      )}
    </>
  );
};

export default ProductItem;
