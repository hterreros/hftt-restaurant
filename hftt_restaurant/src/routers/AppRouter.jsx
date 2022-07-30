import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from '../components/NavBar'
import AboutUs from '../pages/AboutUs'
import Homepage from '../pages/HomePage'

const AppRouter = () => {
  return (
    <Router>
    <NavBar />
    <Routes>
     <Route path='/' element={<Homepage />} />   
     <Route path='/nosotros' element={<AboutUs />} />   
    </Routes>
    </Router>
  )
}

export default AppRouter