// import React from "react";

// export default function Debug(props) {
//   const data = props.data;

//   let line = <div>
//   //for (const property in data) {
//   //  console.log(property);
//     //line = line + <div>${property}: ${data[property]}</div>
//   //};

//   //line = line + </div>;

//   return <div>{line}</div>;
// }
import React from 'react'

export default function Debug(props) {
    return (
        <div style={{
            color: "blue",
          }}>
            <hr/>
            <div>{new Date().toString()}</div>
            {Object.keys(props.data).map(item=>{
                return <div>{item}-{props.data[item]}</div>
            })}
        </div>
    )
}
