import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [currState, setCurrState] = useState("Login");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
   .then((res) => res.json())
   .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          // Login successful, redirect to dashboard or home page
          window.location.href = '/';
        }
      })
   .catch((err) => {
        setError('An error occurred. Please try again.');
      });
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setError(null)} src="cross_icon.png" alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login"? (
            <></>
          ) : (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your name"
              required
            />
          )}
          <input
            type="email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <button>{currState === "Login"? "Login" : "Create Account"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login"? (
          <p>
            Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?<span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
        {error && <div style={{ color: 'ed' }}>{error}</div>}
      </form>
    </div>
  );
};

export default Login; 