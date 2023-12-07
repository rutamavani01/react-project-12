import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';

const AdminCatagory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [catagoryName,setcatagoryName] = useState("");
  const [edit,setEdit] = useState("");

  const getCatagory = () => {
    axios.get(`http://localhost:8000/catagory`)
    .then((res)=>{
      setCategoryData(res.data);
    }).catch((err)=>{
      console.log(err);
      return false;
    })
  }

  const handleSubmit = () => {
    if(edit) {
      axios.put(`http://localhost:8000/catagory/${edit}`,{
        catagoryName : catagoryName
      }).then((res)=>{
        alert("Added!");
        setcatagoryName("");
        setEdit("");
        getCatagory();
      }).catch((err)=>{
        console.log(err);
        return false;
      })
    }else{
      axios.post(`http://localhost:8000/catagory`,{
        catagoryName : catagoryName
      }).then((res)=>{
        alert("Added!");
        setcatagoryName("");
        getCatagory();
      }).catch((err)=>{
        console.log(err);
        return false;
      })
    }
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/catagory/${id}`)
    .then((res)=>{
        setcatagoryName("");
        getCatagory();
    }).catch((err)=>{
      console.log(err);
      return false; 
    })
  }

  const handleEdit = (id) => {
    axios.get(`http://localhost:8000/catagory/${id}`)
    .then((res)=>{
      setcatagoryName(res.data.catagoryName);
      setEdit(id);
    }).catch((err)=>{
      console.log(err);
      return false;
    })
  }

  useEffect(()=>{
    getCatagory();
  },[])

  return (
    <main id="main" class="main">
       <center>
       <h1>Admin catagory</h1>
        <table border={1}>
                <tbody>
                    <tr>
                        <td>Category :</td>
                        <td><input type="category" onChange={(e) => setcatagoryName(e.target.value)} value={catagoryName} name="catagoryName" placeholder="Enter category" /></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        
                            {
                                edit ? (  <button  onClick={()=>handleSubmit()}>Edit</button>)
                                        : (  <button onClick={()=>handleSubmit()}>Submit</button>)
                            }
                        </td>
                    </tr>
                </tbody>
            </table><br></br>

        <table border={1}>
         <tbody>
          <tr>
            <td>id</td>
            <td>catagory</td>
            <td>action</td>
          </tr>
          {
              categoryData.map((v)=>{
                return(
                  <tr key={v.id}>
                    <td>{v.id}</td>
                    <td>{v.catagoryName}</td>
                    <td>
                      <button className='m-2'  onClick={()=>handleDelete(v.id)}>Delete</button>
                      <button className='m-2'  onClick={()=>handleEdit(v.id)}>Edit</button>
                    </td>
                  </tr>
                )
              })
          }
         </tbody>
        </table>
       </center>
    </main>
  )
}

export default AdminCatagory;
