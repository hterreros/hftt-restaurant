import React from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const App = () => {
  return (
    <>
    <NavBar />
    <HomePage />
    <Footer />
    </>
  )
}

export default App