import React from "react";
import { Route, Redirect } from "react-router-dom";

import { authenticationService } from '../services/authentication.service';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const currentUser =  authenticationService.currentUserValue;
      //console.log("=========================#" + currentUser);
      //console.log(JSON.stringify(rest));
      //console.log("=========================0");
      if (!currentUser) {
        //console.log("=========================1");
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }
      //console.log("=========================2");

      return <Component {...props} />;
    }}
  />
);

// export default function PrivateRoute({component:Component, ...rest}) {
//     return (
//     <Route {...rest} render={props => {
//                                 const currentUser = "";
//                                 console.log("=========================0");
//                                 if (!currentUser){
//                                     console.log("=========================1");
//                                     return <Redirect to= {{pathname : '/login',state : {from:props.location}}} />
//                                 }
//                                 console.log("=========================2");

//                                 return <Component {...props} />
//                             }}

//     />
//     )
// }
