import styled from '@emotion/styled';
import React from 'react';

const UserlistWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  
`;

const UserlistForm = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap:10px;
  margin: 1rem;
  padding:1rem;
  border: 5px solid gold;
  border-radius: 20px;
`;

const Userlist = ({ userlist }) => {
  return (
    <>
      <h3>회원목록</h3>
      <UserlistWrapper>
        {userlist?.map((user) => (
          <UserlistForm key={user.userIndex}>
            <li>성함 : {user.username}</li>
            <li>ID : {user.id}</li>
            <li>E-MAIL : {user.email}</li>
          </UserlistForm>
        ))}
      </UserlistWrapper>
    </>
  );
};

export default Userlist;
