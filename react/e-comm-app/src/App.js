import React from "react";
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { Navbar,Nav,NavDropdown } from "react-bootstrap";

function App() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <div className="App container">
    //   <Navbar fluid collapseOnSelect>
    //     <Navbar.Header>
    //       <Navbar.Brand>
    //         {/* <Link to="/">Scratch</Link> */}
    //       </Navbar.Brand>
    //       <Navbar.Toggle />
    //     </Navbar.Header>
    //   </Navbar>
    // </div>
  );
}

export default App;
