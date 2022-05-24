import React from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import DummyData from "../DummyData";

const Profile = ({ isLoggedIn }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const foundData = DummyData.find((dummy) => dummy.id === id); // find 사용

  console.log("foundData로그", foundData);

  ////// 로그인 값이 유효하면 프로필 페이지를 렌더링하고 그게 아니면
  //// 로그인 페이지로 자동으로 이동시킨다

  if (isLoggedIn) {
    return (
      <div>
        <h2>프로필 페이지</h2>

        <h1>{foundData.title}님의 신상정보</h1>
        <div>phone: {foundData.phone}</div>
        <div>email: {foundData.email}</div>
        <div>address: {foundData.address}</div>
        <div>region: {foundData.region}</div>
        <div>country: {foundData.country}</div>

        <button onClick={() => navigate("/")}>
          useNavigate()기능: navigate("/") Home 가기
        </button>
        <button onClick={() => navigate(-1)}>navigate(-1) 뒤로가기</button>
      </div>
    );
  } else {
    alert("로그인을 하셔야 프로필을 조회할 수 있습니다");
    return <Navigate to="/login" />;
  }
};

export default Profile;
