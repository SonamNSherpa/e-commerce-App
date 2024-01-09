import React, { useState } from "react";
import axios from "axios";
import styles from "../styling/loginStyle.module.css";

interface LoginRequest {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = async () => {
    const loginData: LoginRequest = {
      username,
      password,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/authenticate",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setToken(response.data.jwt);

      console.log("Login Successful. Token: ", response.data.jwt);
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  // Example function to make a protected request using the token
  const handleProtectedRequest = async () => {
    try {
      const response = await axios.get("http://localhost:8080/hello", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include the token in the Authorization header
        },
      });

      console.log("Protected Request Successful. Response: ", response.data);
    } catch (error) {
      console.error("Error during protected request", error);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Sign in</h2>
      <div>
        <label className={styles.label}>
          Username:
          <input
            className={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label className={styles.label}>
          Password:
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleLogin} className={styles.button}>
        Login
      </button>
      {token && (
        <div>
          <button onClick={handleProtectedRequest} className={styles.button}>
            Make Protected Request
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
