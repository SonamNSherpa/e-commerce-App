import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Typography, Container, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import MasonryImageList from "../components/loginDisplay";

interface LoginRequest {
  username: string;
  password: string;
}

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "100px",
});

const StyledPaper = styled(Paper)({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledTextField = styled(TextField)({
  margin: "10px 0",
});

const StyledButton = styled(Button)({
  marginTop: "10px",
});

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

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
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during login", error);
    }
  };

  return (
    <div>
      <StyledContainer>
        <StyledPaper elevation={3}>
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>
          <StyledTextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <StyledTextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledButton
            onClick={handleLogin}
            variant="contained"
            color="primary"
          >
            Login
          </StyledButton>
        </StyledPaper>
      </StyledContainer>
      <MasonryImageList />
    </div>
  );
};

export default LoginPage;
