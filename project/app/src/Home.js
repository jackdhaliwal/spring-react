import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
//home page and an example of a picture at the bottom
class Home extends Component {
  render() {
    return (
      <div>
        //This is the navigation bar that you have to include in your other pages  (see import up top and line below)
        <AppNavbar/>
        <Container fluid>

          //links on the homepage 
          //reviews page will not load unless backend is up!
          <Button color="link"><Link to="/reviews">View/Submit a review</Link></Button>
          //notice the "Link to="/whatever"
          <Button color="link"><Link to="/about">Sign up for a mailing list</Link></Button>
          <Button color="link"><Link to="/reviews">Best Sellers</Link></Button>
        </Container>



        <Container fluid>
          <img src={require('./logo.svg')}  alt="react logo"/>
        </Container>
        
      </div>
    );
  }
}

export default Home;