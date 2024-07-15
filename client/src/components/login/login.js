import React, { useState, useContext } from "react";
import "./login.css";
import axios from "axios";
import { AuthContext } from "../../AuthContext";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "api/login",
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // Save the token and update the authentication state
      login(response.data.token);
      // Redirect or update the UI accordingly
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid username or password");
    }
  };

  return (
    <div className="Container">
      <div className="LoginForm">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
