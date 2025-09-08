// // pages/SignIn.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function SignIn() {
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login Data:", form);
//     alert("Login successful!");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-600 via-pink-500 to-yellow-400">
//       <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Welcome Back
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//           />

//           {/* Forgot Password Link */}
//           <div className="text-right">
//             <Link
//               to="/forgot-password"
//               className="text-sm text-purple-600 hover:underline"
//             >
//               Forgot Password?
//             </Link>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition"
//           >
//             Sign In
//           </button>
//         </form>

//         <p className="text-center text-gray-600 mt-4">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-purple-600 font-semibold">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SignIn;











import React , {useState} from "react";
import logo from "../assets/socialLogo.png";
import logo2 from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { signIn } from "../apiCalls/authCalls.js";
import { useNavigate } from "react-router-dom";

function SignIn() {
   const [userName , setUserName] = useState("");
   const [password , setPassword] = useState("");
   const navigate = useNavigate();

   const handleSignIn = async() => {
    if(!userName || !password){
      alert("Please fill all the fields");
      return;
    }

    const user = {
      userName,
      password
    }

    try{
      const response =  await signIn(user);
       
      console.log("Sign In Successful" , response);
        navigate("/home");
      // Clear the form
      setUserName("");
      setPassword("");
    }catch(error){
      console.error("Error during sign in" , error);
      alert("Sign In Failed. Please try again.");
    }
   }

  return (
    <div
      className="
        w-full min-h-screen 
        bg-[radial-gradient(1200px_800px_at_10%_-10%,#f58529_0%,transparent_35%),radial-gradient(1200px_800px_at_110%_0%,#dd2a7b_0%,transparent_40%),radial-gradient(900px_700px_at_50%_110%,#8134af_0%,transparent_45%),linear-gradient(180deg,#515bd4,#8134af)]
        flex items-center justify-center
      "
    >
      <div className="w-[95%] lg:max-w-[60%] h-[600px] rounded-2xl flex justify-center items-center overflow-hidden">
        {/* LEFT (form) */}
        <div
          className="
            w-full lg:w-1/2 h-full 
            bg-white 
            flex flex-col items-center justify-center
            px-6 sm:px-10 
            gap-5
            shadow-[0_10px_40px_rgba(0,0,0,0.2)]
          "
        >
          {/* Header */}
          <div className="flex flex-col items-center gap-2 mb-4">
            <img src={logo} alt="" className="w-[96px] object-contain" />
            <h2 className="text-lg font-semibold text-neutral-700">
              Sign In to ScalerGram
            </h2>
          </div>

          {/* Inputs */}
          <div className="w-full flex flex-col items-center gap-3">
            <input
              type="text"
              id="userName"
              placeholder="Username"
              className="w-[95%] h-[44px] px-3 rounded-md border border-neutral-300 bg-neutral-50 text-neutral-900 text-sm focus:outline-none focus:border-neutral-400"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              
            />
            <input
              id="password"
              placeholder="Password"
              className="w-[95%] h-[44px] px-3 rounded-md border border-neutral-300 bg-neutral-50 text-neutral-900 text-sm focus:outline-none focus:border-neutral-400"
              required  
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Forgot password */}
          <div className="w-[95%] text-right mt-1 text-sm text-[#0095F6] cursor-pointer hover:underline">
           <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          {/* Button */}
          <button
            className="
              w-[95%] h-[44px] mt-4 rounded-lg font-semibold 
              bg-[#0095F6] text-white 
              hover:bg-[#0086dd] active:scale-[0.99] transition
              shadow-[0_6px_16px_rgba(0,149,246,0.35)]
            "
            onClick={handleSignIn}
         
          >
            Sign in
          </button>

          {/* Footer text */}
          <p className="text-neutral-500 text-sm mt-3">
            Want to create a new account?{" "}
            <span className="text-neutral-900 font-medium underline underline-offset-4">
            <Link to="/signup"> Sign Up</Link>
            </span>
          </p>
        </div>

        {/* RIGHT (promo panel) */}
        <div
          className="
            md:w-1/2 h-full hidden lg:flex flex-col items-center justify-center 
            bg-white/10 backdrop-blur-[1px]
            text-white font-semibold
          "
        >
          <img
            src={logo2}
            alt=""
            className="w-[42%] drop-shadow-[0_10px_28px_rgba(0,0,0,0.25)]"
          />
          <p className="mt-4 text-white/95">
            ScalerGram - Scaling Connections
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;