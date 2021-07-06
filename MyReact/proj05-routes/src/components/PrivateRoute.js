import React from 'react';
import { Redirect, Route } from 'react-router';

// const PrivateRoute = ({component:Component,...rest}) => {
//     console.log("====================1");
//     console.log(...rest)
//     return (
//         <Route
//              {...rest} 
//              render={(props) => {
//                      console.log("=========================2")
//                      console.log(props);   
//                      return <Component {...props}/>;
//                  }
//              }  
//             />
//     )


// };

//export default PrivateRoute;

//import React from 'react';
//
export default function PrivateRoute({ component: Component, flag, ...abcd }) {
    //   export default function PrivateRoute(props) {
    console.log("====================1");
    console.log(JSON.stringify(abcd));
    //console.log(JSON.stringify(component));
    console.log(JSON.stringify(Component));
    return (
        <div>
            <Route
                render={(props) => {
                    console.log("=========================2")
                    console.log(JSON.stringify(props));
                    if (!flag) {
                        return (
                            <Redirect
                                to={{ pathname: "/login", state: { from: props.location } }}
                            />
                        );
                    }


                    return <Component {...props} />;
                }
                }
            />
        </div>
    );
}


