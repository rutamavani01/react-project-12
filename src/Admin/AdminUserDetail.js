import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const AdminUserDetail = () => {
  const { userId } = useParams();
  const [cart, setCart] = useState([])
  const [user, setUser] = useState("");

  const getUserDetails = () => {
    axios.get(`http://localhost:8000/user/${userId}`)
      .then((res) => {
        setUser(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const getUserCartDetails = () => {
    axios.get(`http://localhost:8000/carts?userId=${userId}`)
      .then((res) => {
        setCart(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  useEffect(() => {
    getUserCartDetails();
    getUserDetails();
  }, [])
  return (
    <main id="main" class="main">
      <div className=" col-lg-12">
        <div className="mt-3 p-5">
          <h3 className="text-center">User Added Products</h3>

          <div className='container'>

            <div className='d-flex justify-content-between mb-3'>
              <div className='col-6'>
                <h5 className='p-2'> User name : <span style={{color:"blue"}}>{user.name}</span></h5>
              </div>
              <div className='col-6 text-end'>
                <h5 className='p-2'> Email : <span style={{color:"blue"}}> {user.email}</span></h5>
              </div>
            </div>
  
            <div className='row justify-content-between'>
              {
                cart.map((val) => {
                  return (
                    <div className='col-6 row mb-3'>
                      <div className='col-5'>
                        <img src={val.image} className="img-fluid rounded-start" alt="..." />

                      </div>
                      <div className='col-5'>
                        <p className="card-title">{val.name}</p>
                        <p >Qty:- {val.quantity}</p>
                        <p >Price :- {val.price}</p>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>

        </div>

      </div>
    </main>

  )
}

export default AdminUserDetail;
