import React from "react";
import {useFormik} from 'formik';
import * as Yup from "yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email:Yup.string().email("Invaid Email").required("Enter a valid email"),
  age: Yup.number().typeError('you must specify a number').min(20, 'Min value 20.').max(80, 'Max value 80.'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
});

export default function MyFormik() {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email:"",
      age:5,
      phoneNumber:""
    },
    validationSchema,
    onSubmit(values) {
      console.log(values);
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label>First Name</label>
          <input
          name="firstName"
          onChange={handleChange}
          values={values.firstName}
        />
        {errors.firstName ? errors.firstName : null}
        </div>

        <div>
        <label>Last Name</label>
        <input
          name="lastName"
          onChange={handleChange}
          values={values.lastName}
        />
        {errors.lastName ? errors.lastName : null}
        </div>

        <div>
        <label>Email</label>
        <input
          name="email"
          onChange={handleChange}
          values={values.email}
        />
        {errors.email ? errors.email : null}
        </div>
        <div>
        <label>Age</label>
        <input
          name="age"
          type="number"
          onChange={handleChange}
          values={values.age}
        />
        {errors.age ? errors.age : null}
        </div>

        <div>
        <label>Phone Number</label>
        <input
          name="phoneNumber"
          onChange={handleChange}
          values={values.phoneNumber}
        />
        {errors.phoneNumber ? errors.phoneNumber : null}
        </div>




        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
