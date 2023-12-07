import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [usercnt,setUserCnt] = useState(0);
  const [categorycnt,setCategory] = useState(0);
  const [productcnt,setProduct] = useState(0);

  useEffect(()=>{
      axios.get(`http://localhost:8000/user`).then((res)=>{
          setUserCnt(res.data.length)
      }).catch((err)=>{
        console.log(err);
        return false
      })

      axios.get(`http://localhost:8000/catagory`).then((res)=>{
        setCategory(res.data.length)
    }).catch((err)=>{
      console.log(err);
      return false
    })

    axios.get(`http://localhost:8000/product`).then((res)=>{
      setProduct(res.data.length)
    }).catch((err)=>{
      console.log(err);
      return false
    })
  },[])
  return (
    <main id="main" class="main">
    <div className='container'>
      <div class="align-center">
        <div className='row justify-content-center'>

              <div className="col-3 col-md-6">
              <div className="card info-card sales-card">
                <div className="card-body">
                  <h5 className="card-title">User <span>| count</span></h5>
                  <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                      <i className="bi bi-cart" />
                    </div>
                    <div className="ps-3">
                      <h6>{usercnt}</h6>
                      <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <div class="col-3 col-md-6">
            <div class="card info-card revenue-card">
              <div class="card-body">
                <h5 class="card-title">catagory <span>| This Month</span></h5>

                <div class="d-flex align-items-center">
                  <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="bi bi-currency-dollar"></i>
                  </div>
                  <div class="ps-3">
                    <h6>{categorycnt}</h6>
                    <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>

                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-3 col-6">

            <div class="card info-card customers-card">
              <div class="card-body">
                <h5 class="card-title">product <span>| This Year</span></h5>

                <div class="d-flex align-items-center">
                  <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="bi bi-people"></i>
                  </div>
                  <div class="ps-3">
                    <h6>{productcnt}</h6>
                    <span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
    </main>

  )
}

export default AdminDashboard
