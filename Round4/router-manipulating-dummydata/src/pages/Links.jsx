import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DummyData from "../DummyData";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 20px;
  color: green;
  font-weight: 700;
  margin-left: 20px;
  margin-bottom: 5px;
`;

const Links = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>링크 모음 페이지</h1>
      <button onClick={() => navigate("/")}>
        useNavigate()기능: navigate("/") Home 가기
      </button>
      <button onClick={() => navigate(+1)}>navigate(+1) 앞으로 가기</button>
      {DummyData.map((dummy) => (
        <div>
          <StyledLink to={`/profile/${dummy.id}`}>
            {dummy.title}님의 정보
          </StyledLink>
        </div>
      ))}
    </div>
  );
};

export default Links;
