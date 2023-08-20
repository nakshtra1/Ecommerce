import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    onLogout(); 
    navigate("/login");
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
