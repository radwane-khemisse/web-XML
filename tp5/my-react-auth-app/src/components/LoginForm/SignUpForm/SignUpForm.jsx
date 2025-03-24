import React, { useState } from "react";
import "./SignUpForm.css";
import { Link, useNavigate } from "react-router-dom";

const SignUpForm = () => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!username || !password || !name) {
          setError("All fields are required.");
          return;
        }
    
        try {
          const res = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password, name }),
          });
    
          if (res.ok) {
            localStorage.setItem("isAuthenticated", "true");
            navigate("/dashboard");
          } else {
            setError("Failed to create user.");
          }
        } catch (err) {
          console.error("Sign-up error:", err);
          setError("Something went wrong.");
        }
      };
  return (
    <div className="signup-container">
      <div className="signup-box">
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
          <input type="text" placeholder="Login" className="input-field" onChange={(e) => setUsername(e.target.value)}/>
          <input type="text" placeholder="Name" className="input-field" onChange={(e) => setName(e.target.value)}/>
          <input type="password" placeholder="Password" className="input-field" onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="sign-up-btn">
            Sign Up
          </button>
        </form>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        <div className="signin-link">
            <Link to={"/"}>Already registered ? Click to sign in !!</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
