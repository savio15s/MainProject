import React, { useState } from "react";

export default function ArrayRemove() {
  const mydata = ["rajini", "bashs", "arunachalam", "pettai velan"];
  const [data, setData] = useState({
    d: mydata,
  });

  console.log(data.d.length);

  const removemydata = (e) => {
    const { value, name } = e.target;
    //alert(value + "," + name);
    console.log(value);
    const dt = data.d.filter(
            (x,i) => {
                return (i != value)
            });
    console.log(data)

    setData({
        d:dt
    })
  };

  return (
    <div>
      {data.d.map((x, i) => {
        return (
          <div>
            {x}-
            <button type="button" value={i} onClick={removemydata}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}
