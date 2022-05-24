import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DummyData from "../DummyData";
import styled from "@emotion/styled";

const ProfileContainer = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Profile2 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <h2>프로필 페이지</h2>
      {DummyData.map((dummy) =>
        dummy.id === id ? (
          <ProfileContainer>
            <h1>{dummy.title}님의 신상정보</h1>
            <div>phone: {dummy.phone}</div>
            <div>email: {dummy.email}</div>
            <div>address: {dummy.address}</div>
            <div>region: {dummy.region}</div>
            <div>country: {dummy.country}</div>
          </ProfileContainer>
        ) : null
      )}
      <button onClick={() => navigate("/")}>
        useNavigate()기능: navigate("/") Home 가기
      </button>
      <button onClick={() => navigate(-1)}>navigate(-1) 뒤로가기</button>
    </>
  );
};

export default Profile2;
