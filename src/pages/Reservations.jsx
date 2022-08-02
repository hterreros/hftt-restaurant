import React from 'react'
import Title from '../components/Title'
const img = require ('../images/reserva.PNG')

const Reservations = () => {
  return (
    <>
    <Title nombre="Reservaciones" />
    <a>
      <img src={img}/>
      </a>
    </>
  )
}

export default Reservations