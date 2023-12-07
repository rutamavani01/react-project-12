import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminProfile = () => {
    const [admin,setAdmin] = useState([]);

    const getAdmin = () => {
        axios.get(`http://localhost:8000/admin`)
        .then((res)=>{
            setAdmin(res.data);
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }
    useEffect(()=>{
        getAdmin();
    },[])
  return (
    <main id="main" class="main">
        <div className='row justify-content-center'>
        {
                admin.map((v)=>{
                    return(
                        <div className="col-3 col-md-6">
                        <div className="card info-card sales-card">
                          <div className="card-body">
                            <h5 className="card-title">Admin</h5>
                            <div className="d-flex align-items-center">
                              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <i className="bi bi-cart" />
                              </div>
                              <div className="ps-3">
                                <h4>{v.id}</h4>
                                <h6>{v.email}</h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
          
                    )
                })
            }
        </div>
    </main>
  )
}

export default AdminProfile;
