import React from "react";

const Confirm = ({ values, nextStep, prevStep }) => {
  const { name, email, phone, password, facebook, twitter, github } = values;

  const continueHandler = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backHandler = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="form-container">
      <h1 className="mb-5">Confirm</h1>
      <ul className="list-group">
        <li className="list-group-item">Name: {name}</li>
        <li className="list-group-item">Email: {email}</li>
        <li className="list-group-item">Phone Number: {phone}</li>
        <li className="list-group-item">Password: {password}</li>
        <li className="list-group-item">
          Facebook URL: <a href={facebook}>{facebook}</a>
        </li>
        <li className="list-group-item">
          Twitter URL: <a href={twitter}>{twitter}</a>
        </li>
        <li className="list-group-item">
          Github URL: <a href={github}>{github}</a>
        </li>
      </ul>

      <br />
      <br />

      <div className="row">
        <div className="col-6">
          <button className="btn btn-danger" onClick={backHandler}>
            Back
          </button>
        </div>
        <div className="col-6 text-right">
          <button className="btn btn-primary" onClick={continueHandler}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;