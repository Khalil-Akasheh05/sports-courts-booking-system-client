import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const loginResponse = await api.post("/auth/login", {
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("user", JSON.stringify(loginResponse.data));
      if (loginResponse.data.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
    } catch (err) {
      alert(err.response?.data?.error);
    }
  };
  return (
    <div className="login-page">
      <h1>Sports Courts Booking</h1>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="">Email</label>
            <div className="login-input-wrapper">
              <input
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                required
              />
              <i className="fa-solid fa-user"></i>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="">Password</label>
            <div className="login-input-wrapper">
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                required
              />
              <i className="fa-solid fa-lock"></i>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't Have an Account?<Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
