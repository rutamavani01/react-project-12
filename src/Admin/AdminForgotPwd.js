import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminForgotPwd = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handlesubmit = () => {

    const otp = Math.floor(Math.random() * 100000);
    localStorage.setItem('userotp', JSON.stringify({ userotp: otp, email: email }));

    alert("Your OTP: " + otp);
    let useremail = JSON.parse(localStorage.getItem('checkUserLogin'));
    if (useremail.email === email) {
        console.log(email);
    navigate('/Otp');
  };
  }

  return (
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-password-image" />
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                    <p className="mb-4">
                      We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!
                    </p>
                  </div>
                  <form className="user">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user"
                        id="useremail"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <button
                      className="btn btn-primary btn-user btn-block"
                      onClick={()=>handlesubmit()}
                    >
                      Reset Password
                    </button>
                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="/AdminRegistration">
                      Create an Account!
                    </a>
                  </div>
                  <div className="text-center">
                    <a className="small" href="/AdminLogin">
                      Already have an account? Login!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPwd;


