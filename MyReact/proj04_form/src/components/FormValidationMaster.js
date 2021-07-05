//https://medium.com/@adostes/validating-a-form-in-react-cc29d47e140f
import React from "react";
import SimpleFormValidation from "./SimpleFormValidation";

export default function FormValidationMaster() {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "960px",
        padding: "10px",
      }}
    >
      <SimpleFormValidation alidate={validate} initialValues={initialValues}/> 
    </div>
  );
}

const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < 3) {
    return `${fieldName} needs to be at least three characters`;
  }
  return null;
};

const emailValidation = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return null;
  }
  if (email.trim() === "") {
    return "Email is required";
  }
  return "Please enter a valid email";
};

const ageValidation = (age) => {
  if (!age) {
    return "Age is required";
  }
  if (age < 18) {
    return "Age must be at least 18";
  }
  if (age > 99) {
    return "Age must be under 99";
  }
  return null;
};

const validate = {
  firstName: (name) => nameValidation("First Name", name),
  lastName: (name) => nameValidation("Last Name", name),
  email: emailValidation,
  age: ageValidation,
};

const initialValues = {
  age: 10,
  email: "no@email",
  firstName: "Mary",
  lastName: "Jane",
};
