import React from 'react'
const img1=require('../images/facebook.png')
const img2=require('../images/whatsapp.PNG')
const img3=require('../images/instagram.PNG')


const Footer = () => {
  return (
    <div className="col-md-4 d-flex align-items-center">
      <a
        href="/"
        className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
      >
        <svg className="bi" width={30} height={24}>
          <use xlinkHref="#bootstrap" />
        </svg>
      </a>
      <span className="text-muted">© 2022 - Sabores &amp; Culinarios</span>
      <a href="#">
        <img src={img1} className="iconos" />
      </a>
      <a href="#">
        <img src={img2} className="iconos" />
      </a>
      <a href="#">
        <img src={img3} className="iconos" />
      </a>
      {/* <img src="images/logo.png" className="abajo" /> */}
    </div>
  );
}

export default Footer