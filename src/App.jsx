import React from 'react'
import Navbar from './Comp/NavBar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Comp/Footer'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
        <Toaster/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default App