import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../Components/Layout'
import Home from '../Pages/Home'
import './App.css'
import BestSellerBookPage from '../Pages/BestSellerBookPage'
import NewArrivalPage from '../Pages/NewArrivalPage'
import About from '../Pages/About'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path='/best-selling' element={<BestSellerBookPage />} />
      <Route path='/new-arrival' element={<NewArrivalPage />} />
      <Route path='/about' element={<About />} />
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
