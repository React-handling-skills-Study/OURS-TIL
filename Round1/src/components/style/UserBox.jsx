import styled from 'styled-components'

const UserBox = styled.div`
  border: 1px solid purple;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 14px;
  padding: 0 10px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .list-title {
    text-align: center;
    width: 80%;
    border-bottom: 2px solid lightpink;
    line-height: 2px;
    margin-bottom: 20px;
  }

  .user-info {
    width: 80%;
    border: 1px solid gray;
    padding: 5px;
    border-radius: 10px;
    list-style: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 10px;
    li {
      padding: 5px;
    }
  }
`

export default UserBox
