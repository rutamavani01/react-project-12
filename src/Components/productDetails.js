import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import UserLogin from '../User/Userauth';

const ProductDetails = () => {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    const getSingleProductRecord = async () => {
        try {
            let single = await axios.get(`http://localhost:8000/product/${productId}`);
            if (single) {
                setProduct(single.data)
            } else {
                console.log("record not fetch");
                return false;
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    const Addtocart = (productId) => {
        if (!UserLogin()) {
            alert("Please Login!!");
            navigate('/Login');
        } else {
            axios.get(`http://localhost:8000/carts?productId=${productId}&userId=${UserLogin().id}`)
                .then((res) => {
                    if (res.data.length > 0) {
                        alert("Product already add in cart")
                        return false
                    } else {
                        axios.get(`http://localhost:8000/product/${productId}`)
                            .then((res) => {
                                console.log(res.data);
                                axios.post(`http://localhost:8000/carts`, {
                                    name: res.data.name,
                                    image: res.data.image,
                                    price: res.data.price,
                                    category: res.data.category,
                                    quantity: res.data.quantity,
                                    productId: productId,
                                    userId: UserLogin().id
                                }).then((res) => {
                                    alert("Product successfully add");
                                }).catch((err) => {
                                    console.log(err);
                                    return false;
                                })
                            }).catch((err) => {
                                console.log(err);
                                return false;
                            })
                    }
                }).catch((err) => {
                    console.log(err);
                    return false;
                })
        }
    }

    useEffect(() => {
        getSingleProductRecord();
    }, []);

    return (
        <div className="product-featured container">
            <h2 className="title">Deal of the day</h2>
            <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
                    <div className="showcase row">
                        <div className="showcase-banner col-md-4">
                            <img src={product.image} style={{ width: '300px' }} className="showcase-img" />
                        </div>
                        <div className="showcase-content col-md-6">
                            <div className="showcase-rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="far fa-star" />
                            </div>
                            <a href="#">
                                <h2 className="showcase-title fw-bold">shampoo, conditioner &amp; facewash packs</h2>
                            </a>
                            <h3 className="showcase-desc">
                                Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                dolor dolor sit amet consectetur Lorem ipsum dolor
                            </h3>
                            <del>$500.00</del>
                            <div className="price-box">
                                <h4>Rs: {product.price} only</h4>
                            </div>
                            <button onClick={() => Addtocart(product.id)} className="add-cart-btn btn btn-primary">add to cart</button>
                            <div className="showcase-status">
                                <div className="wrapper">
                                    <p>
                                        already sold: <b>20</b>
                                    </p>
                                    <p>
                                        available: <b>40</b>
                                    </p>
                                </div>
                            </div>
                            <div className="countdown-box">
                                <p className="countdown-desc">
                                    Hurry Up! Offer ends in:
                                </p>
                                <div className="countdown">
                                    <div className="countdown-content">
                                        <p className="display-number">360</p>
                                        <p className="display-text">Days</p>
                                    </div>
                                    <div className="countdown-content">
                                        <p className="display-number">24</p>
                                        <p className="display-text">Hours</p>
                                    </div>
                                    <div className="countdown-content">
                                        <p className="display-number">59</p>
                                        <p className="display-text">Min</p>
                                    </div>
                                    <div className="countdown-content">
                                        <p className="display-number">00</p>
                                        <p className="display-text">Sec</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <NavLink to={'/product'}>
                            <button className='btn'>continue shopping</button>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default ProductDetails
