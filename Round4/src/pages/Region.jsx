import dummys from '../components/Dummys'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'

const Region = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const isSort = searchParams.get('sort') === 'ascending' //true면 -> 오름차순 a, b, c

  const location = useLocation()

  const navigate = useNavigate()

  const onSort = () => {
    navigate({
      pathname: location.pathname,
      search: `?sort=${isSort ? 'descending' : 'ascending'}`
    })
  }

  const dummyItems = dummys

  return (
    <div>
      <div className="btn-sort">
        <button>Sort</button>
      </div>
      <div className="region-list">
        {dummyItems.map((it) => (
          <div className="region-items" key={it.id}>
            <div>
              <h3>{it.region}</h3>
              <p>
                <span>{it.date}</span> {''}
              </p>
              <p>{it.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Region
