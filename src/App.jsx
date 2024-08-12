import { useState } from 'react'
import { Route } from 'react-router-dom'
import NotFound from './pages/NotFound'



import './App.css'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {


  return (

    <div className="App">
      <Routes>
   <Route path='/' element ={<Home></Home>} ></Route>
   <Route path="*" element={<NotFound />} />
      </Routes>
    </div>

 
  )
}

export default App

