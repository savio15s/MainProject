import React from 'react';
import {useFormik} from 'formik';
import * as Yup from "yup";


const validationSchema = Yup.object({
    firstName  : Yup.string().required("Required"),
    lastName : Yup.string().required("Required")
});


export default function FormikForm() {

    const  { handleSubmit,handleChange,values,errors } = useFormik({
        initialValues : {
            firstName : "",
            lastName : ""
        },
        validationSchema,
        onSubmit(values){
            console.log(values);
        }
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name="firstName"
                    onChange = {handleChange}
                    values = {values.firstName}
                />
                {errors.firstName ? errors.firstName : null}
                <input 
                    name="lastName"
                    onChange = {handleChange}
                    values = {values.lastName}
                />
                {errors.lastName ? errors.lastName : null}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
