import React, {useEffect, useState } from 'react';
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

  const getAllProducts =  () => {
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
          <div className="category-item-container has-scrollbar">
            <div className="category-item">
              <div className="category-img-box">
                <img src="https://i.ibb.co/hR5FGwH/product-7.jpg" alt="dress & frock" width={30} />
              </div>
              <div className="category-content-box">
                <div className="category-content-flex">
                  <h3 className="category-item-title">Dress &amp; frock</h3>
                  <p className="category-item-amount">(53)</p>
                </div>
                <a href="#" className="category-btn">Show all</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-container row ">
          <div className="sidebar col-md-3 has-scrollbar">
            <div className="sidebar-category">
              <div className="sidebar-top">
                <h2 className="sidebar-title">Category</h2>
                <button className="sidebar-close-btn" >
                  <ion-icon name="close-outline" />
                </button>
              </div>
              <ul className="sidebar-menu-category-list">
                <li className="sidebar-menu-category">
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
                    <button onClick={ () => category_Filter("all")} style={{width:'100%'}}  type="button" class="btn btn-outline-primary">All</button>

                  <ul className="sidebar-submenu-category-list" data-accordion>
                    <li className="sidebar-submenu-category">
                      <a href="#" className="sidebar-submenu-title">
                        <p className="product-name">Shirt</p>
                        <data value={300} className="stock" title="Available Stock">300</data>
                      </a>
                    </li>
                    <li className="sidebar-submenu-category">
                      <a href="#" className="sidebar-submenu-title">
                        <p className="product-name">shorts &amp; jeans</p>
                        <data value={60} className="stock" title="Available Stock">60</data>
                      </a>
                    </li>
                    <li className="sidebar-submenu-category">
                      <a href="#" className="sidebar-submenu-title">
                        <p className="product-name">jacket</p>
                        <data value={50} className="stock" title="Available Stock">50</data>
                      </a>
                    </li>
                    <li className="sidebar-submenu-category">
                      <a href="#" className="sidebar-submenu-title">
                        <p className="product-name">dress &amp; frock</p>
                        <data value={87} className="stock" title="Available Stock">87</data>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="product-showcase">
              <h3 className="showcase-heading">best sellers</h3>
              <div className="showcase-wrapper">
                <div className="showcase-container">
                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <img src="https://i.ibb.co/sqnY1pG/category-1.jpg" alt="baby fabric shoes" width={75} height={75} className="showcase-img" />
                    </a>
                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">baby fabric shoes</h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <div className="price-box">
                        <del>$5.00</del>
                        <p className="price">$4.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <img src="https://i.ibb.co/sqnY1pG/category-1.jpg" alt="men's hoodies t-shirt" className="showcase-img" width={75} height={75} />
                    </a>
                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">men's hoodies t-shirt</h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-half-outline" />
                      </div>
                      <div className="price-box">
                        <del>$17.00</del>
                        <p className="price">$7.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <img src="https://i.ibb.co/sqnY1pG/category-1.jpg" alt="girls t-shirt" className="showcase-img" width={75} height={75} />
                    </a>
                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">girls t-shirt</h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star-half-outline" />
                      </div>
                      <div className="price-box">
                        <del>$5.00</del>
                        <p className="price">$3.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <img src="https://i.ibb.co/sqnY1pG/category-1.jpg" alt="woolen hat for men" className="showcase-img" width={75} height={75} />
                    </a>
                    <div className="showcase-content">
                      <a href="#">
                        <h4 className="showcase-title">woolen hat for men</h4>
                      </a>
                      <div className="showcase-rating">
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                        <ion-icon name="star" />
                      </div>
                      <div className="price-box">
                        <del>$15.00</del>
                        <p className="price">$12.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-box small-container col-md-9">
              <h2 className="title">Featured Products</h2>
            <div className="row">
              {
                product.map((v) => {
                  return (
                    <div className="col-4" key={v.id}>
                      <a href="product_details.html"><img src={v.image} alt /></a>
                      <a href="product_details.html">
                        <h4>{v.name}</h4>
                      </a>
                      <div className="rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="far fa-star" />
                      </div>
                      <p>₹500.00</p>
                      <p>{v.catagory}</p>
                        <div className='btn btn-primary'>
                        <Link to={`/ProductDetails/${v.id}`} className='text-white' style={{textDecoration : 'none'}}>
                            <h6 className='p-0 m-0'>VIEW MORE</h6>
                        </Link>
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>
        </div>
    </>
  )
}

export default Product
