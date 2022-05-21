import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DummyData from "../DummyData";

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const x = DummyData.filter((dummy) => dummy.id === id);

  console.log(x);

  // const people = (...x);  //// 해당되는 객체만 뽑으려 했지만 실패

  return (
    <>
      <h2>프로필 페이지</h2>
      {DummyData.map((dummy) =>
        dummy.id === id ? (
          <div>
            <h1>{dummy.title}님의 신상정보</h1>
            <div>phone: {dummy.phone}</div>
            <div>email: {dummy.email}</div>
            <div>address: {dummy.address}</div>
            <div>region: {dummy.region}</div>
            <div>country: {dummy.country}</div>
          </div>
        ) : null
      )}
      <button onClick={() => navigate("/")}>
        useNavigate()기능: navigate("/") Home 가기
      </button>
      <button onClick={() => navigate(-1)}>navigate(-1) 뒤로가기</button>
    </>
  );
};

export default Profile;
