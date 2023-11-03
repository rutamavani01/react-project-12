import React from 'react';
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const AdminProduct = () => {

  const [catagory,setcatagory] = useState([]);
  const [catagory_name,setCatagory_name] = useState("");
  const [name,setName] = useState("");
  const [image,setImage] = useState("");
  const [price,setPrice] = useState("");
  const [Qauntity,setQauntity] = useState("");
  const [marketstatus,setMarketstatus] = useState("");
  const [status,setStatus] = useState("");

  const handleSubmit = () => {
    axios.post(`http://localhost:8000/product`,{
      catagory : catagory_name,
      name:name,
      image : image,
      price : price,
      Qauntity,Qauntity,
      marketstatus : marketstatus,
      status : status
    }).then((res)=> {
      alert("Added!!!!!!");
    setCatagory_name("")
    }).catch((err)=>{
      console.log(err);
      return false;
    })
  }

  useEffect(()=>{
    axios.get(`http://localhost:8000/catagory`)
    .then((res)=>{
      setcatagory(res.data)
    }).catch((err)=>{
      console.log(err);
      return false;
    })
  },[])

  return (
      <center>
         <h1>admin product page</h1>
        <table border={1}>
          <tr>
            <td>name</td>
            <input type='text' onChange={(e)=>setName(e.target.value)} name='name'/>
          </tr>
          <tr>
            <td>image</td>
            <input type='text' onChange={(e)=>setImage(e.target.value)} name='image'/>
          </tr>
          <tr>
            <td>price</td>
            <input type='text' onChange={(e)=>setPrice(e.target.value)} name='price'/>
          </tr>
          <tr>
            <td>quantity</td>
            <input type='text' onChange={(e)=>setQauntity(e.target.value)} name='quantity'/>
          </tr>
          <tr>
            <td>category</td>
            <select name='catagory' onChange={(e)=>setCatagory_name(e.target.value)}>
              <option value="">catagory</option>
              {
                catagory.map((v)=> {
                  return(
                    <option value={v.catagoryName}>{v.catagoryName}</option>
                    
                  )
                })
              }
            </select>
          </tr>
          <tr>
            <td>market status</td>
            <td>
              <select name='market-status' onChange={(e)=>setMarketstatus(e.target.value)}>
                <option value="">market-status</option>
                <option value="upcoming">Upcomming</option>
                <option value="latest">Latest</option>
                <option value="trending">Trending</option>
                <option value="special">Special</option>
                </select>
            </td>
          </tr>
          <tr>
            <td>status</td>
            <select name='status' onChange={(e)=>setStatus(e.target.value)}>
                <option value="">status</option>
                <option value="instock">Instock</option>
                <option value="outstock">outstock</option>
                </select>
          </tr>
          <tr>
            <td></td>
            <td><button type='button' onClick={()=>handleSubmit()}>submit</button></td>
          </tr>
        </table>
        <div className="nav-button">
        <button >
          <NavLink to={'/AdminProductView'}>View All Products</NavLink>
        </button>
        </div>
      </center>
  )
}

export default AdminProduct
