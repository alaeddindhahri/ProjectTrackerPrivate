import React from "react";
import "./Account.css";

function Account() {
  return (
    <div>
      <h1>Account : </h1>
      <input type="text" className="form-control instructor-account-input" placeHolder="First Name..." />
      <input type="text" className="form-control instructor-account-input" placeHolder="Last Name..." />
      <input type="email" className="form-control instructor-account-input" placeHolder="Email..." />
      <input type="text" className="form-control instructor-account-input" placeHolder="UserName..." />
      <input type="password" className="form-control instructor-account-input" placeHolder="Password" />
      <input
        type="text"
        className="form-control instructor-account-input"
        placeHolder="PhoneNumber..."
      />
      <p className="birthdate">Birth date: </p>
      <input class="form-control instructor-account-input" type="date" id="example-date-input"></input>
    </div>
  );
}

export default Account;
