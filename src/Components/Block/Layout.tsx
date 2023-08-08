import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import HomePage from '../../Pages/HomePage'


const Layout = () => {
  return (
    <div>
      <Header />
        <Outlet/>
     
        {/* <HomePage /> */}
        <Footer/>
    </div>
  )
}

export default Layout