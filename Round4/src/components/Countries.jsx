import React from 'react'
import { useParams } from 'react-router-dom'

const Countries = ({ countryList }) => {
  const params = useParams()

  const country = countryList.filter((it) => params.country === it.country)
  return (
    <div>
      <div className="country-details">
        {country?.map((it) => (
          <div key={it.id}>
            <h1>This is a {it.country}</h1>
            <div className="image-flag">
              <img className="flag" src={it.image__flag} alt="" />
            </div>
            <h1>If you want go {it.country}? </h1>
            <h2>then, click the image</h2>
            <div className="image-scenery">
              <img src={it.image__scenery} alt="" className="scenery" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Countries
