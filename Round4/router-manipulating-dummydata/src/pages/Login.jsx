import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const LoginForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  // 버튼으로 제출하면 로그인 해야만 볼 수 있는 페이지로 이동한다

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn((prev) => !prev);
  };

  if (isLoggedIn) {
    alert("로그인 완료!");
    navigate("/links");
  }

  return (
    <div>
      <LoginForm onSubmit={onSubmit}>
        <label htmlFor="">
          아이디 <input type="text" />
        </label>

        <label htmlFor="">
          비밀번호 <input type="text" />
        </label>
        <button>로그인</button>
      </LoginForm>
    </div>
  );
};

export default Login;
