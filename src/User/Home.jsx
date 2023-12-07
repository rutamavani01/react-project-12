import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const getAllProducts = async () => {
    axios.get(` http://localhost:8000/product`)
      .then((res) => {
        setProduct(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const  AddtoCart = () => {
    navigate("/Product");
  }

  useEffect(() => {
    getAllProducts();
  },[])
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" type="text/css" href="./style.css" />
      <title>Document</title>

      {/* Featured categories */}
      <div className="slider">
        <div className='container'>
        <div className="row">
        <div className="col-2">
          <h1>
            Give Your Workout <br />
            A New Style!
          </h1>
          <p>
            Success isn't always about greatness. It's about consistency.
            Consistent <br />hard work gains success. Greatness will come.
          </p>
          <a href="/Product" target="_blank" rel="noopener noreferrer" className="btn">Explore Now →</a>
        </div>
        <div className="col-2">
          <img src="https://i.ibb.co/QpTmdX5/image1.png" alt />
        </div>
      </div>
        </div>
      </div>
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src="https://i.ibb.co/sqnY1pG/category-1.jpg" alt />
            </div>
            <div className="col-3">
              <img src="https://i.ibb.co/GCJLQRQ/category-2.jpg" alt />
            </div>
            <div className="col-3">
              <img src="https://i.ibb.co/wYsXqP5/category-3.jpg" alt />
            </div>
          </div>
        </div>
      </div>

      {/* Featured products */}
      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          {
            product.map((v) => {
              return (
                <div className="col-4">
                  <a href="product_details.html"><img src={v.image} alt /></a>
                  
                  <div className="rating">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                  </div>
                  <a href="product_details.html">
                    <h5>{v.name}</h5>
                  </a>
                  <p>₹500.00</p>
                  <button className='btn btn-primary' onClick={()=>AddtoCart()}>Add + </button>
                </div>
              )
            })
          }

        </div>


        <h2 className="title">Latest Products</h2>
        {/* <div className="row">
          <div className="col-4">
            <img src="https://i.ibb.co/bQ5t8bR/product-5.jpg" alt />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </div>
            <p>₹500.00</p>
          </div>
          <div className="col-4">
            <img src="https://i.ibb.co/vVpTyBD/product-6.jpg" alt />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </div>
            <p>₹500.00</p>
          </div>
          <div className="col-4">
            <img src="https://i.ibb.co/hR5FGwH/product-7.jpg" alt />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <p>₹500.00</p>
          </div>
          <div className="col-4">
            <img src="https://i.ibb.co/QfCgdXZ/product-8.jpg" alt />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </div>
            <p>₹500.00</p>
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <img src="https://i.ibb.co/nw5xZwk/product-9.jpg" alt />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
            </div>
            <p>₹500.00</p>
          </div>
          <div className="col-4">
            <img src="https://i.ibb.co/9HCsmjf/product-10.jpg" alt />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </div>
            <p>₹500.00</p>
          </div>
          <div className="col-4">
            <img src="https://i.ibb.co/JQ2MBHR/product-11.jpg" alt />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <p>₹500.00</p>
          </div>
          <div className="col-4">
            <img src="https://i.ibb.co/nRZMs6Y/product-12.jpg" alt />
            <h4>Red Printed T-shirt</h4>
            <div className="rating">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
              <i className="far fa-star" />
            </div>
            <p>₹500.00</p>
          </div>
        </div> */}
      </div>
      {/* offer */}
      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src="https://i.ibb.co/HF5TncZ/exclusive.png" alt className="offer-img" />
            </div>
            <div className="col-2">
              <p>Exclusively Available on RedStore</p>
              <h1>Smart Band 4</h1>
              <small>The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                AMOLED color full-touch display with adjustable brightness, so
                everything is clear as can be.</small>
              <br />
              <a href="#" className="btn">Buy Now →</a>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className="testimonial">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <i className="fas fa-quote-left" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, quae molestias error id est voluptatibus quos amet
                numquam aspernatur nam cumque ullam? Veritatis eveniet et, maxime
                eaque soluta quas modi.
              </p>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <img src="https://i.ibb.co/zfXD2Tx/user-1.png" alt />
              <h3>Marta W.</h3>
            </div>
            <div className="col-3">
              <i className="fas fa-quote-left" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, quae molestias error id est voluptatibus quos amet
                numquam aspernatur nam cumque ullam? Veritatis eveniet et, maxime
                eaque soluta quas modi.
              </p>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <img src="https://i.ibb.co/FVyK1KM/user-2.png" alt />
              <h3>Rula P.</h3>
            </div>
            <div className="col-3">
              <i className="fas fa-quote-left" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis, quae molestias error id est voluptatibus quos amet
                numquam aspernatur nam cumque ullam? Veritatis eveniet et, maxime
                eaque soluta quas modi.
              </p>
              <div className="rating">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
                <i className="far fa-star" />
              </div>
              <img src="https://i.ibb.co/jZ3tQqK/user-3.png" alt />
              <h3>Vika Z.</h3>
            </div>
          </div>
        </div>
      </div>
      {/* brands */}
      <div className="brands">
        <div className="small-container">
          <div className="row">
            <div className="col-5">
              <img src="https://i.ibb.co/Gfwzz1S/logo-godrej.png" alt />
            </div>
            <div className="col-5">
              <img src="https://i.ibb.co/vjrRZFM/logo-oppo.png" alt />
            </div>
            <div className="col-5">
              <img src="https://i.ibb.co/3zs234S/logo-coca-cola.png" alt />
            </div>
            <div className="col-5">
              <img src="https://i.ibb.co/7Wt343W/logo-paypal.png" alt />
            </div>
            <div className="col-5">
              <img src="https://i.ibb.co/GVSNwJD/logo-philips.png" alt />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}

      {/* js for toggle menu */}
    </div>
  )
}

export default Home;

