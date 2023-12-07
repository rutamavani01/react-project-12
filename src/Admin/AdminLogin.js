import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async() => {
        try {
            let user =  await axios.get(`http://localhost:8000/admin?email=${email}&password=${password}`)
            if(user.data.length === 0) {
                alert("not valid!");
                return false;
            }
            localStorage.setItem('UserLogin',JSON.stringify(user.data[0]));
            setEmail("");
            setPassword("");
            navigate('/AdminDashboard');
        }catch(err){
            console.log(err);
            return false;
        }
    }

    return (
      <center>
        <h1 className=''>Admin Login Page</h1> 
        <div className="login-container justify-content-center">
            <body className="grid">
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
                <NavLink to={'/AdminForgotPwd'}>Not a remember? </NavLink>
                <NavLink to={'/AdminRegistration'}>Sign up now </NavLink>
                   
                </form>
            </body>
        </div>
      </center>
    
    )
}

export default AdminLogin