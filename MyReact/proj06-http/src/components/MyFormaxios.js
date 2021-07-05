import React, { useState, useEffect } from "react";
import Myalert from "./Myalert";
import MyAlertClass from "./MyAlertClass";
import axios from 'axios';

export default function MyFormaxios() {
  const handleOk = () => {
    console.log("=================OK");
  };

  const [val, setVal] = useState({
    firstname: "",
    city: "",
    utype: "",
  });

  const [cities, setCities] = useState([]);
  const [utypes, setUtypes] = useState([]);
  const [res, setRes] = useState({});
  const [sub, setSub] = useState(false);

  const handleDoSubmit = (e) => {
    e.preventDefault();
    setSub(true);
    console.log("===+Submitted====");
    setRes(123);
    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer my-token",
    //     "My-Custom-Header": "foobar",
    //   },
    //   body: JSON.stringify(val),
    // };
    // fetch("http://localhost:4000/user", requestOptions)
    //   .then((response) => response.json())
    //   //.then((data) => this.setState({ postId: data.id }));
    //   .then((data) => {
    //     console.log("=======++Saved");
    //     console.log(data.id);

    //     setRes(data.id);
    //   });

    axios.post("http://localhost:4000/user",JSON.stringify(val))
        .then(data => setRes(data.id));

    console.log(val);
  };

  const handleOnChange = (event) => {
    const isInternalExternal = event.target.type === "checkbox";

    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setVal((prev) => {
      return {
        ...prev,
        [name]: isInternalExternal ? event.target.checked : value,
      };
    });

    console.log(val);
  };

   getTypes = async () => {
    return axios.get('http://localhost:4000/utype');
  }

  useEffect(() => {
    console.log("====Loads after render method");
    axios.get('http://localhost:4000/cities')
      .then(response => setCities(data))
      .catch(error => {
          console.error('There was an error!', error);
    });

    const typesres = await getTypes();
    setUtypes(typesres);

    // fetch("http://localhost:4000/cities")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("cities");
    //     console.log(data);
    //     setCities(data);
    //   })
    //   .catch((e) => {
    //     console.log("===Eror");
    //     console.log(e);
    //   })
    //   .finally(() => {
    //     console.log("All is well");
    //   });

    // fetch("http://localhost:4000/utype")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("utypes");
    //     console.log(data);
    //     setUtypes(data);
    //   });
  }, []);

  return (
    <div>
      <form onSubmit={handleDoSubmit} noValidate>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            onChange={handleOnChange}
            value={val.firstname}
          />
        </div>

        <div>
          <label>City</label>
          <select name="city" onChange={handleOnChange} value={val.city}>
            <option value="-1">Please select a city</option>
            {cities.map((x) => {
              return (
                <option key={x.id} value={x.id}>
                  {x.name}
                </option>
              );
            })}
          </select>
        </div>

        <div>
          <label>User Type</label>
          <select name="utype" onChange={handleOnChange} value={val.utype}>
            <option value="-1">Please select a type</option>
            {utypes.map((x) => {
              return (
                <option key={x.id} value={x.id}>
                  {x.name}
                </option>
              );
            })}
          </select>
        </div>

        <button type="submit">Add</button>
      </form>
      {res != null && sub && <div>{res}</div> }
    </div>
  );
}
