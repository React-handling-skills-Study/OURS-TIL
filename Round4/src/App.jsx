import './css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'

import MyHeader from './components/MyHeader'
import Category from './pages/Category'
import Country from './pages/Country'
import Region from './pages/Region'
import City from './pages/City'
import Sale from './pages/Sale'
import Distance from './pages/Distance'

import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/Home'
import Countries from './components/Countries'
import dummys from './components/Dummys'

function App() {
  const dummyItems = dummys
  const [isLogged, setIsLogged] = useState(false)

  const onLogin = () => {
    setIsLogged((prev) => !prev)
    // console.log(isLogged)
  }

  const countryList = dummyItems.reduce((acc, cur) => {
    if (acc.findIndex(({ country }) => country === cur.country) === -1) {
      acc.push(cur)
    }
    return acc
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader />
        <Routes>
          <Route path="/" element={<Home isLogged={isLogged} onLogin={onLogin} />}>
            <Route path="category" element={<Category isLogged={isLogged} onLogin={onLogin} />} />
          </Route>
          <Route
            path="/login"
            element={!isLogged && <Login isLogged={isLogged} onLogin={onLogin} />}
          />
          <Route path="/country/:country" element={<Countries countryList={countryList} />} />
          <Route path="/country" element={<Country countryList={countryList} />} />
          <Route path="/region" element={<Region />} />
          <Route path="/city" element={<City />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/distance" element={<Distance />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
