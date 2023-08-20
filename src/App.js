import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Product from "./Components/Product";
import Producct from "./Components/Producct";
import Cart from "./Components/Cart";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Checkout from "./Components/Checkout";
import Footer from "./Components/Footer";
import Login from "./Components/buttons/Login";
import Signup from "./Components/buttons/Signup";
import Logout from "./Components/buttons/Logout";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = (user) => {
    setLoggedIn(true);
    setEmail(user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? <Home email={email} /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/products"
          element={loggedIn ? <Product /> : <Navigate to="/" />}
        />
        <Route path="/checkout" element={loggedIn ? <Checkout /> : <Navigate to="/" />} />
        <Route path="/products/:id" element={loggedIn ?<Producct /> : <Navigate to="/" />} />
        <Route path="/cart" element={loggedIn ?<Cart /> : <Navigate to="/" />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/logout" element={loggedIn ?<Logout />: <Navigate to="/" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={loggedIn ?<Contact /> : <Navigate to="/" />} />
        <Route path="/about" element={loggedIn ?<About /> : <Navigate to="/" />} />
        <Route path="/" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
