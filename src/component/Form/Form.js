import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Form.css";

const Form = () => {
  const auth = getAuth();

  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");
  const [isLongin, setIsLogin] = useState(false);
  const handleEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setUserPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userEmail, userPassword);
    if (!/(?=(.*[A-Z]){2,})/.test(userPassword)) {
      setError("The Password Must Contain 6 Caracters And Two Uppercase");
      return;
    }
    isLongin
      ? userLogin(userEmail, userPassword)
      : registerForm(userEmail, userPassword);
  };
  const toggleLogin = (e) => {
    setIsLogin(e.target.checked);
  };
  const registerForm = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const userLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{isLongin ? "Login" : "Register"} Form</h1>
        <div className="formcontainer">
          <hr />
          <div className="container">
            <label htmlFor="uname">
              <strong>Username</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Username"
              name="uname"
              required
              onBlur={handleEmail}
            />
            <label htmlFor="psw">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
              onBlur={handlePassword}
            />
          </div>
          <input
            type="checkbox"
            name="chkbx"
            id="chkbx"
            onChange={toggleLogin}
          />
          <label htmlFor="chkbx">
            Check This Box If You Are An Existing User
          </label>
          <div style={{ color: "red" }}>{error}</div>
          <button type="submit">{isLongin ? "Login" : "Register"}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
