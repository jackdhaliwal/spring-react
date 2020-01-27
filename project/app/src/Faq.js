// About.js
import React, { Component } from 'react';
import { Container, Typography } from 'reactstrap';
import AppNavbar from './AppNavbar';

// including nav bar on top of page

//TODO: pictures...descriptions..lots of cleanup


class Faq extends Component {
  state = {
    isLoading: false,
    about: ""
  };
  // sayHello = async (event) => {
  //   event.preventDefault();
  //   let response = await fetch('/about?name=' + this.state.about);
  //   let body = await response.json();
  // }
  render () {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
        // garbage data just for display purposes

          <h2>Thomas Paine</h2>

          <h3>About Me</h3>

          <h4>I am a digital designer and developer originally from London and based in New York with over 10 years of experience in the industry. I am a passionate creative that always leads by example and likes to get his hands dirty. I believe that design is only as powerful as the message it is able to carry. I constantly seek to inspire, and build the best work possible. I am a critical thinker and problem solver that pursues a holistic approach. I always make sure every aspect gets produced at the highest quality.</h4>

          <h4>Now I am working full time freelance as a designer and developer, building interactive digital products for clients from around the World. If you are interested in a new project, collaboration, or just to chat, feel free to contact me:</h4>
          //example of how to add links
          <a href="mailto:email@example.com">email@example.com</a>
        </Container>
        </div>
    )
  }
}

export default Faq;