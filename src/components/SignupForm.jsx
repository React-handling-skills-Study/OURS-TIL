import React, { useRef, useState } from 'react';
import Button from './assets/Button'
import Form from './assets/Form';
import Header from './assets/Header';
import Modal from './assets/Modal';
import Userlist from './assets/Userlist';
import SignupLayout from './layouts/SignupLayout';

const SignupForm = () => {
  const focusInput = useRef([]);
  const [userlist, setUserlist] = useState([]);
  const [userIndex, setUserIndex] = useState(0);
  const [inputValue, setInputValue] = useState({
    username: '',
    email: '',
    id: '',
    password: '',
    passwordConfirmation: '',
  });
  const [isSignup, setIsSignup] = useState(false);
  const { username, email, id, password, passwordConfirmation } = inputValue;


  const user = {
    username,
    email,
    id,
    password,
    passwordConfirmation,
    userIndex,
  };

  const handleInputValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmitForm =  (e) => {
    if (e.key === 'Enter') {
      onClickSubmitForm();
    }
  };
  const clearInput = () => {
    setInputValue({
      username:'',
      email:'',
      id:'',
      password: '',
      passwordConfirmation: '',
    });
    focusInput.current.focus();
  }



  const emailValidation = (email) => {
    const pattern = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i

    // match 메서드는 비교 대상이 되는 "문자열"과 정규식이 부합하는 부분을 검색합니다.
    if(!email.match(pattern)){
      alert("이메일 형식을 확인해주세요")
      clearInput();
      return false;
    }else{
      return true;
    }
  }



  const userValueLengthValidation = (info) => {
    info.pop()
    if(!info.every(userInfo => userInfo.length > 2)){
      alert('모든 입력값은 3글자 이상이어야 합니다.');
      clearInput();
      return false;
    }else{
      return true;
    }
  }



  const passwordValidation = (pwd,pwd2) => {
    if(pwd !== pwd2){
      clearInput();
      alert("비밀번호를 확인해주세요");
      return false;
    }else{
      return true;
    }
  }


  const signupGreeting = (user) => {
    setUserlist([...userlist, user]);
    setIsSignup(true);
    setUserIndex((prev) => (prev += 1));
    clearInput()
  }



  const onClickSubmitForm =  () => {
    const userInfos = [...Object.values(user)];
    const {email:userEmail} = user;
    const {password:userPassword, passwordConfirmation:userPasswordConfirmation} = user;

    if(userValueLengthValidation(userInfos)
    && emailValidation(userEmail)
    && passwordValidation(userPassword,userPasswordConfirmation,user)){
    signupGreeting(user)
    };
  };




  const onCloseModal = () => {
   setIsSignup(false);
  }


  return (
    <>
    {isSignup && <Modal onCloseModal={onCloseModal} userlist={userlist} /> }
    <SignupLayout>
      <Header />
      <Form inputValue={inputValue} handleInputValue={handleInputValue} handleSubmitForm={handleSubmitForm} ref={focusInput} />
      <Button onClickSubmitForm={onClickSubmitForm}>가입하기</Button>
      <Userlist userlist={userlist}/>
      </SignupLayout>
      </>
  );
};

export default SignupForm;



