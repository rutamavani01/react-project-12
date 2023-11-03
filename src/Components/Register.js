import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {

    let user = axios.post(`http://localhost:8000/user`,{
      email : email,
      password : password
    });

    if(user){
      console.log(("user succesfully register"));
      navigate('/Login');
      setEmail("");
      setPassword("");
    }else{
      console.log("User not register");
      return false;
    }
  }

  return (
    <center>
      <h1 style={{margin: '25px 0 25px 0'}}>Registration Page</h1>
      <div className="align">
        <div className="grid">
          <form className="form login">
            <div className="form__field">
              <label><svg className="icon"></svg><span className="hidden">Email</span></label>
              <input id="login__username" type="text" className="form__input" placeholder="Email" required name='email' onChange={(e) => setEmail(e.target.value)}
                value={email} />
            </div>
            <div className="form__field">
              <label htmlFor="login__password"><svg className="icon"><use xlinkHref="#lock" /></svg><span className="hidden">Password</span></label>
              <input id="login__password" type="password" name="password" className="form__input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required />
            </div>
            <div className="form__field">
              <input type="button" className='submit btn' onClick={() => handleSubmit()} defaultValue="Submit" style={{ width: '100%', borderRadius: '7px' }} />
            </div>
          <p className="text--center">Not a remember? <a href="#">Sign up now</a> <svg className="icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="assets/images/icons.svg#arrow-right" /></svg></p>
          </form>
        </div>
      </div>
    </center>
  )
}

export default Register
