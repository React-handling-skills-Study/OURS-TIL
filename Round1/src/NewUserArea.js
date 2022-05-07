// 회원가입 영역 보여주는 곳
// input 이벤트 관련

import { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { required, minLength, email } from 'react-admin';

// styling - emotion 사용 !
const StyleNewUserArea = styled.div`
  max-width: 520px;
  margin: 10rem auto 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #91c3ff;
  padding: 2rem 0rem;
`;
const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 1rem;
  input {
    border: 1px solid teal;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
  }
`;
const ButtonWrapper = styled(InputWrapper)`
  button {
    background-color: #9a1ed4;
    border: 0;
    border-radius: 10px;
    padding: 0.2rem 0.5rem;
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: #9a1ed4;
      background-color: aliceblue;
      border: 1px solid #91e4ff;
    }
  }
`;
const FocusInput = styled.input`
  &:focus {
    border: 0;
    outline: 1px solid #ff91bd;
  }
`;
const StyleH2 = styled.h2`
  margin: auto;
`;

const NewUserArea = ({ onCreate }) => {
  const focusInput = useRef();
  const [state, setInputState] = useState({
    userName: '',
    email: '',
    userId: '',
    pwd: '',
    pwdCheck: '',
  });

  const val = (values) => {
    const errors = {};
    if (!values.required) {
      errors.required = '필수!';
    } else if (!values.minLength < 4) {
      errors.minLength = '3글자 이상!';
    } else if (values) {
      console.log(values, errors);
    }
  };

  // const valEmail = [required(), email()];
  // const valMinLength = [required(), minLength(4)];

  // const minLength =
  //   (min, message = '3글자 이상좀..') =>
  //   (value) =>
  //     value && value < min ? message : undefined;

  // const required =
  //   (msg = 'Required') =>
  //   (value) =>
  //     value ? undefined : msg;

  const handleState = (e) => {
    // console.log(e.target.name, e.target.value);
    setInputState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    let isValidSubmit = false;
    // 조건 만족하면 가입!!!!
    if (!isValidSubmit) {
      onCreate(state.userName, state.email, state.pwd, state.userId);

      setInputState({
        userName: '',
        email: '',
        userId: '',
        pwd: '',
        pwdCheck: '',
      });
      alert('!가입');
    }
  };

  return (
    <StyleNewUserArea className="NewUserArea">
      <StyleH2>회원가입</StyleH2>
      <InputWrapper>
        <FocusInput type="text" name="userName" value={state.userName} placeholder="이름" onChange={handleState} ref={focusInput} />
        <input type="email" name="email" value={state.email} placeholder="이메일" onChange={handleState} val={val} />
        <input type="address" name="userId" value={state.userId} placeholder="아이디" onChange={handleState} val={val} />
        <input type="password" name="pwd" value={state.pwd} placeholder="비밀번호" onChange={handleState} val={val} />
        <input type="password" name="pwdCheck" placeholder="비밀번호확인" onChange={handleState} value={state.pwdCheck} val={val} />
      </InputWrapper>
      <ButtonWrapper>
        <button onClick={handleSubmit}>가입하기</button>
      </ButtonWrapper>
    </StyleNewUserArea>
  );
};

export default NewUserArea;
