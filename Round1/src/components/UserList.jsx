import React from 'react'
import UserBox from './style/UserBox'

const UserList = ({ userList }) => {
  let index = 0

  return (
    <div className="user-list">
      <UserBox>
        <div className="list-title">
          <h2>User List</h2>
        </div>
        {userList.map((info) => (
          <div
            className="user-info"
            key={index++}
          >
            <li>Name: {info.name}</li>
            <li>ID: {info.id}</li>
            <li>Email: {info.email}</li>
          </div>
        ))}
      </UserBox>
    </div>
  )
}

export default UserList
