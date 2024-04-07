// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

// const Otp = () => {
//   let navigate = useNavigate();
//   const [otp, setOtp] = useState(''); 
//   const [email,setEmail] = useState("");


//   const createOtp = () => {
//       // let useremail = JSON.parse(localStorage.getItem('checkUserLogin'));
//       let otp = Math.floor(Math.random()*100);
//       let obj ={
//           otp : otp,
//           email:email
//       }
//       localStorage.setItem('userOtp',JSON.stringify(obj));
//       alert("your Otp:-"+otp);
//   }

//   const handlesubmit =()=>{
//       let newotp = JSON.parse(localStorage.getItem('userOtp'));
//       if(otp == newotp.otp){
//           navigate('/AdminNewPass');
//       }else{
//           alert("otp is wrong..");
//       }
//   }
//   useEffect(()=>{
//       createOtp();
//   },[])

//   useEffect(() => {
//     if (!otp) { 
//       const newOtp = Math.floor(Math.random() * 100);
//       setOtp(newOtp);
//       localStorage.setItem('userOtp', JSON.stringify({ email: useremail.email, otp: newOtp }));
//       alert('Your OTP is: ' + newOtp);
//     }
//   }, []);

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-xl-10 col-lg-12 col-md-9">
//           <div className="card o-hidden border-0 shadow-lg my-5">
//             <div className="card-body p-0">
//               <div className="row">
//                 <div className="col-lg-6 d-none d-lg-block bg-password-image" />
//                 <div className="col-lg-6">
//                   <div className="p-5">
//                     <div className="text-center">
//                       <h1 className="h4 text-gray-900 mb-2">Enter Your OTP</h1>
//                       <p className="mb-4">
//                         We get it, stuff happens. Just enter your OTP below, and we'll verify it.
//                       </p>
//                     </div>
//                     <form className="user">
//                       <div className="form-group">
//                         <input
//                           type="text"
//                           className="form-control form-control-user"
//                           placeholder="Enter OTP..."
//                           value={otp}
//                           onChange={(e) => setOtp(e.target.value)}
//                         />
//                       </div>
//                       <button
//                         className="btn btn-primary btn-user btn-block"
//                         onClick={() => handlesubmit()}
//                       >
//                         Submit
//                       </button>
//                     </form>
//                     <hr />
//                     <div className="text-center">
//                       <a className="small" href="register.html">
//                         Create an Account!
//                       </a>
//                     </div>
//                     <div className="text-center">
//                       <a className="small" href="login.html">
//                         Already have an account? Login!
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Otp;
