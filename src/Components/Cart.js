import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Userauth from '../User/Userauth';
import { NavLink, useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [total,setTotal] = useState(0);
    
    const calculateTotal = ()=>{
        let total = 0;
        cart.forEach((val)=> {
            total += val.quantity * val.price;
            console.log(val.quantity);
            console.log(val.price);
        });
        setTotal(total);
    }

    const getAllCart = () => {
        if (!Userauth()) {
            alert("Please Login")
            navigate('/product');
        } else {
            axios.get(`http://localhost:8000/carts?userId=${Userauth().id}`)
                .then((res) => {
                    setCart(res.data);
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
        }
    }

    const editCart = (id, quantity) => {
        let edit = cart.map((val) => {
            if (val.id === id) {
                return {
                    ...val,
                    quantity: parseInt(quantity)
                }
            }
            return val;
        })
        setCart(edit)

        let updateCart = edit.find((v) => {
            return v.id == id;
        })

        axios.patch(`http://localhost:8000/carts/${updateCart.id}`, {
            quantity: updateCart.quantity
        }).then((res) => {
            getAllCart();
        }).catch((err) => {
            console.log(err);
            return false;
        })
    }

    const deleteCart = (id) => {
        axios.delete(`http://localhost:8000/carts/${id}`)
            .then((res) => {
                getAllCart();
            }).catch((err) => {
                console.log(err);
                return false;
            })
    }
 
    useEffect(() => {
        getAllCart();
    }, [])

    useEffect(()=>{
        console.log(cart);
        calculateTotal();
    },[cart])

    return (
        <div className='container'>
            <h2 className='text-center p-4'>Cart</h2>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <NavLink to={'/product'}>
                                            <button className='btn'>continue shopping</button>
                                        </NavLink>
                                    </div>
            <div className='row justify-content-between'>
                {
                    cart.map((val) => {
                        return (
                            <div className="card p-4 mb-3"  >
                                <div className="row g-0">
                                    <div className="col-4">
                                        <img src={val.image} className="rounded-start" alt="..." />
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body ps-4">
                                            <h4 className="card-title">{val.name}</h4>

                                            <h4 className="card-title">Price :- {val.price}</h4>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                                            Qty :- <input type='number' value={val.quantity} onChange={(e) => editCart(val.id, e.target.value)} />
                                            <hr />
                                            <div className='btn btn-danger me-2 w-25' onClick={(e) => deleteCart(val.id, e.target.value)}>Delete</div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <h3>Total: {total}</h3>
        </div>
    )
}

export default Cart;
