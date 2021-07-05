import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";
import { history } from "./helpers/history";
import LoginPage from "./components/login/LoginPage";
import { PrivateRoute } from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import FundsTransfer from "./components/FundsTransfer/FundsTransfer";
import About from "./components/About";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import { authenticationService } from "./services/authentication.service";
import NavBarClass from "./components/NavBarClass";

function App() {
  const [user, setUser] = useState({
    cUser: null,
  });

  useEffect(() => {
    authenticationService.currentUser.subscribe((x) =>
      setUser({
        cUser: x
      })
    );
  },[]);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <Router history={history}>
            {user.cUser && (
              <NavBar user={user.cUser} />
            )}
            <div className="jumbotron">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    <PrivateRoute exact path="/" component={Dashboard} />
                    <PrivateRoute
                      exact
                      path="/fundstransfer"
                      component={FundsTransfer}
                    />
                    <PrivateRoute exact path="/abountus" component={About} />
                    <Route path="/login" component={LoginPage} />
                  </div>
                </div>
              </div>
            </div>
          </Router>
        </div>
      </div>
    </div>

    // <Router>
    //   <div className="App">
    //     <ul className="App-header">
    //       <li>
    //         <Link to="/">Login</Link>
    //       </li>
    //       <li>
    //         <Link to="/dashboard">DashBoard</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //     </ul>
    //     <Switch>
    //       <Route exact path="/" component={Login}></Route>
    //       <Route exact path="/about" component={About}></Route>
    //       <Route exact path="/dashboard" component={DashBoard}></Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
