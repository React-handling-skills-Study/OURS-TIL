//회원가입 기능
// NewUserArea + UserListArea

import NewUserArea from './NewUserArea'; //NewUserArea = input 관련 회원가입 영역
import UserListArea from './UserListArea'; //UserListArea = 가입된 회원 목록 영역
import React, { useRef, useState } from 'react';
import { minLength, required } from 'react-admin';

const SignupForm = () => {
  const [userData, setUserData] = useState([]);
  console.log(userData);
  const userDataIndex = useRef(0);

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

  const onCreate = (userName, email, pwd, userId) => {
    const newUser = {
      userName,
      email,
      userId,
      pwd,
      index: userDataIndex.current,
    };
    userDataIndex.current += 1;
    setUserData([...userData, newUser]);
  };

  return (
    <div className="SignupForm" validate={val}>
      <NewUserArea onCreate={onCreate} />
      <UserListArea userData={userData} />
    </div>
  );
};
export default SignupForm;
