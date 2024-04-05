import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("jd@g.com");
  const [password, setPassword] = useState("12345678");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
      password: password,
    };
    console.log(data);
  };

  const onChange = (e) => {
    // const {name, value} = e.target;
    switch (e.target.name) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        break;
    }
    console.log(email, password);
  };

  return (
    <>
      <div className="formBody">
        <div className="wrapper">
          <form action="">
            <h1>Login</h1>
            <div className="input-box">
              <input type="text" placeholder="Username" required />
              <FaUser className="icon" />
            </div>
            <div className="input-box">
              <input type="password" placeholder="Password" required />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              {" "}
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit"> Login</button>
            <div className="register-link">
              <p>
                Don't have an account? <a href="#">Register</a>
              </p>{" "}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
