import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/users");
      const users = await res.json();

      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (foundUser) {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <img
            src="/images/enset_logo.png"
            alt="ENSET Logo"
            className="logo"
          />
          <div className="school-text">
            ECOLE NORMALE SUPÉRIEURE DE L'ENSEIGNEMENT TECHNIQUE DE MOHAMMEDIA<br />
            UNIVERSITÉ HASSAN II DE CASABLANCA
          </div>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Login" className="input-field" onChange={(e) => { setUsername(e.target.value)}}/>
            <input type="password" placeholder="Password" className="input-field" onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit" className="sign-in-btn">
              Sign In
            </button>
          </form>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
          <div className="signup-link">
            <Link to={"/signup"}>New User ? Click to sign up !!</Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
