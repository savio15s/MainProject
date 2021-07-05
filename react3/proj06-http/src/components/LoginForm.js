import React, { useState } from "react";
import Debug from "./Debug";

export default function LoginForm() {
  const intialValues = { userid: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    //console.log(formValues);
    e.preventDefault();
    const res = await loginUser("siva");
    console.log(res);
  };

  const handleChange =  (event) => {
    console.log(event.target.name + "," + event.target.value);
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
    setFormErrors(validate(formValues));

    //setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.userid) {
      errors.userid = "Cannot be blank";
    } else if (!regex.test(values.userid)) {
      errors.userid = "Invalid Username format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 25) {
      errors.password = "Password must be less than 25 characters";
    }

    return errors;
  };

  async function loginUser(userid) {
    console.log("Login User==" + userid)
    return fetch("http://localhost:4000/users/?userid=" + userid)
      .then((response) => response.json());
  }

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "960px",
        padding: "10px",
      }}
    >
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="first-name-input">
            First Name *
            <input
              type="text"
              className="form-control"
              id="user-name-input"
              placeholder="Enter User Id"
              value={formValues.userid}
              onChange={handleChange}
              name="userid"
              required
            />
            {formValues.userid && (
              <span className="error">{formErrors.userid}</span>
            )}
          </label>
          <br />
          <label htmlFor="first-name-input">
            Password *
            <input
              type="text"
              className="form-control"
              id="password-input"
              placeholder="Enter User Id"
              value={formValues.password}
              onChange={handleChange}
              type="password"
              name="password"
              required
            />
            {formValues.password && (
              <span className="error">{formErrors.password}</span>
            )}
          </label>
          <br />
          <button type="submit">Sign In</button>
        </div>
        <Debug data={formValues} />
        <hr />
      </form>
    </div>
  );
}
