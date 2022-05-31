import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const MyHeader = () => {
  const navigate = useNavigate()

  return (
    <header>
      <div className="back">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="home">
        <button onClick={() => navigate('/')}>Home</button>
      </div>
      <div className="next">
        <button onClick={() => navigate(1)}>Next</button>
      </div>
    </header>
  )
}

export default MyHeader
