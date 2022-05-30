import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import axios from "axios";

const Profile = ({ isLoggedIn }) => {
  const [dummy, setDummy] = useState([]);
  const { id } = useParams();
  // 비동기 처리
  const getData = async () => {
    const res = await axios({
      url: "https://wecart-ca053-default-rtdb.firebaseio.com/myungseong.json",
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    setDummy(res.data.find((i) => i.id === id));
  };

  useEffect(() => {
    getData();
  }, []);

  ////// 로그인 값이 true면 프로필 페이지를 렌더링하고
  //// false면 로그인 페이지로 자동으로 이동

  if (isLoggedIn) {
    return (
      <div>
        <h2>프로필 페이지(Profile)</h2>

        <h1>{dummy.title}님의 신상정보</h1>
        <div>phone: {dummy.phone}</div>
        <div>email: {dummy.email}</div>
        <div>address: {dummy.address}</div>
        <div>region: {dummy.region}</div>
        <div>country: {dummy.country}</div>
      </div>
    );
  } else {
    alert("로그인을 하셔야 프로필을 조회할 수 있습니다");
    return <Navigate to="/login" />;
  }
};

export default Profile;
