import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../Components/Layout'
import Home from '../Pages/Home'
import './App.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
