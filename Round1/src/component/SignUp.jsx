import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";

import Confirmation from "./Confirmation";
import PopModal from "./PopModal";


const Wrapper = styled.div`
  width: 100%;

  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f7;
  padding: 3rem 0rem;
  h1 {
    font-size: 50px;
    color: #00c850;
  }
  h3 {
    text-align: center;
  }
`;

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 1rem;

  input {
    border: solid 1px #dadada;
    padding: 0.2rem 0.5rem;
    &:focus {
      outline: 1px solid #00c850;
    }
  }
`;

const ButtonWrapper = styled(InputWrapper)`
  button {
    background-color: #00c850;
    border: 0;

    padding: 0.2rem 3.5rem;
    color: white;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const FocusInput = styled.input`
  &:focus {
  }
`;







const SignUp = () => {
  const focusInput = useRef();

  const [userlist, setUserlist] = useState([]); // user 객체들을 담은 배열

  const [userIndex, setUserIndex] = useState(0);

  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    id: "",
    password: "",
    passwordConfirmation: "",
  });
  const { username, email, id, password, passwordConfirmation } = inputValue;

  const handleInputValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = (e) => {
    if (e.key === "Enter") {
      onClickSubmitForm();
    }
  };

  const user = {
    username,
    email,
    id,
    password,
    passwordConfirmation,
    userIndex,
  };

  const onClickSubmitForm = () => {
    

    if (Confirmation(user)) {
      setUserIndex((prev) => (prev += 1));

      setUserlist([...userlist, user]);

      alert(`${username}님 환영합니다. 아이디 ${id}로 가입 되셨습니다.`);

      setInputValue({
        username: "",
        email: "",
        id: "",
        password: "",
        passwordConfirmation: "",
      });

      focusInput.current.focus();

      console.log(user);
    }

    
  };

  useEffect(() => {
    console.log(userlist);
    return console.log(userlist);    
  }, [userlist]);

  return (
    
      <Wrapper>
        
        <header>
          <h1>REACT</h1>
        </header>
        
        <InputWrapper>
          <FocusInput
            type="text"
            name="username"
            value={username || ""}
            placeholder="사용자명"
            onChange={handleInputValue}
            ref={focusInput}
          />
          <input
            type="email"
            name="email"
            value={email || ""}
            placeholder="이메일"
            onChange={handleInputValue}
          />
          <input
            type="address"
            name="id"
            value={id || ""}
            placeholder="아이디"
            onChange={handleInputValue}
          />
          <input
            type="password"
            name="password"
            value={password || ""}
            placeholder="비밀번호"
            onChange={handleInputValue}
          />

          <input
            type="password"
            name="passwordConfirmation"
            placeholder="비밀번호 확인"
            onChange={handleInputValue}
            value={passwordConfirmation || ""}
            onKeyUp={handleSubmitForm}
          />
        </InputWrapper>
        <ButtonWrapper>
          <button onClick={onClickSubmitForm}>가입하기</button>
        </ButtonWrapper>

        <h3>회원목록</h3>
        
        
        <PopModal user={user} /> 
        
        
      </Wrapper>
    
  );
};

export default SignUp;
