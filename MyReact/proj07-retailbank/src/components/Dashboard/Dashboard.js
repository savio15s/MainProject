import React, { useState, useEffect } from "react";
import { authenticationService } from "../../services/authentication.service";
import { userService } from "../../services/user.service";

export default function Dashboard() {
  const [currentUser, setCurrentUser] = useState({
    cUser: "",
    users: null,
  });

  const [change, setChange] = useState("");

  //Constructor
  useEffect(() => {
    //setCurrentUser({
    //  cUser: authenticationService.currentUserValue,
    //  users: null,
    //});

    authenticationService.currentUser.subscribe((x) => {
      console.log("=========================X");
      console.log(x);
      setCurrentUser({
        cUser: x,
      });
    });

    console.log("Dashboard - ##Constuctor....................1");
    console.log(currentUser);

    //userService.getAll().then(users => setCurrentUser({ users }));
    userService.getAll().then((urs) => {
      console.log("UUSSEERRSS...");
      console.log(urs);

      setCurrentUser((prev) => {
        return {
          cUser: prev.cUser,
          users: urs,
        };
      });
    });

    console.log("##Constuctor....................2");
    console.log(currentUser);
  }, []);

  return (
    <div>
      <h1>Hi {currentUser.cUser.firstName}!</h1>
      <p>You're logged in with React & JWT!!</p>
      <h3>Users from secure api end point:</h3>
      {currentUser.users && (
        <ul>
          {currentUser.users.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
