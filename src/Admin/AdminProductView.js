import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdminProductView = () => {
    const [product, setProduct] = useState([]);
    const [marketStatus, setMarketStatus] = useState(["special", "trending", "latest", "upcoming"]);
    const [status,setStatus] = useState(["instock","outstock"]);
    const [edit,setEdit] = useState("");
    const [name,setName] = useState("");
    const [price,setPrice] = useState("");
    const [quantity,setquantity] = useState("");


    const UpdateMarketStatus = (updateId,value) => {
        axios.patch(`http://localhost:8000/product/${updateId}`, {
            marketStatus: value
        }).then((res) => {
            alert("updated")
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

    const updateStatus = (updateId,value) => {
        axios.patch(`http://localhost:8000/product/${updateId}`,{
            status : value
        }).then((res)=>{
            alert("updated")
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    // const handleSubmit = (id) => {
    //     if (edit) {
    //         axios.put(`http://localhost:8000/product/${edit}`, {
    //             product: product
    //         })
    //             .then((res) => {
    //                 alert("product successfully Update");
    //                 setProduct("");
    //                 setEdit("");
    //                 fetchProduct();
    //             }).catch((err) => {
    //                 console.log(err);
    //                 return false;
    //             })
    //     } else {
    //         axios.post(`http://localhost:8000/product`, {
    //             product: product
    //         })
    //             .then((res) => {
    //                 alert("product successfully add");
    //                 setProduct("");
    //                 fetchProduct();
    //             }).catch((err) => {
    //                 console.log(err);
    //                 return false;
    //             })
    //     }
    //     setEdit(false);
    // }

    const fetchProduct = () => {
        axios.get(`http://localhost:8000/product`)
        .then((res)=>{
            setProduct(res.data);
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/product/${id}`)
        .then((res)=>{
            alert("delete");
            fetchProduct();
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const handleEdit = (id) => {
     axios.get(`http://localhost:8000/product/${id}`)
     .then((res)=>{
        setProduct(res.data.product);
        setEdit(id);
     }).catch((err)=>{
        console.log(err);
        return false;
     })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/product`)
            .then((res) => {
                setProduct(res.data);
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }, []);
    useEffect(()=>{
        fetchProduct();
    },[])

    return (
        <main id="main" class="main">
            {/* <h1>Admin product view page</h1> */}
            <div>
            <table border={1} style={{width: "55%"}}>
                <tr>
                    <td>Id</td>
                    <td>name</td>
                    <td>price</td>
                    <td>catagory</td>
                    <td>marketstatus</td>
                    <td>status</td>
                    <td>quantity</td>
                    <td>action</td>
                </tr>
                <tbody>
                    {
                        product.map((v) => {
                            return (
                                <tr>
                                    <td>{v.id}</td>
                                    <td>{v.name}</td>
                                    <td>{v.price}</td>
                                    <td>{v.catagory}</td>
                                    <td>
                                        <select onChange={(e) => UpdateMarketStatus(v.id, e.target.value)}>
                                            <option value="">select-status</option>
                                            {
                                                marketStatus.map((val) => {
                                                    return (v.marketStatus === val ? <option val={v.marketStatus} selected>{v.marketStatus}</option>
                                                                                  : <option>{val}</option>)
                                                })
                                            }
                                        </select>
                                    </td>
                                    <td>
                                        <select onChange={(e) => updateStatus(v.id, e.target.value)}>
                                            <option>select-status</option>
                                            {
                                                status.map((val) => {
                                                    return (v.status === val ? <option val={v.status} selected>{v.status}</option>
                                                                            :<option>{val}</option>)
                                                })
                                            }
                                        </select>
                                    </td>
                                    <td>{v.quantity}</td>
                                    <td>
                                        <button className='btn btn-outline-danger' onClick={()=>handleDelete(v.id)}><i class="fa-solid fa-trash"></i></button>
                                        {/* {
                                            edit ? (<button onClick={()=>handleEdit(v.id)}>Edit</button>)
                                            :(<button onClick={()=>handleEdit(v.id)}>Submit</button>)
                                        } */}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </main>
    )
}

export default AdminProductView
