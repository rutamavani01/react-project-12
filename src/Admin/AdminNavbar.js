import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';

const AdminNavbar = () => {
  return (
    <>
      <AdminHeader/>
      <Outlet />
    </>
  )
}

export default AdminNavbar
