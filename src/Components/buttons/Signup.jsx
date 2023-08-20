import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (!email || !password) {
    //   setErrorMessage("Please enter both email and password.");
    //   return;
    // }

    // try {
  //     const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: "Nicolas",
  //         email: "nico@gmail.com",
  //         password: "1234",
  //         avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867",
  //       }),
  //     });

  //     if (response.status === 201 || response.status === 204) {

  //       const data = await response.json();
  //       const accessToken = data.access_token;
  //       localStorage.setItem("access_token", accessToken);

  //       // Navigate to the home page
  //       navigate("/login");
  //     } else {
  //       setErrorMessage("Invalid credentials");
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center py-4 my-4">
          <h1>Sign Up Form</h1>
          <hr />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col d-flex justify-content-center">
          <img className="w-75" src="/assets/signup.png" height="75%" />
        </div>
        <div className="col ">
          <form className="needs-validation" noValidate>
            <div className="form-group">
              <label htmlFor="validationDefault01">Full name</label>
              <input
                type="text"
                className="form-control"
                id="validationDefault01"
                placeholder="Full Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="validationCustom01">Email address</label>
              <input
                type="email"
                className="form-control"
                id="validationDefault01"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="validationDefault01"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </div>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <div className="d-flex justify-content-center mt-2">
              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={handleSubmit}
              >
                Submit Form
              </button>
              <button type="reset" className="btn btn-primary">
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
