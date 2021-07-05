//https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react

import React, { useState, useReducer } from "react";
import "./CustomerReg.css";

const formReducer = (state, event) => {
  if (event.reset) {
    return {
      city: "",
      count: 0,
      name: "",
      "gift-wrap": false,
    };
  }

  return {
    ...state,
    [event.name]: event.value,
  };
};

const MyReducer = (state, event) => {
  console.log("My Reducer");
  console.log(state);
  console.log(event);
  return state + event;
};

export default function CustomerReg(props) {
  const [formData, setFormData] = useReducer(formReducer, {
    count: 123,
    city: "Madurai",
  });

  const [submitting, setSubmitting] = useState(false);

  const [sum, dispatch] = useReducer(MyReducer, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      console.log("Switching it to False...");
      setSubmitting(false);
    }, 5000);
    console.log("You have submitted the form.");
  };

  const onHandleReset = (event) => {
    setFormData({
      reset: true,
    });
  };


  const handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    setFormData({
      name: event.target.name,
      value: isCheckbox ? event.target.checked : event.target.value,
    });

    console.log("Current State..");
    console.log(formData);
  };

  return (
    <div>
      {submitting && (
        <div style={{ color: props.color }}>Submtting Form...</div>
      )}
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="wrapper">
        {/* {sum} */}
        <h1>Customer Registration</h1>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Name</p>
              <input
                name="name"
                onChange={handleChange}
                value={formData.name || ""}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              <p>Cities</p>
              <select
                name="city"
                onChange={handleChange}
                value={formData.city || ""}
              >
                <option value="">--Please choose an option--</option>
                <option value="Chennai">Chennai</option>
                <option value="Chandrigarh">Chandigarh</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Madurai">Madurai</option>
              </select>
            </label>
            <label>
              <p>Count</p>
              <input
                type="number"
                name="count"
                onChange={handleChange}
                step="1"
                value={formData.count || ""}
              />
            </label>
            <label>
              <p>Gift Wrap</p>
              <input
                type="checkbox"
                name="gift-wrap"
                onChange={handleChange}
                value={formData["gift-wrap"] || false}
              />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
          <button onClick={onHandleReset}>Reset</button>
          {/* <button onClick={() => dispatch(1)}>Add 1</button> */}
        </form>
      </div>
    </div>
  );
}
