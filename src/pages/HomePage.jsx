import React from 'react'
import Title from '../components/Title'
const img = require('../images/restaurante2.png')

const Homepage = () => {
  return (
    <>
    <Title nombre="Inicio" />
    <div className="container">
    <img src={img} alt="restaurante" />
    </div>
    </>
  )
}

export default Homepage