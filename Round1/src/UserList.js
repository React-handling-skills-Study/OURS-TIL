//가입된 유저 목록
// UserListArea > UserList
import styled from '@emotion/styled';

const Userlist = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  margin: 10px;
  padding: 1rem;
  border: 3px solid #9a1ed4;
  border-radius: 10px;
  li {
    list-style: none;
    margin: 0 15px;
  }
`;
const UserList = ({ userName, email, userId }) => {
  return (
    <Userlist className="UserList">
      <li>Name: {userName}</li>
      <li>Id: {userId}</li>
      <li>e-mail: {email}</li>
    </Userlist>
  );
};

export default UserList;
