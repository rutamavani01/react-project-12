import './App.css';
import Home from './User/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import AdminLogin from './Admin/AdminLogin';
import AdminRegistration from './Admin/AdminRegistration';
import AdminNavbar from './Admin/AdminNavbar';
import AdminProduct from './Admin/AdminProduct';
import AdminCatagory from './Admin/AdminCatagory';
import Product from './Components/Product';
import ProductDetails from './Components/productDetails';
import Login from './Components/Login';
import Register from './Components/Register';
import AdminDashboard from './Admin/AdminDashboard';
import AdminProductView from './Admin/AdminProductView';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* user Route */}
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Product' element={<Product />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/ProductDetails/:productId' element={<ProductDetails />}></Route>
        </Route>

        {/* admin route */}
        <Route to='/AdminNavbar' element={<AdminNavbar/>}>
        <Route path='/AdminLogin' element={<AdminLogin />}></Route>
        <Route path='/AdminRegistration' element={<AdminRegistration />}></Route>
       <Route path='/AdminProductView' element={<AdminProductView/>}></Route>
        <Route path='/AdminProduct' element={<AdminProduct />}></Route>
        <Route path='/AdminCatagory' element={<AdminCatagory />}></Route>
        <Route path='/AdminDashboard' element={<AdminDashboard />}></Route>
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
