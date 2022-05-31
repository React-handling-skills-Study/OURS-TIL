import React from 'react'
import dummys from '../components/Dummys'

const Sale = () => {
  const dummyItems = dummys

  return (
    <div>
      <h1>Sale</h1>
      <div className="sale-list">
        {dummyItems?.map((it) => (
          <div className="sale-items" key={it.id}>
            {it.isSales ? (
              <div>
                <p className="countryName">{it.country}</p>
                <p>{it.addres}</p>
                <p>{it.text}</p>
              </div>
            ) : (
              <p className="no-sale">No Sale</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sale
