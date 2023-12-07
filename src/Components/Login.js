import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async() => {
        try {
            let user =  await axios.get(`http://localhost:8000/user?email=${email}&password=${password}`)
            if(user.data.length === 0) {
                alert("not valid!");
                return false;
            }
            localStorage.setItem('UserLogin',JSON.stringify(user.data[0]));
            setEmail("");
            setPassword("");
            navigate('/');
        }catch(err){
            console.log(err);
            return false;
        }
    }

    return (
       <center>
      <h1 style={{margin: '25px 0 25px 0'}}>Login Page</h1> 
         <div className="align">
            <div className="grid">
                <form className="form login ">
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
                <p className="text--center">Not a remember? <NavLink to={'/Register'}>Sign up now </NavLink><svg className="icon"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="assets/images/icons.svg#arrow-right" /></svg></p>
                </form>
            </div>
        </div>
       </center>
    )
}

export default Login;