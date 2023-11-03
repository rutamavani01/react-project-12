import React from 'react'
import AdminDashboard from './AdminDashboard'
import { Outlet } from 'react-router-dom';
import Headr from '../Components/Header';

const AdminNavbar = () => {
  return (
    <>
      <Headr/>
      <AdminDashboard/>
         <Outlet/>
    </>
  )
}

export default AdminNavbar
