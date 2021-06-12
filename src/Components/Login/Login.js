import React, { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGooglePlusG } from "@fortawesome/free-solid-svg-icons";
import googleIcon from "../../icons/google.png";
import "./Login.css";
import { userContext } from "./../../App";
import loginImage from "../../images/loginImage.png";
import {
  handlegoogleSignIn,
  initializeAppLoginFrameWork,
  newAccountCreate,
  oldUserSignIn,
} from "./LoginManager";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  initializeAppLoginFrameWork();
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  const {
    register,

    formState: { errors },
  } = useForm();

  // Handle response:
  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      // email validation :
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      // password validation :
      const isPasswordValid = event.target.value.length > 6;
      const passWordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passWordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  // Funtion for sign in/Login with id pass:
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      // Create user:
      newAccountCreate(user.name, user.email, user.password).then((res) => {
        handleResponse(res, true);
        console.log("user Created SuccessFully");
      });
    }

    if (!newUser && user.email && user.password) {
      // Old user:
      oldUserSignIn(user.email, user.password).then((res) => {
        handleResponse(res, true);
        console.log("SuccessFully login with id pass");
      });
    }
    e.preventDefault();
  };
  // Google Sign In:
  const googleSignIn = () => {
    handlegoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  // facebook Sign in:
  // const faceBookSignIn = () => {
  //   handlefaceBookSignIn().then((res) => {
  //     handleResponse(res, true);
  //   });
  // };

  return (
    <div className="row login-page align-items-center">
      <div className="col-md-6 login-form">
        <form onSubmit={handleSubmit}>
          <h5>{loggedInUser ? loggedInUser.displayName : loggedInUser.name}</h5>
          {newUser && (
            <div>
              <input
                {...register("name", { required: true })}
                placeholder="Your name"
                onBlur={handleBlur}
              />
              <br />
              {errors.name && <span>Please give your Name</span>}
            </div>
          )}
          <br />
          <input
            {...register("email", { required: true })}
            type="text"
            placeholder="Your Email"
            onBlur={handleBlur}
          />
          <br />
          {errors.email && <span>Please give your Email</span>}
          <br />
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Your password"
            onBlur={handleBlur}
          />
          <br />
          {errors.password && <span>Please give your password</span>}
          <input type="submit" value={newUser ? "Sign Up" : "Login"} />
          {newUser ? (
            <p>
              Already have an Account?
              <span onClick={() => setNewUser(!newUser)}> Login here</span>{" "}
            </p>
          ) : (
            <p>
              Dont have account?
              <span onClick={() => setNewUser(!newUser)}> Sign up here</span>
            </p>
          )}
          <button onClick={googleSignIn}>
            <img className="google-Icon" src={googleIcon} alt="" /> Continue
            With Google
          </button>
          <br />
          {/* <button onClick={faceBookSignIn}>Continue With Facebook</button> */}
        </form>
      </div>
      <div className="col-md-6 login-image">
        <img src={loginImage} alt="" />
      </div>
    </div>
  );
};

export default Login;
