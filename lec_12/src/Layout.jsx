import React from 'react'
import Header from './componets/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './componets/Footer/Footer'

function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
