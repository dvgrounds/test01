import React from "react";
import { login } from "./utils";
//Task
// * The Login button should trigger the login() function
// * Disable the login button when email is empty or Password is less than 5 characters
// * Disable the login button while login action is being performed
// * Show the error message in placeholder
// * Show JS native alert if login is successful

const LoginForm = function () {
  login("email", "password123");
  return (
    <>
      <div className="row">
        <label htmlFor={"email"}>Email </label>
        <input type={"email"} />
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password </label>
        <input type={"password"} />
      </div>
      {/*Place error message here*/}
      <div className="errorMessage"></div>

      {/* {a == true
           ? (<Button/>)
           : null
          } */}
      <button onClick={login(var1,var2)}>Login</button>
    </>
  );
};
export default LoginForm;
