import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import Secure from './components/Secure';

class App extends Component {

  flag = false;

  datats = [
    { id: 1, menu: "/link1", desc: "desc-1" },
    { id: 2, menu: "/link2", desc: "desc-2" },
    { id: 1, menu: "/link3", desc: "desc-3" }
  ];

  render() {
    return (
      <Router>
        <div className="App">
          <ul className="App-header">
            {
              this.flag && this.datats.map(x => {
                return (
                  <li>
                    <Link to={x.menu}>{x.desc}</Link>
                  </li>
                )
              })
            }
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/secure">SecureLink</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/about' component={About}></Route>
            <Route exact path='/contact' component={Contact}></Route>
            <Route path="/login" component={LoginPage} />
            <PrivateRoute exact path="/secure" flag={this.flag} component={Secure} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;