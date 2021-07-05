import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { authenticationService } from "../services/authentication.service";

export default function NavBar(props) {

  const [value, setValue] = useState(props.user);
  const [navs, setNavs] = useState({
    menus: [],
  });

  const datas = [
    { id: 1, name: "/fundstransfer", label: "Funds Transfer" },
    { id: 1, name: "/abountus", label: "About Us" },
  ];

  

  useEffect(() => { 
    setValue(props.user);
    setNavs({
      menus : datas
    })
  }, [props.user]);


  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {navs.menus.map((itm, idx) => {
              console.log(itm);
              return <Nav.Link key={idx} href={itm.name}>{itm.label}</Nav.Link>;
            })}
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/fundstransfer">Funds Transfer</Nav.Link>
            <Nav.Link href="/abountus">About Us</Nav.Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
      <br />
    </div>
  );
}
