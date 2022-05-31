import React from 'react'
import dummys from '../components/Dummys'

const Distance = () => {
  const dummyItems = dummys
  const countryList = dummyItems.reduce((acc, cur) => {
    if (acc.findIndex(({ country }) => country === cur.country) === -1) {
      acc.push(cur)
    }
    return acc
  }, [])

  return (
    <div>
      <h1>Distance</h1>
      <div className="distance-list">
        {countryList?.map((it) => (
          <div className="distance-items" key={it.id}>
            <div>
              <span>{it.country} : </span>
              <span className="distance">{it.normaldist} km</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Distance
