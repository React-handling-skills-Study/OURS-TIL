import React from "react";
import { Link } from "react-router-dom";

const Home = ({ setIsLoggedIn }) => {
  const onClickLogOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <h2>HOME</h2>
      <Link to="/links">더미 링크 모음 페이지</Link>
      <br />
      <Link to="/querystring">쿼리스트링 체험</Link>
      <button onClick={onClickLogOut}>로그아웃하기</button>
    </>
  );
};

export default Home;
