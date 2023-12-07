import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [catagory, setCatagory] = useState([]);//Catagory
  const [sortData, setSortData] = useState(""); //price

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = product.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(product.length / recordsPerPage)
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const change = (id) => {
    setCurrentPage(id);
  }

  pageNumbers.map((pageNumber) => {
    return (
      <button
        key={pageNumber}
        onClick={() => change(pageNumber)}
        className="btn btn-outline-primary"
      >
        {pageNumber}
      </button>
    );
  });


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

  const handleSort = async (Sort) => {
    setSortData(Sort);
    if ("Low to High" === Sort) {
      let sort = await axios.get('http://localhost:8000/product?_sort=price');
      setProduct(sort.data)
    } else if ("High to Low" === Sort) {
      let sort = await axios.get('http://localhost:8000/product?_sort=price&_order=desc');
      setProduct(sort.data)
    } else if ("Reset" === Sort) {
      let sort = await axios.get('http://localhost:8000/product');
      setProduct(sort.data)
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
          <div className="category-item col-12 justify-content-between d-flex">
            <div className='col-12 d-flex text-center'>
              {
                catagory.map((v) => {
                  return (
                    <>
                      <div >
                        <button onClick={() => category_Filter(v.catagoryName)} className="btn btn-outline-primary me-2">{v.catagoryName}</button>
                      </div>

                      <div>
                        <ion-icon name="add-outlie" className="add-icon" />
                        <ion-icon name="remove-outline" className="remove-icon" />
                      </div>
                    </>
                  )
                })
              }
              <div>
                <button onClick={() => category_Filter("all")} type="button" className="btn btn-outline-primary me-2 ">All</button>
              </div>
                <div className='d-flex justify-content-end'>
                <button className="  btn btn-outline-primary me-2" onClick={() => handleSort("Low to High")}>Low to High </button>
              <button className="  btn btn-outline-primary me-2" onClick={() => handleSort("High to Low")}>High to low</button>
              <button className=" btn btn-outline-primary me-2" onClick={() => handleSort("Reset")}>Reset</button>
                </div>
            </div>

          </div>
        </div>
      </div>

      <div className="product-container ">
        <div className='container'>
          <h2 className="title">Featured Products</h2>
          <div className="row">
            {
              currentRecords.map((v) => {
                return (
                  <div className="col-4" key={v.id}>
                    <a href="product_details.html">
                      <img src={v.image} alt />
                    </a>
                    <div className="rating d-flex justify-content-end me-4 mt-2">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="far fa-star" />
                      </div >
                      <h4>{v.name}</h4>
                      <p>price: {v.price}</p>
                    <div className='btn'>
                      <Link to={`/ProductDetails/${v.id}`} className='text-white' style={{ textDecoration: 'none' }}>
                        <p className=' m-0 text-white '>VIEW MORE</p>
                      </Link>
                    </div>
           </div>
                )
              })
            }
            <div className="pagination">
              <ul className="pagination">
                {pageNumbers.map((pageNumber) => {
                  return (
                    <li key={pageNumber} className="page-item">
                      <button
                        onClick={() => change(pageNumber)}
                        className="page-link"
                      >
                        {pageNumber}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
