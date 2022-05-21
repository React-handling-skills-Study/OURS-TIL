import React from "react";
import { Link, useNavigate } from "react-router-dom";
import DummyData from "../DummyData";
import styled from "@emotion/styled";

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 100px auto;
`;
const StyledLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: black;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 5px;
  border: 1px solid black;
  border-radius: 10px;
  width: 200px;
  padding: 10px 0;
  text-align: center;
`;

const Links = () => {
  const navigate = useNavigate();
  const sortedDummyData = DummyData.sort(function(a, b) {
    // 이름 abc 오름차순
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  });
  return (
    <div>
      <h1>링크 모음 페이지</h1>
      <button onClick={() => navigate("/")}>
        useNavigate()기능: navigate("/") Home 가기
      </button>
      <button onClick={() => navigate(+1)}>navigate(+1) 앞으로 가기</button>
      <LinkContainer>
        {sortedDummyData.map((dummy) => (
          <div>
            <StyledLink to={`/profile/${dummy.id}`}>
              {dummy.title}님의 정보
            </StyledLink>
          </div>
        ))}
      </LinkContainer>
    </div>
  );
};

export default Links;
