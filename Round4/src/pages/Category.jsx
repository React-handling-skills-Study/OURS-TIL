import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Category = ({ isLogged, onLogin }) => {
  const navigate = useNavigate()

  const loginCheck = (country) => {
    isLogged ? navigate(`${country}`) : navigate('/login')
  }
  return (
    <>
      <div className="wrapper">
        <div className="country">
          <button onClick={() => loginCheck('/country')}>Country</button>
        </div>
        <div className="region">
          <button onClick={() => loginCheck('/region')}>Region</button>
        </div>
        <div className="city">
          <button onClick={() => loginCheck('/city')}>City</button>
        </div>
        <div className="sale">
          <button onClick={() => loginCheck('/sale')}>Sale</button>
        </div>
        <div className="distance">
          <button onClick={() => loginCheck('/distance')}>Distance</button>
        </div>
      </div>
    </>
  )
}

export default Category
