import React, { useContext } from "react";
import { AuthContext } from "../../AuthContext";
import Button from "@mui/material/Button";
import "./home.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="container">
      <div className="header">Welcome to My Homepage</div>

      <div className="button">
        <Button variant="contained" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
