import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminNewPass = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleNewPassword = () => {
    if (newPassword === confirmPassword) {
      let allUsers = JSON.parse(localStorage.getItem('register'));
      let userotp = JSON.parse(localStorage.getItem('userotp'));

      const updatedUsers = allUsers.map((user) => {
        if (user.email === userotp.email) {
          return { ...user, password: newPassword };
        }
        return user;
      });

      localStorage.setItem('register', JSON.stringify(updatedUsers));
      alert('Password successfully changed');
      localStorage.removeItem('userotp');
      navigate('/AdminLogin');
    } else {
      alert('New password and confirm password are not the same');
    }
  };

  useEffect(() => {
    setNewPassword('');
    setConfirmPassword('');
    handleNewPassword();
  }, []);


  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10 col-lg-12 col-md-9">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          placeholder="Enter your new password..."
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user"
                          placeholder="Reenter your password..."
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input type="checkbox" className="custom-control-input" id="customCheck" />
                          <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                        </div>
                      </div>
                      <button
                        className="btn btn-primary btn-user btn-block"
                        onClick={()=>handleNewPassword()}
                      >
                        Login
                      </button>
                      <hr />
                      <a href="index.html" className="btn btn-google btn-user btn-block">
                        <i className="fab fa-google fa-fw" /> Login with Google
                      </a>
                      <a href="index.html" className="btn btn-facebook btn-user btn-block">
                        <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                      </a>
                    </form>
                    <hr />
                    <div className="text-center">
                      <a className="small" href="forgot-password.html">Forgot Password?</a>
                    </div>
                    <div className="text-center">
                      <a className="small" href="register.html">Create an Account!</a>
                    </div>
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

export default AdminNewPass;

