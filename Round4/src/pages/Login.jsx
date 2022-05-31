import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ onLogin, isLogged }) => {
  const navigate = useNavigate()

  const onSubmitLogin = (e) => {
    e.preventDefault()
    onLogin()
    navigate('/category')
  }

  return (
    <div className="login">
      <form onSubmit={onSubmitLogin} className="login-inner">
        <h1>Log In</h1>
        <label htmlFor="">
          ID:
          <input type="text" />
        </label>
        <label htmlFor="">
          Passwrod:
          <input type="password" />
        </label>
        <button>Log In</button>
      </form>
    </div>
  )
}

export default Login
