import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";

function Signup() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
      full_name: "",
      email: "",
      password: "",
    })
    const handleSignup=async(e)=>{
      e.preventDefault();
      try{
        const singupResponse = await api.post("/auth/signup", {
          full_name: user.full_name,
          email: user.email,
          password: user.password,
        })
        localStorage.setItem("user", JSON.stringify(singupResponse.data))
        navigate("/home")
      } catch(err){
        alert(err.response?.data?.message || "Signup failed. Please try again.");
      }
    }
  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="signup-input-wrapper">
            <label htmlFor="">Full Name</label>
            <input value={user.full_name} onChange={(e)=>setUser({...user, full_name: e.target.value})} type="text" required />
          </div>
          <div className="signup-input-wrapper">
            <label htmlFor="">Email</label>
            <input value={user.email} onChange={(e)=>setUser({...user, email: e.target.value})} type="email" required />
          </div>
          <div className="signup-input-wrapper">
            <label htmlFor="">Password</label>
            <input value={user.password} onChange={(e)=>setUser({...user, password: e.target.value})} type="password" required />
          </div>
          <button>Create Account</button>
        </form>
        <p>
          Already have an account?<Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
