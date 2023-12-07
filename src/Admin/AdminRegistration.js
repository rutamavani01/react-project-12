import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const AdminRegistration = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = async() => {
    let users = axios.post(`http://localhost:8000/admin`,{
      email : email,
      password : password
  });

  if(users){
      console.log("User successfully register");
      navigate('/AdminLogin')
      setEmail("");
      setPassword("");
  }else{
      console.log("User not Register");
      return false;
  }
  }

  return (
     <center>
    <h1 className='align'>Admin Register Page</h1> 
       <body className="align">
          <div className="grid">
              <form className="form login">
                  <div className="form__field">
                      <label htmlFor="login__username"><svg className="icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#user" /></svg><span className="hidden">Email</span></label>
                      <input id="login__username" type="text"className="form__input" placeholder="Email" required name='email' onChange={(e)=>setEmail(e.target.value)}
                      value={email} />
                  </div>
                  <div className="form__field">
                      <label htmlFor="login__password"><svg className="icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#lock" /></svg><span className="hidden">Password</span></label>
                      <input id="login__password" type="password" name="password" className="form__input" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password} required />
                  </div>
                  <div className="form__field">
                      <input type="button"className='submit btn' onClick= {()=>handleSubmit()} defaultValue="Submit" style={{width: '100%',borderRadius : '7px'}} />
                  </div>
                  <NavLink to={'/AdminForgotPwd'} >Not a remember? </NavLink>
                <NavLink to={'/AdminRegistration'}>Sign up now </NavLink>
              </form>
          </div>
      </body>
     </center>
  )
}

export default AdminRegistration
