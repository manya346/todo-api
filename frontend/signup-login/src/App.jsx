import { Link } from "react-router-dom";
import React from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return(
    <Router>
      <div>
        <Routes>
          <Route exact="true" path='/signup' element={<SignUp />} />
          <Route exact="true" path='/' element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}
