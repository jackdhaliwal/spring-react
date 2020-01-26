import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Contact extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Button color="link"><Link to="/reviews">View/Submit a review</Link></Button>
          <Button color="link"><Link to="/">Sign up for a mailing list</Link></Button>
          <Button color="link"><Link to="/reviews">Best Sellers</Link></Button>
        </Container>
      </div>
    );
  }
}

export default Contact;