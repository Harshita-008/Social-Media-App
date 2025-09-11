// // pages/SignUp.jsx
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function SignUp() {
//   const [form, setForm] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup Data:", form);
//     alert("Signup successful!");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
//       <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//           Create Account
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={form.username}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 rounded-lg hover:opacity-90 transition"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="text-center text-gray-600 mt-4">
//           Already have an account?{" "}
//           <Link to="/signin" className="text-pink-600 font-semibold">
//             Sign In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SignUp;












import React , {useState} from "react";
import logo1 from "../assets/socialLogo.png"
import logo2 from '../assets/logo2.png'
import { Link } from "react-router-dom";
import { signUp } from "../apiCalls/authCalls.js";

function SignUp() {
    const [name , setName] = useState("");
    const [userName , setUserName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    // Handle SignUp 
    const handleSignUp = async() => {
      if(!name || !userName || !email || !password) {
        alert("Please fill all the fields");
        return;
      }

      const user = {name, userName, email, password};

      try{
        const response = await signUp(user);
        console.log("Sign Up Successful" , response);
        alert("Sign Up Successful! Please Sign In.");
        // Clear the form
        setName("");
        setUserName("");
        setEmail("");
        setPassword("");
      } catch (error) {
        console.error("Error during sign up" , error);
        alert("Sign Up Failed. Please try again.");
      }
    }

  return (
    <div>
      <div className="w-full min-h-screen bg-[radial-gradient(1200px_800px_at_10%_-10%,#f58529_0%,transparent_35%),radial-gradient(1200px_800px_at_110%_0%,#dd2a7b_0%,transparent_40%),radial-gradient(900px_700px_at_50%_110%,#8134af_0%,transparent_45%),linear-gradient(180deg,#515bd4,#8134af)] flex flex-col justify-center items-center">
        <div className="w-full lg:max-w-[60%] h-[600px] bg-white rounded-2xl flex justify-center items-center overflow-hidden border border-gray-200 shadow-sm">
          <div className="w-full lg:w-[50%] h-full bg-white flex flex-col items-center p-6 gap-5">
            <div className="flex gap-2 items-center text-[20px] font-semibold mt-8 text-gray-800">
              <span>Sign Up to </span>
              <img src={logo1} alt="" className="w-[70px]"/>
            </div>

            <div className="relative flex items-center justify-start w-[90%] h-[44px] rounded-md mt-4 border border-gray-300 bg-white hover:border-gray-400 focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400 transition">
              <label htmlFor="name" className="absolute -top-2 left-4 px-1 bg-white text-xs text-gray-500">Enter Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full h-full rounded-md px-4 outline-none border-0 text-sm text-gray-900 placeholder-gray-400 bg-transparent"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="relative flex items-center justify-start w-[90%] h-[44px] rounded-md border border-gray-300 bg-white hover:border-gray-400 focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400 transition">
              <label htmlFor="userName" className="absolute -top-2 left-4 px-1 bg-white text-xs text-gray-500">Enter Username</label>
              <input
                type="text"
                id="userName"
                className="w-full h-full rounded-md px-4 outline-none border-0 text-sm text-gray-900 placeholder-gray-400 bg-transparent"
                required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="relative flex items-center justify-start w-[90%] h-[44px] rounded-md border border-gray-300 bg-white hover:border-gray-400 focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400 transition">
              <label htmlFor="email" className="absolute -top-2 left-4 px-1 bg-white text-xs text-gray-500">Enter Email</label>
              <input
                type="email"
                id="email"
                className="w-full h-full rounded-md px-4 outline-none border-0 text-sm text-gray-900 placeholder-gray-400 bg-transparent"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative flex items-center justify-start w-[90%] h-[44px] rounded-md border border-gray-300 bg-white hover:border-gray-400 focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400 transition">
              <label htmlFor="password" className="absolute -top-2 left-4 px-1 bg-white text-xs text-gray-500">Enter password</label>
              <input
                // type={showPassword ? "text" : "password"}
                id="password"
                className="w-full h-full rounded-md px-4 outline-none border-0 text-sm text-gray-900 placeholder-gray-400 bg-transparent"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="w-[70%] h-[44px] bg-[#0095f6] text-white font-semibold rounded-lg mt-4 hover:opacity-90 active:scale-[.99] transition shadow-sm" onClick={handleSignUp}>Sign Up</button>

            <p className="cursor-pointer text-gray-700 text-sm">
              Already Have An Account?{" "}
              <span className="border-b border-gray-800 pb-[2px] text-gray-900 hover:opacity-80">
               <Link to="/signin"> Sign In</Link>
              </span>
            </p>
          </div>

          <div className="md:w-[50%] h-full hidden lg:flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex-col gap-2 text-white text-[16px] font-semibold rounded-l-[30px] shadow-2xl">
            <img src={logo2} alt="" className="w-[40%] drop-shadow-sm" />
            <p className="opacity-95">Scaler Gram - Scaling Connections</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;