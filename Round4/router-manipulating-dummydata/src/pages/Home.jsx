import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>HOME</h2>
      <Link to="/links">더미 링크 모음 페이지</Link>
    </div>
  );
};

export default Home;
