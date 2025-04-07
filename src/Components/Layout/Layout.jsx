import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div>
      <Sidebar/>
      <div className='main-content'>
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
