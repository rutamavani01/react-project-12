import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../style.css'
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [catagory, setCatagory] = useState([]);//Catagory

  // const AddtoCart = () => {
  //   navigate("/Product");
  // }

  const getAllProducts = () => {
    axios.get(`http://localhost:8000/product`)
      .then((res) => {
        setProduct(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const allCatagory = () => {
    axios.get(` http://localhost:8000/catagory`)
      .then((res) => {
        setCatagory(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const category_Filter = (catagory) => {
    if (catagory === "all") {
      getAllProducts();
    } else {
      axios.get(`http://localhost:8000/product?catagory=${catagory}`)
        .then((res) => {
          setProduct(res.data);
        }).catch((err) => {
          console.log(err);
          return false;
        })
    }
  }

  useEffect(() => {
    getAllProducts();
    allCatagory();
  }, [])
  return (
    <>
      <div className="category">
        <div className="container">
          <div className="category-item">
            <div className="category-img-box">
              <img src="https://i.ibb.co/hR5FGwH/product-7.jpg" alt="dress & frock" width={30} />
            </div>
            <div className="category-content-box p-4">
              <div className="category-content-flex">
                <h3 className="category-item-title">Dress &amp; frock</h3>
                <ul className=" row justify-centent-end">
                  <li className="row ">
                    {
                      catagory.map((v) => {
                        return (
                          <>
                            <div className="menu-title-flex m-2">
                              <button onClick={() => category_Filter(v.catagoryName)} style={{ width: '100%' }} className="btn btn-outline-primary m-4">{v.catagoryName}</button>
                            </div>
                            <div>
                              <ion-icon name="add-outlie" className="add-icon" />
                              <ion-icon name="remove-outline" className="remove-icon" />
                            </div>
                          </>

                        )
                      })
                    }
                    <button className='menu-title-flex m-2' onClick={() => category_Filter("all")} style={{ width: '20%' }} type="button" class="btn btn-outline-primary">All</button>
                  </li>
                </ul>
              </div>
              <a href="#" className="category-btn">Show all</a>
            </div>
          </div>
        </div>
      </div>

      <div className="product-container row ">
        <div className="product-box ">
          <div className='container'>
            <h2 className="title">Featured Products</h2>
            <div className="row">
              {
                product.map((v) => {
                  return (
                    <div className="col-4" key={v.id}>
                      <a href="product_details.html"><img src={v.image} alt /></a>
                      <h3>{v.catagory}</h3>
                      <div className="rating d-flex">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <span className='text-align-end'>10% off</span>
                      <h4>{v.name}</h4>
                      <h3>price:- {v.price}</h3>
                      <div className='btn'>
                        <Link to={`/ProductDetails/${v.id}`} className='text-white' style={{ textDecoration: 'none' }}>
                          <h5 className='p-1 m-0 text-white'>VIEW MORE</h5>
                        </Link>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
