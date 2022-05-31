import React from 'react'
import dummys from '../components/Dummys'

const City = () => {
  const dummyItems = dummys
  const countryList = dummyItems.reduce((acc, cur) => {
    if (acc.findIndex(({ country }) => country === cur.country) === -1) {
      acc.push(cur)
    }
    return acc
  }, [])

  return (
    <div>
      <h1>City</h1>
      <div className="city-list">
        {dummyItems.map((it) => (
          <div className="city-items" key={it.id}>
            <div>{it.city}</div>
          </div>
        ))}
      </div>
      {/* <div className="city-list">
        {countryList?.map((it) => (
          <div className="city-items" key={it.id}>
            <div>{it.city}</div>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default City
