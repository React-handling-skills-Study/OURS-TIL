import React, { useRef, useState } from 'react'
import UserList from './UserList'
import validation from './validation'
import '../style.scss'

const Form = ({ setModalIsOpen }) => {
  const [userList, setUserList] = useState([])

  const [user, setUser] = useState({
    name: '',
    email: '',
    id: '',
    password: '',
    passwordConfirmation: '',
  })

  const [errors, setErrors] = useState('')

  const [onModal, setOnModal] = useState(false)

  const nameInput = useRef()

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const onClickSubmit = (e) => {
    e.preventDefault()
    let err = validation(user)
    setErrors(err)
    if (Object.keys(err).length >= 1) {
      console.log(Object.keys(errors).length)
      console.log('다시 입력 해주세요!')
    } else {
      setUserList([...userList, user])
      setUser({
        name: '',
        email: '',
        id: '',
        password: '',
        passwordConfirmation: '',
      })
      setModalIsOpen(true)
      setOnModal(true)
      nameInput.current.focus()
    }
  }

  return (
    <form>
      <div className="form-inner">
        <h2 className="title">Create Account</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            ref={nameInput}
          />
          {errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="error">
              {errors.email}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="id">ID</label>
          <br />
          <input
            type="text"
            name="id"
            value={user.id}
            onChange={handleChange}
          />
          {errors.id && (
            <p className="error">{errors.id}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
          </label>
          <br />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="error">
              {errors.password}
            </p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirmation">
            Password Confirmation
          </label>
          <br />
          <input
            type="password"
            name="passwordConfirmation"
            value={user.passwordConfirmation}
            onChange={handleChange}
          />
          {errors.passwordConfirmation && (
            <p className="error">
              {errors.passwordConfirmation}
            </p>
          )}
        </div>
        <button
          className="submit"
          onClick={onClickSubmit}
        >
          Sign Up
        </button>
      </div>
      {onModal && (
        <UserList userList={userList} />
      )}
    </form>
  )
}

export default Form
