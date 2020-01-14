import React from "react";
import "./Account.css";

function Account() {
  return (
    <div>
      <h1>Account : </h1>
      <input type="text" className="form-control" placeHolder="First Name..." />
      <input type="text" className="form-control" placeHolder="Last Name..." />
      <input type="email" className="form-control" placeHolder="Email..." />
      <input type="text" className="form-control" placeHolder="UserName..." />
      <input type="password" className="form-control" placeHolder="Password" />
      <input
        type="text"
        className="form-control"
        placeHolder="PhoneNumber..."
      />
      <p className="birthdate">Birth date: </p>
      <input class="form-control" type="date" id="example-date-input"></input>
    </div>
  );
}

export default Account;
