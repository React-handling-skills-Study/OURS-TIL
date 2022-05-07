//가입된 회원 영역을 보여주는 곳
import styled from '@emotion/styled';
import UserList from './UserList';

const StyleUserListArea = styled.div`
  max-width: 520px;
  margin: 15px auto 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #91c3ff;
  padding: 2rem 0rem;
`;
const StyleSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const UserListArea = ({ userData }) => {
  console.log({ userData });

  return (
    <StyleUserListArea className="UserListArea">
      <h4>회원목록</h4>
      <StyleSection>
        {userData.map((user) => (
          <UserList key={user.index} {...user} />
        ))}
      </StyleSection>
    </StyleUserListArea>
  );
};

export default UserListArea;
