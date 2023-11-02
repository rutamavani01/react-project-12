import React from 'react'
import AdminDashboard from './AdminDashboard'
import { Outlet } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <>
      <AdminDashboard/>
         <Outlet/>
    </>
  )
}

export default AdminNavbar
