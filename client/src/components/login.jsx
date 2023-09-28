import React, { useEffect, useState } from "react";

const Login = (props) => {
  const [signup, setSignup] = useState(true);
  const [usertype, setUsertype] = useState("student");
  const [name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Mail, setMail] = useState("");
  const [teacher, setTeacher] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {}, [signup]);

  return (
    <div className="login">
      {signup ? (
        <div className="form">
          {show ? <div id="show">Account created!</div> : null}
          <div className="title">Welcome</div>
          <div className="subtitle">Let's create your account!</div>
          <div className="radio-button-container">
            <div className="radio-button">
              <input
                type="radio"
                className="radio-button__input"
                id="radio1"
                name="radio-group"
                onClick={() => {
                  setUsertype("Student");
                }}
              />
              <label className="radio-button__label" htmlFor="radio1">
                <span className="radio-button__custom"></span>
                Student
              </label>
            </div>
            <div className="radio-button">
              <input
                type="radio"
                className="radio-button__input"
                id="radio2"
                name="radio-group"
                onClick={() => {
                  setUsertype("Teacher");
                }}
              />
              <label className="radio-button__label" htmlFor="radio2">
                <span className="radio-button__custom"></span>
                Teacher
              </label>
            </div>
          </div>
          <div className="input-container ic1">
            <input
              placeholder="Your Name"
              type="text"
              className="input"
              id="firstname"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="input-container ic2">
            <input
              placeholder="Password"
              type="password"
              className="input"
              id="lastname"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="input-container ic2">
            <input
              placeholder="Email"
              type="text"
              className="input"
              id="email"
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
            <div className="cut cut-short"></div>
          </div>
          {usertype === "Student" ? (
            <div className="input-container ic2">
              <input
                placeholder="Teacher Name"
                type="text"
                className="input"
                id="email"
                onChange={(e) => {
                  setTeacher(e.target.value);
                }}
              />
              <div className="cut cut-short"></div>
            </div>
          ) : null}
          <button
            className="submit"
            type="text"
            onClick={() => {
              props.handleSignup(name, Password, Mail, teacher, usertype);
              setShow(true);
            }}
          >
            Make account
          </button>
          <p
            onClick={() => {
              setSignup(!signup);
              setShow(false);
            }}
          >
            Already have an account?
            <br />
            Login!
          </p>
        </div>
      ) : (
        <div className="form">
          <div className="title">Welcome Back</div>
          <div className="subtitle">Type in your credentials :</div>

          <div className="input-container ic1">
            <input
              placeholder="Your Name"
              type="text"
              className="input"
              id="firstname"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className="input-container ic2">
            <input
              placeholder="Password"
              type="password"
              className="input"
              id="lastname"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <button
            className="submit"
            type="text"
            onClick={() => {
              props.handleLogin(name, Password);
            }}
          >
            Log in
          </button>
          <br />
          <p
            onClick={() => {
              setSignup(!signup);
            }}
          >
            Don't have an account?
            <br />
            Sign up!
          </p>
          {props.exist ? null : <div id="wrong"> Check your information </div>}
        </div>
      )}
    </div>
  );
};

export default Login;
