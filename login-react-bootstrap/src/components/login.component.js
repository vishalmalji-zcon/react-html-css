import React from "react";
import "../components/login.component.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./dashboard.component";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onEmailUpdate = (e) => {
    // validateEmail(e.target.value);
    let email = {
      ...form,
      email: e.target.value,
    };
    setForm(email);
  };
  const onPasswordUpdate = (e) => {
    let password = {
      ...form,
      password: e.target.value,
    };
    setForm(password);
  };
  //   const validateEmail = (email) => {
  //     if (!email) {
  //     }
  //   };
  const validateForm = (formDetails) => {
    const passwordRegex = /(?=.*[0-9])/;
    if (!formDetails.email) {
      alert(JSON.stringify("Email is required"));
      return false;
    } else if (!formDetails.password) {
      alert(JSON.stringify("Password is required"));
      return false;
    }
    if (formDetails.password.length < 8) {
      alert(JSON.stringify("Password must be greater than 8 char"));
      return false;
    } else if (!passwordRegex.test(formDetails.password)) {
      alert(JSON.stringify("Invalid password. Must contain one number."));
      return false;
    }
    return true;
  };
  //   const validatePassword = (password) => {};
  const onSubmitForm = (e) => {
    e.preventDefault();
    // validateEmail(form.email);
    let validateStatus = validateForm(form);
    if (validateStatus) {
      alert(JSON.stringify(form));
      form.email = "";
      form.password = "";
      <Dashboard />;
      //   navigate("/dashboard");
    }
    // validatePassword(form.password);
  };
  return (
    <div>
      {/* <h1>welcome to login screen</h1> */}
      <div className="form-container">
        <form className="login-form" onSubmit={onSubmitForm}>
          <div>
            <h3 className="form-title">Sign In</h3>
            <div>
              <label>Email address</label>
              <input
                type="email"
                placeholder="Email address"
                className="form-control mt-1"
                name="email"
                value={form.email}
                onChange={onEmailUpdate}></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter Password"
                value={form.password}
                onChange={onPasswordUpdate}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
