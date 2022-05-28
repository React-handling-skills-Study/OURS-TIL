import React from "react";
import { Link } from "react-router-dom";

const Home = ({ setIsLoggedIn }) => {
  return (
    <>
      <h2>HOME</h2>
      <Link to="/links">링크 모음 페이지</Link>
      <br />
      <Link to="/querystring">쿼리스트링 관련 내용 페이지</Link>
    </>
  );
};

export default Home;
