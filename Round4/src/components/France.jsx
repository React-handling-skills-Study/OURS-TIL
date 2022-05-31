import React from 'react'
import { useNavigate, Outlet, Link } from 'react-router-dom'

const France = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Outlet />
      <h1>This is a France</h1>
      <div className="image-flag">
        <img
          className="flag"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1200px-Flag_of_France.svg.png"
          alt=""
        />
      </div>
      <h1>If you want go France? </h1>
      <h2>then, click the image</h2>
      <Link to="frCity">
        <div className="image-scenery">
          <img
            // onClick={() => navigate('fr-city')}
            src="https://previews.123rf.com/images/mlsj/mlsj1710/mlsj171000004/88178237-landscape-scenery-view-of-eiffel-tower-in-paris-france.jpg"
            alt=""
            className="scenery"
          />
        </div>
      </Link>
    </div>
  )
}

export default France
