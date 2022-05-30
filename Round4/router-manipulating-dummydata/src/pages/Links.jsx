import React, { useState, useEffect } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import axios from "axios";
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
  const [dummy, setDummy] = useState([]); //// let 빈배열 푸쉬로도 할 수 있다

  const getData = async () => {
    const res = await axios({
      url: "https://wecart-ca053-default-rtdb.firebaseio.com/myungseong.json",
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    setDummy(res.data);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log("더미", dummy);

  const [searchParams, setSearchParams] = useSearchParams();

  const sortByName = searchParams.get("sortByName"); //get으로 가져와서 할당

  const sortByRegion = searchParams.get("sortByRegion");
  //NAME
  const sortByNameFuntion = () => {
    setSearchParams({
      sortByName: sortByName === "name" ? "reverseName" : "name",
      // 삼항연산자가 굉장히 유용함! 특히 두 가지 기능만 있을 때 아주 좋음
    });
  };

  if (sortByName === "name") {
    dummy.sort(function(a, b) {
      return a.title > b.title ? 1 : -1;
    });
  } else if (sortByName === "reverseName") {
    dummy.sort(function(a, b) {
      return a.title < b.title ? 1 : -1;
    });
  }

  //REGION
  const sortByRegionFunction = () => {
    setSearchParams({
      sortByRegion: sortByRegion === "region" ? "reverseRegion" : "region",
      // 삼항연산자가 굉장히 유용함! 특히 두 가지 기능만 있을 때 아주 좋음
    });
  };

  if (sortByRegion === "region") {
    dummy.sort(function(a, b) {
      return a.region > b.region ? 1 : -1;
    });
  } else if (sortByRegion === "reverseRegion") {
    dummy.sort(function(a, b) {
      return a.region < b.region ? 1 : -1;
    });
  }

  return (
    <div>
      <h1>링크 모음(Links)</h1>
      <button onClick={sortByNameFuntion}>이름순/역순 정렬</button>
      <button onClick={sortByRegionFunction}>지역순/역순 정렬</button>

      <Outlet />

      <LinkContainer>
        {dummy.map((dummy) => (
          <div>
            <StyledLink to={`profile/${dummy.id}`}>
              Name: {dummy.title}
              <br />
              Region: {dummy.region}
            </StyledLink>
          </div>
        ))}
      </LinkContainer>
    </div>
  );
};

export default Links;
