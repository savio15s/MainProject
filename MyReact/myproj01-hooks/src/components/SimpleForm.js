import React, { useState, useEffect } from "react";
import "./SimpleForm.css";

export default function SimpleForm(props) {
  const intialValues = {
    email: "",
    password: "",
    intext: false,
    city: 0,
  };

  const cities = [
    { id: 1, name: "Chennai" },
    { id: 2, name: "Madurai" },
    { id: 3, name: "Tirunelveli" },
    { id: 4, name: "Chennai" },
  ];

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const isCheckbox = e.target.type === "checkbox";
    console.log(isCheckbox);
    console.log(e.target.name);
    console.log(e.target.value);
    const { name, value } = e.target;
    //setFormValues({ ...formValues, [name]: value });
    setFormValues((prev) => {
      return {
        ...prev,
        [name]: isCheckbox ? e.target.checked : value,
      };
    });
    console.log(formValues);
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
    props.onLoginCompletion(formValues);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    if (values.city < 0){
      errors.city = "City cannnot be blank";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="form-group">
      <h1>Sign in to continue</h1>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-msg">Form submitted successfully</span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
            className={formErrors.email && "input-error"}
          />
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            value={formValues.password}
            onChange={handleChange}
            className={formErrors.password && "input-error"}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </div>

        <div className="form-row">
          <label htmlFor="intextusers">Internal/External User</label>
          <input
            type="checkbox"
            name="intext"
            class="form-control"
            onChange={handleChange}
            value={formValues["intext"] || false}
          />
        </div>

        <div className="form-row">
          <label htmlFor="cities">Cities</label>
          <select
            name="city"
            onChange={handleChange}
            class="form-control"
            value={formValues.city || ""}
          >
            <option value="-1">--Please choose an option--</option>
            {cities.map((x) => {
              return <option value={x.id}>{x.name}</option>;
            })}
          </select>
          {formErrors.city && (
            <span className="error">{formErrors.city}</span>
          )}
        </div>

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
