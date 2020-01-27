import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


// change links in app bar in this file

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar color="dark" dark expand="md">
      <NavbarBrand tag={Link} to="/">Red Carpet Home</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href="/about">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/brinder-dhaliwal-40512792/">FAQ</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/in/brinder-dhaliwal-40512792/">Order Now</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>;


  }
}