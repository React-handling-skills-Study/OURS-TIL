import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const onClickLogOut = () => {
    alert("로그아웃 되었습니다");
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <header>
      {isLoggedIn ? (
        <button onClick={onClickLogOut}>로그아웃하기</button>
      ) : (
        <button onClick={() => navigate("/login")}>로그인 하기</button>
      )}
      <button onClick={() => navigate("/")}>HOME</button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
      <button onClick={() => navigate(+1)}>앞으로 가기</button>
    </header>
  );
};

export default Header;
