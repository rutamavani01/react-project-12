import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
const AdminUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
      axios.get(`http://localhost:8000/user`)
          .then((res) => {
              setUsers(res.data)
          }).catch((err) => {
              console.log(err);
              return false;
          })
  }, [])

  return (
    <main id="main" class="main">
       <div className="ps-5 col-lg-12 pt-2">
            <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-5">
                <h3 className="text-center">View Users</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((val) => {
                                return (
                                    <tr>
                                        <td>{val.id}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <td>

                                            <NavLink  to={`/AdminUserDetail/${val.id}`}>
                                                <button className='btn btn-primary btn-sm'>View</button>
                                            </NavLink>


                                        </td>
                                    </tr>
                                )
                              })
                            }

                    </tbody>
                </table>

  

            </div>

        </div>
    </main>
  )
}

export default AdminUser
