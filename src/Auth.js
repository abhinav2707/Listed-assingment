import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./Auth.css";

const Auth = () => {
    const jump = () => {

    }
  return (
    <>
      <div className="main">
        <div className="board">
          <h1 className="board1">Board.</h1>
        </div>
        <div className="main2">
          <div className="signIn">
            <h1 className="signin1">Sign In</h1>
            <h5 className="signin2">Sign into your account</h5>
            <div className="form">
              <h3 className="email1">Email address</h3>
              <input type="text" className="email"></input>
              <h3 className="password1">Password</h3>
              <input type="text" className="password"></input>
              <Link to = "#"><h4 className="forgotpassword">Forgot Password?</h4></Link>
              <Link to = "./dashboard">
              <button className="button" >Sign in</button>
              </Link>
            </div>
            <p className="signin3">Don't have a account?<Link to = "#"> Register here</Link></p>
          </div>
          
        </div>
        
      </div>
    </>
  );
};

export default Auth;
