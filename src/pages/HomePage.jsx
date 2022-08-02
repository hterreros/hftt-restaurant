import React from 'react'
import Title from '../components/Title'
const img = require ('../images/restaurante2.PNG')
const Homepage = () => {
  return (
    <>
    <Title nombre="Inicio" />
    <a>
    <img src={img} alt="restaurante" />
    </a>
    </>
  )
}

export default Homepage